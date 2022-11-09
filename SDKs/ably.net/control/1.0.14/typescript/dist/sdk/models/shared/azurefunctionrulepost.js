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
export var AzureFunctionRulePostRequestModeEnum;
(function (AzureFunctionRulePostRequestModeEnum) {
    AzureFunctionRulePostRequestModeEnum["Single"] = "single";
    AzureFunctionRulePostRequestModeEnum["Batch"] = "batch";
})(AzureFunctionRulePostRequestModeEnum || (AzureFunctionRulePostRequestModeEnum = {}));
export var AzureFunctionRulePostRuleTypeEnum;
(function (AzureFunctionRulePostRuleTypeEnum) {
    AzureFunctionRulePostRuleTypeEnum["HttpAzureFunction"] = "http/azure-function";
})(AzureFunctionRulePostRuleTypeEnum || (AzureFunctionRulePostRuleTypeEnum = {}));
export var AzureFunctionRulePostStatusEnum;
(function (AzureFunctionRulePostStatusEnum) {
    AzureFunctionRulePostStatusEnum["Enabled"] = "enabled";
    AzureFunctionRulePostStatusEnum["Disabled"] = "disabled";
})(AzureFunctionRulePostStatusEnum || (AzureFunctionRulePostStatusEnum = {}));
export var AzureFunctionRulePostTargetFormatEnum;
(function (AzureFunctionRulePostTargetFormatEnum) {
    AzureFunctionRulePostTargetFormatEnum["Json"] = "json";
})(AzureFunctionRulePostTargetFormatEnum || (AzureFunctionRulePostTargetFormatEnum = {}));
var AzureFunctionRulePostTargetHeaders = /** @class */ (function (_super) {
    __extends(AzureFunctionRulePostTargetHeaders, _super);
    function AzureFunctionRulePostTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePostTargetHeaders.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePostTargetHeaders.prototype, "value", void 0);
    return AzureFunctionRulePostTargetHeaders;
}(SpeakeasyBase));
export { AzureFunctionRulePostTargetHeaders };
var AzureFunctionRulePostTarget = /** @class */ (function (_super) {
    __extends(AzureFunctionRulePostTarget, _super);
    function AzureFunctionRulePostTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=azureAppId" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePostTarget.prototype, "azureAppId", void 0);
    __decorate([
        Metadata({ data: "json, name=azureFunctionName" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePostTarget.prototype, "azureFunctionName", void 0);
    __decorate([
        Metadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AzureFunctionRulePostTarget.prototype, "enveloped", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePostTarget.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=headers", elemType: shared.AzureFunctionRulePostTargetHeaders }),
        __metadata("design:type", Array)
    ], AzureFunctionRulePostTarget.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePostTarget.prototype, "signingKeyId", void 0);
    return AzureFunctionRulePostTarget;
}(SpeakeasyBase));
export { AzureFunctionRulePostTarget };
var AzureFunctionRulePost = /** @class */ (function (_super) {
    __extends(AzureFunctionRulePost, _super);
    function AzureFunctionRulePost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePost.prototype, "requestMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePost.prototype, "ruleType", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], AzureFunctionRulePost.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AzureFunctionRulePost.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=target" }),
        __metadata("design:type", AzureFunctionRulePostTarget)
    ], AzureFunctionRulePost.prototype, "target", void 0);
    return AzureFunctionRulePost;
}(SpeakeasyBase));
export { AzureFunctionRulePost };
