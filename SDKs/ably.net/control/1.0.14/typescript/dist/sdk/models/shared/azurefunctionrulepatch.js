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
export var AzureFunctionRulePatchRequestModeEnum;
(function (AzureFunctionRulePatchRequestModeEnum) {
    AzureFunctionRulePatchRequestModeEnum["Single"] = "single";
    AzureFunctionRulePatchRequestModeEnum["Batch"] = "batch";
})(AzureFunctionRulePatchRequestModeEnum || (AzureFunctionRulePatchRequestModeEnum = {}));
export var AzureFunctionRulePatchRuleTypeEnum;
(function (AzureFunctionRulePatchRuleTypeEnum) {
    AzureFunctionRulePatchRuleTypeEnum["HttpAzureFunction"] = "http/azure-function";
})(AzureFunctionRulePatchRuleTypeEnum || (AzureFunctionRulePatchRuleTypeEnum = {}));
export var AzureFunctionRulePatchStatusEnum;
(function (AzureFunctionRulePatchStatusEnum) {
    AzureFunctionRulePatchStatusEnum["Enabled"] = "enabled";
    AzureFunctionRulePatchStatusEnum["Disabled"] = "disabled";
})(AzureFunctionRulePatchStatusEnum || (AzureFunctionRulePatchStatusEnum = {}));
export var AzureFunctionRulePatchTargetFormatEnum;
(function (AzureFunctionRulePatchTargetFormatEnum) {
    AzureFunctionRulePatchTargetFormatEnum["Json"] = "json";
})(AzureFunctionRulePatchTargetFormatEnum || (AzureFunctionRulePatchTargetFormatEnum = {}));
var AzureFunctionRulePatchTargetHeaders = /** @class */ (function (_super) {
    __extends(AzureFunctionRulePatchTargetHeaders, _super);
    function AzureFunctionRulePatchTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePatchTargetHeaders.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePatchTargetHeaders.prototype, "value", void 0);
    return AzureFunctionRulePatchTargetHeaders;
}(SpeakeasyBase));
export { AzureFunctionRulePatchTargetHeaders };
var AzureFunctionRulePatchTarget = /** @class */ (function (_super) {
    __extends(AzureFunctionRulePatchTarget, _super);
    function AzureFunctionRulePatchTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=azureAppId" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePatchTarget.prototype, "azureAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=azureFunctionName" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePatchTarget.prototype, "azureFunctionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AzureFunctionRulePatchTarget.prototype, "enveloped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePatchTarget.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers", elemType: AzureFunctionRulePatchTargetHeaders }),
        __metadata("design:type", Array)
    ], AzureFunctionRulePatchTarget.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePatchTarget.prototype, "signingKeyId", void 0);
    return AzureFunctionRulePatchTarget;
}(SpeakeasyBase));
export { AzureFunctionRulePatchTarget };
var AzureFunctionRulePatch = /** @class */ (function (_super) {
    __extends(AzureFunctionRulePatch, _super);
    function AzureFunctionRulePatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePatch.prototype, "requestMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePatch.prototype, "ruleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], AzureFunctionRulePatch.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePatch.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", AzureFunctionRulePatchTarget)
    ], AzureFunctionRulePatch.prototype, "target", void 0);
    return AzureFunctionRulePatch;
}(SpeakeasyBase));
export { AzureFunctionRulePatch };
