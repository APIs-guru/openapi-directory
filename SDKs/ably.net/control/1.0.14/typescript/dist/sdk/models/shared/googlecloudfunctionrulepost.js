var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";
export var GoogleCloudFunctionRulePostRequestModeEnum;
(function (GoogleCloudFunctionRulePostRequestModeEnum) {
    GoogleCloudFunctionRulePostRequestModeEnum["Single"] = "single";
    GoogleCloudFunctionRulePostRequestModeEnum["Batch"] = "batch";
})(GoogleCloudFunctionRulePostRequestModeEnum || (GoogleCloudFunctionRulePostRequestModeEnum = {}));
export var GoogleCloudFunctionRulePostRuleTypeEnum;
(function (GoogleCloudFunctionRulePostRuleTypeEnum) {
    GoogleCloudFunctionRulePostRuleTypeEnum["HttpGoogleCloudFunction"] = "http/google-cloud-function";
})(GoogleCloudFunctionRulePostRuleTypeEnum || (GoogleCloudFunctionRulePostRuleTypeEnum = {}));
export var GoogleCloudFunctionRulePostTargetFormatEnum;
(function (GoogleCloudFunctionRulePostTargetFormatEnum) {
    GoogleCloudFunctionRulePostTargetFormatEnum["Json"] = "json";
})(GoogleCloudFunctionRulePostTargetFormatEnum || (GoogleCloudFunctionRulePostTargetFormatEnum = {}));
var GoogleCloudFunctionRulePostTargetHeaders = /** @class */ (function (_super) {
    __extends(GoogleCloudFunctionRulePostTargetHeaders, _super);
    function GoogleCloudFunctionRulePostTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePostTargetHeaders.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePostTargetHeaders.prototype, "value", void 0);
    return GoogleCloudFunctionRulePostTargetHeaders;
}(SpeakeasyBase));
export { GoogleCloudFunctionRulePostTargetHeaders };
var GoogleCloudFunctionRulePostTarget = /** @class */ (function (_super) {
    __extends(GoogleCloudFunctionRulePostTarget, _super);
    function GoogleCloudFunctionRulePostTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudFunctionRulePostTarget.prototype, "enveloped", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePostTarget.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=functionName" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePostTarget.prototype, "functionName", void 0);
    __decorate([
        Metadata({ data: "json, name=headers", elemType: shared.GoogleCloudFunctionRulePostTargetHeaders }),
        __metadata("design:type", Array)
    ], GoogleCloudFunctionRulePostTarget.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePostTarget.prototype, "projectId", void 0);
    __decorate([
        Metadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePostTarget.prototype, "region", void 0);
    __decorate([
        Metadata({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePostTarget.prototype, "signingKeyId", void 0);
    return GoogleCloudFunctionRulePostTarget;
}(SpeakeasyBase));
export { GoogleCloudFunctionRulePostTarget };
var GoogleCloudFunctionRulePost = /** @class */ (function (_super) {
    __extends(GoogleCloudFunctionRulePost, _super);
    function GoogleCloudFunctionRulePost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePost.prototype, "requestMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePost.prototype, "ruleType", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], GoogleCloudFunctionRulePost.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=target" }),
        __metadata("design:type", GoogleCloudFunctionRulePostTarget)
    ], GoogleCloudFunctionRulePost.prototype, "target", void 0);
    return GoogleCloudFunctionRulePost;
}(SpeakeasyBase));
export { GoogleCloudFunctionRulePost };
