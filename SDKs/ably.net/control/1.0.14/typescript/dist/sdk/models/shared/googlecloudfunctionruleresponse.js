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
export var GoogleCloudFunctionRuleResponseRequestModeEnum;
(function (GoogleCloudFunctionRuleResponseRequestModeEnum) {
    GoogleCloudFunctionRuleResponseRequestModeEnum["Single"] = "single";
    GoogleCloudFunctionRuleResponseRequestModeEnum["Batch"] = "batch";
})(GoogleCloudFunctionRuleResponseRequestModeEnum || (GoogleCloudFunctionRuleResponseRequestModeEnum = {}));
export var GoogleCloudFunctionRuleResponseRuleTypeEnum;
(function (GoogleCloudFunctionRuleResponseRuleTypeEnum) {
    GoogleCloudFunctionRuleResponseRuleTypeEnum["HttpGoogleCloudFunction"] = "http/google-cloud-function";
})(GoogleCloudFunctionRuleResponseRuleTypeEnum || (GoogleCloudFunctionRuleResponseRuleTypeEnum = {}));
export var GoogleCloudFunctionRuleResponseStatusEnum;
(function (GoogleCloudFunctionRuleResponseStatusEnum) {
    GoogleCloudFunctionRuleResponseStatusEnum["Enabled"] = "enabled";
    GoogleCloudFunctionRuleResponseStatusEnum["Disabled"] = "disabled";
})(GoogleCloudFunctionRuleResponseStatusEnum || (GoogleCloudFunctionRuleResponseStatusEnum = {}));
export var GoogleCloudFunctionRuleResponseTargetFormatEnum;
(function (GoogleCloudFunctionRuleResponseTargetFormatEnum) {
    GoogleCloudFunctionRuleResponseTargetFormatEnum["Json"] = "json";
})(GoogleCloudFunctionRuleResponseTargetFormatEnum || (GoogleCloudFunctionRuleResponseTargetFormatEnum = {}));
var GoogleCloudFunctionRuleResponseTargetHeaders = /** @class */ (function (_super) {
    __extends(GoogleCloudFunctionRuleResponseTargetHeaders, _super);
    function GoogleCloudFunctionRuleResponseTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRuleResponseTargetHeaders.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRuleResponseTargetHeaders.prototype, "value", void 0);
    return GoogleCloudFunctionRuleResponseTargetHeaders;
}(SpeakeasyBase));
export { GoogleCloudFunctionRuleResponseTargetHeaders };
var GoogleCloudFunctionRuleResponseTarget = /** @class */ (function (_super) {
    __extends(GoogleCloudFunctionRuleResponseTarget, _super);
    function GoogleCloudFunctionRuleResponseTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudFunctionRuleResponseTarget.prototype, "enveloped", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRuleResponseTarget.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=functionName" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRuleResponseTarget.prototype, "functionName", void 0);
    __decorate([
        Metadata({ data: "json, name=headers", elemType: shared.GoogleCloudFunctionRuleResponseTargetHeaders }),
        __metadata("design:type", Array)
    ], GoogleCloudFunctionRuleResponseTarget.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRuleResponseTarget.prototype, "projectId", void 0);
    __decorate([
        Metadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRuleResponseTarget.prototype, "region", void 0);
    __decorate([
        Metadata({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRuleResponseTarget.prototype, "signingKeyId", void 0);
    return GoogleCloudFunctionRuleResponseTarget;
}(SpeakeasyBase));
export { GoogleCloudFunctionRuleResponseTarget };
var GoogleCloudFunctionRuleResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudFunctionRuleResponse, _super);
    function GoogleCloudFunctionRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=_links" }),
        __metadata("design:type", Map)
    ], GoogleCloudFunctionRuleResponse.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRuleResponse.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], GoogleCloudFunctionRuleResponse.prototype, "created", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRuleResponse.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], GoogleCloudFunctionRuleResponse.prototype, "modified", void 0);
    __decorate([
        Metadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRuleResponse.prototype, "requestMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRuleResponse.prototype, "ruleType", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], GoogleCloudFunctionRuleResponse.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRuleResponse.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=target" }),
        __metadata("design:type", GoogleCloudFunctionRuleResponseTarget)
    ], GoogleCloudFunctionRuleResponse.prototype, "target", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRuleResponse.prototype, "version", void 0);
    return GoogleCloudFunctionRuleResponse;
}(SpeakeasyBase));
export { GoogleCloudFunctionRuleResponse };
