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
export var CloudflareWorkerRuleResponseRequestModeEnum;
(function (CloudflareWorkerRuleResponseRequestModeEnum) {
    CloudflareWorkerRuleResponseRequestModeEnum["Single"] = "single";
    CloudflareWorkerRuleResponseRequestModeEnum["Batch"] = "batch";
})(CloudflareWorkerRuleResponseRequestModeEnum || (CloudflareWorkerRuleResponseRequestModeEnum = {}));
export var CloudflareWorkerRuleResponseRuleTypeEnum;
(function (CloudflareWorkerRuleResponseRuleTypeEnum) {
    CloudflareWorkerRuleResponseRuleTypeEnum["HttpCloudflareWorker"] = "http/cloudflare-worker";
})(CloudflareWorkerRuleResponseRuleTypeEnum || (CloudflareWorkerRuleResponseRuleTypeEnum = {}));
export var CloudflareWorkerRuleResponseStatusEnum;
(function (CloudflareWorkerRuleResponseStatusEnum) {
    CloudflareWorkerRuleResponseStatusEnum["Enabled"] = "enabled";
    CloudflareWorkerRuleResponseStatusEnum["Disabled"] = "disabled";
})(CloudflareWorkerRuleResponseStatusEnum || (CloudflareWorkerRuleResponseStatusEnum = {}));
var CloudflareWorkerRuleResponseTargetHeaders = /** @class */ (function (_super) {
    __extends(CloudflareWorkerRuleResponseTargetHeaders, _super);
    function CloudflareWorkerRuleResponseTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponseTargetHeaders.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponseTargetHeaders.prototype, "value", void 0);
    return CloudflareWorkerRuleResponseTargetHeaders;
}(SpeakeasyBase));
export { CloudflareWorkerRuleResponseTargetHeaders };
var CloudflareWorkerRuleResponseTarget = /** @class */ (function (_super) {
    __extends(CloudflareWorkerRuleResponseTarget, _super);
    function CloudflareWorkerRuleResponseTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=headers", elemType: shared.CloudflareWorkerRuleResponseTargetHeaders }),
        __metadata("design:type", Array)
    ], CloudflareWorkerRuleResponseTarget.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponseTarget.prototype, "signingKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponseTarget.prototype, "url", void 0);
    return CloudflareWorkerRuleResponseTarget;
}(SpeakeasyBase));
export { CloudflareWorkerRuleResponseTarget };
var CloudflareWorkerRuleResponse = /** @class */ (function (_super) {
    __extends(CloudflareWorkerRuleResponse, _super);
    function CloudflareWorkerRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=_links" }),
        __metadata("design:type", Map)
    ], CloudflareWorkerRuleResponse.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponse.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], CloudflareWorkerRuleResponse.prototype, "created", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponse.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], CloudflareWorkerRuleResponse.prototype, "modified", void 0);
    __decorate([
        Metadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponse.prototype, "requestMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponse.prototype, "ruleType", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], CloudflareWorkerRuleResponse.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponse.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=target" }),
        __metadata("design:type", CloudflareWorkerRuleResponseTarget)
    ], CloudflareWorkerRuleResponse.prototype, "target", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CloudflareWorkerRuleResponse.prototype, "version", void 0);
    return CloudflareWorkerRuleResponse;
}(SpeakeasyBase));
export { CloudflareWorkerRuleResponse };
