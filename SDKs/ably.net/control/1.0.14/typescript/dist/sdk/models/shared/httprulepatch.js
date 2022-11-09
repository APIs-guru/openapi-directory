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
export var HttpRulePatchRequestModeEnum;
(function (HttpRulePatchRequestModeEnum) {
    HttpRulePatchRequestModeEnum["Single"] = "single";
    HttpRulePatchRequestModeEnum["Batch"] = "batch";
})(HttpRulePatchRequestModeEnum || (HttpRulePatchRequestModeEnum = {}));
export var HttpRulePatchRuleTypeEnum;
(function (HttpRulePatchRuleTypeEnum) {
    HttpRulePatchRuleTypeEnum["Http"] = "http";
})(HttpRulePatchRuleTypeEnum || (HttpRulePatchRuleTypeEnum = {}));
export var HttpRulePatchStatusEnum;
(function (HttpRulePatchStatusEnum) {
    HttpRulePatchStatusEnum["Enabled"] = "enabled";
    HttpRulePatchStatusEnum["Disabled"] = "disabled";
})(HttpRulePatchStatusEnum || (HttpRulePatchStatusEnum = {}));
export var HttpRulePatchTargetFormatEnum;
(function (HttpRulePatchTargetFormatEnum) {
    HttpRulePatchTargetFormatEnum["Json"] = "json";
    HttpRulePatchTargetFormatEnum["Msgpack"] = "msgpack";
})(HttpRulePatchTargetFormatEnum || (HttpRulePatchTargetFormatEnum = {}));
var HttpRulePatchTargetHeaders = /** @class */ (function (_super) {
    __extends(HttpRulePatchTargetHeaders, _super);
    function HttpRulePatchTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], HttpRulePatchTargetHeaders.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], HttpRulePatchTargetHeaders.prototype, "value", void 0);
    return HttpRulePatchTargetHeaders;
}(SpeakeasyBase));
export { HttpRulePatchTargetHeaders };
var HttpRulePatchTarget = /** @class */ (function (_super) {
    __extends(HttpRulePatchTarget, _super);
    function HttpRulePatchTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], HttpRulePatchTarget.prototype, "enveloped", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], HttpRulePatchTarget.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=headers", elemType: shared.HttpRulePatchTargetHeaders }),
        __metadata("design:type", Array)
    ], HttpRulePatchTarget.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], HttpRulePatchTarget.prototype, "signingKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], HttpRulePatchTarget.prototype, "url", void 0);
    return HttpRulePatchTarget;
}(SpeakeasyBase));
export { HttpRulePatchTarget };
var HttpRulePatch = /** @class */ (function (_super) {
    __extends(HttpRulePatch, _super);
    function HttpRulePatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], HttpRulePatch.prototype, "requestMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], HttpRulePatch.prototype, "ruleType", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], HttpRulePatch.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], HttpRulePatch.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=target" }),
        __metadata("design:type", HttpRulePatchTarget)
    ], HttpRulePatch.prototype, "target", void 0);
    return HttpRulePatch;
}(SpeakeasyBase));
export { HttpRulePatch };
