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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export var GoogleCloudFunctionRulePatchRequestModeEnum;
(function (GoogleCloudFunctionRulePatchRequestModeEnum) {
    GoogleCloudFunctionRulePatchRequestModeEnum["Single"] = "single";
    GoogleCloudFunctionRulePatchRequestModeEnum["Batch"] = "batch";
})(GoogleCloudFunctionRulePatchRequestModeEnum || (GoogleCloudFunctionRulePatchRequestModeEnum = {}));
export var GoogleCloudFunctionRulePatchRuleTypeEnum;
(function (GoogleCloudFunctionRulePatchRuleTypeEnum) {
    GoogleCloudFunctionRulePatchRuleTypeEnum["HttpGoogleCloudFunction"] = "http/google-cloud-function";
})(GoogleCloudFunctionRulePatchRuleTypeEnum || (GoogleCloudFunctionRulePatchRuleTypeEnum = {}));
export var GoogleCloudFunctionRulePatchStatusEnum;
(function (GoogleCloudFunctionRulePatchStatusEnum) {
    GoogleCloudFunctionRulePatchStatusEnum["Enabled"] = "enabled";
    GoogleCloudFunctionRulePatchStatusEnum["Disabled"] = "disabled";
})(GoogleCloudFunctionRulePatchStatusEnum || (GoogleCloudFunctionRulePatchStatusEnum = {}));
export var GoogleCloudFunctionRulePatchTargetFormatEnum;
(function (GoogleCloudFunctionRulePatchTargetFormatEnum) {
    GoogleCloudFunctionRulePatchTargetFormatEnum["Json"] = "json";
})(GoogleCloudFunctionRulePatchTargetFormatEnum || (GoogleCloudFunctionRulePatchTargetFormatEnum = {}));
var GoogleCloudFunctionRulePatchTargetHeaders = /** @class */ (function (_super) {
    __extends(GoogleCloudFunctionRulePatchTargetHeaders, _super);
    function GoogleCloudFunctionRulePatchTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePatchTargetHeaders.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePatchTargetHeaders.prototype, "value", void 0);
    return GoogleCloudFunctionRulePatchTargetHeaders;
}(SpeakeasyBase));
export { GoogleCloudFunctionRulePatchTargetHeaders };
var GoogleCloudFunctionRulePatchTarget = /** @class */ (function (_super) {
    __extends(GoogleCloudFunctionRulePatchTarget, _super);
    function GoogleCloudFunctionRulePatchTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudFunctionRulePatchTarget.prototype, "enveloped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePatchTarget.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=functionName" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePatchTarget.prototype, "functionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers", elemType: GoogleCloudFunctionRulePatchTargetHeaders }),
        __metadata("design:type", Array)
    ], GoogleCloudFunctionRulePatchTarget.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePatchTarget.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePatchTarget.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePatchTarget.prototype, "signingKeyId", void 0);
    return GoogleCloudFunctionRulePatchTarget;
}(SpeakeasyBase));
export { GoogleCloudFunctionRulePatchTarget };
var GoogleCloudFunctionRulePatch = /** @class */ (function (_super) {
    __extends(GoogleCloudFunctionRulePatch, _super);
    function GoogleCloudFunctionRulePatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePatch.prototype, "requestMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePatch.prototype, "ruleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], GoogleCloudFunctionRulePatch.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GoogleCloudFunctionRulePatch.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", GoogleCloudFunctionRulePatchTarget)
    ], GoogleCloudFunctionRulePatch.prototype, "target", void 0);
    return GoogleCloudFunctionRulePatch;
}(SpeakeasyBase));
export { GoogleCloudFunctionRulePatch };
