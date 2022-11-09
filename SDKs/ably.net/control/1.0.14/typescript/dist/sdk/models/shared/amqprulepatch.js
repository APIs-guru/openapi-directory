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
export var AmqpRulePatchRequestModeEnum;
(function (AmqpRulePatchRequestModeEnum) {
    AmqpRulePatchRequestModeEnum["Single"] = "single";
})(AmqpRulePatchRequestModeEnum || (AmqpRulePatchRequestModeEnum = {}));
export var AmqpRulePatchRuleTypeEnum;
(function (AmqpRulePatchRuleTypeEnum) {
    AmqpRulePatchRuleTypeEnum["Amqp"] = "amqp";
})(AmqpRulePatchRuleTypeEnum || (AmqpRulePatchRuleTypeEnum = {}));
export var AmqpRulePatchStatusEnum;
(function (AmqpRulePatchStatusEnum) {
    AmqpRulePatchStatusEnum["Enabled"] = "enabled";
    AmqpRulePatchStatusEnum["Disabled"] = "disabled";
})(AmqpRulePatchStatusEnum || (AmqpRulePatchStatusEnum = {}));
var AmqpRulePatchTargetHeaders = /** @class */ (function (_super) {
    __extends(AmqpRulePatchTargetHeaders, _super);
    function AmqpRulePatchTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AmqpRulePatchTargetHeaders.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], AmqpRulePatchTargetHeaders.prototype, "value", void 0);
    return AmqpRulePatchTargetHeaders;
}(SpeakeasyBase));
export { AmqpRulePatchTargetHeaders };
var AmqpRulePatchTarget = /** @class */ (function (_super) {
    __extends(AmqpRulePatchTarget, _super);
    function AmqpRulePatchTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AmqpRulePatchTarget.prototype, "enveloped", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AmqpRulePatchTarget.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=headers", elemType: shared.AmqpRulePatchTargetHeaders }),
        __metadata("design:type", Array)
    ], AmqpRulePatchTarget.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "json, name=queueId" }),
        __metadata("design:type", String)
    ], AmqpRulePatchTarget.prototype, "queueId", void 0);
    return AmqpRulePatchTarget;
}(SpeakeasyBase));
export { AmqpRulePatchTarget };
var AmqpRulePatch = /** @class */ (function (_super) {
    __extends(AmqpRulePatch, _super);
    function AmqpRulePatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AmqpRulePatch.prototype, "requestMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AmqpRulePatch.prototype, "ruleType", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], AmqpRulePatch.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AmqpRulePatch.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=target" }),
        __metadata("design:type", AmqpRulePatchTarget)
    ], AmqpRulePatch.prototype, "target", void 0);
    return AmqpRulePatch;
}(SpeakeasyBase));
export { AmqpRulePatch };
