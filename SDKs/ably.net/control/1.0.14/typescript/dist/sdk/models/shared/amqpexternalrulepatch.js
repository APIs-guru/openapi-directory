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
export var AmqpExternalRulePatchRequestModeEnum;
(function (AmqpExternalRulePatchRequestModeEnum) {
    AmqpExternalRulePatchRequestModeEnum["Single"] = "single";
})(AmqpExternalRulePatchRequestModeEnum || (AmqpExternalRulePatchRequestModeEnum = {}));
export var AmqpExternalRulePatchRuleTypeEnum;
(function (AmqpExternalRulePatchRuleTypeEnum) {
    AmqpExternalRulePatchRuleTypeEnum["AmqpExternal"] = "amqp/external";
})(AmqpExternalRulePatchRuleTypeEnum || (AmqpExternalRulePatchRuleTypeEnum = {}));
export var AmqpExternalRulePatchStatusEnum;
(function (AmqpExternalRulePatchStatusEnum) {
    AmqpExternalRulePatchStatusEnum["Enabled"] = "enabled";
    AmqpExternalRulePatchStatusEnum["Disabled"] = "disabled";
})(AmqpExternalRulePatchStatusEnum || (AmqpExternalRulePatchStatusEnum = {}));
var AmqpExternalRulePatchTargetHeaders = /** @class */ (function (_super) {
    __extends(AmqpExternalRulePatchTargetHeaders, _super);
    function AmqpExternalRulePatchTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePatchTargetHeaders.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePatchTargetHeaders.prototype, "value", void 0);
    return AmqpExternalRulePatchTargetHeaders;
}(SpeakeasyBase));
export { AmqpExternalRulePatchTargetHeaders };
var AmqpExternalRulePatchTarget = /** @class */ (function (_super) {
    __extends(AmqpExternalRulePatchTarget, _super);
    function AmqpExternalRulePatchTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AmqpExternalRulePatchTarget.prototype, "enveloped", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePatchTarget.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=headers", elemType: shared.AmqpExternalRulePatchTargetHeaders }),
        __metadata("design:type", Array)
    ], AmqpExternalRulePatchTarget.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "json, name=mandatoryRoute" }),
        __metadata("design:type", Boolean)
    ], AmqpExternalRulePatchTarget.prototype, "mandatoryRoute", void 0);
    __decorate([
        Metadata({ data: "json, name=messageTtl" }),
        __metadata("design:type", Number)
    ], AmqpExternalRulePatchTarget.prototype, "messageTtl", void 0);
    __decorate([
        Metadata({ data: "json, name=persistentMessages" }),
        __metadata("design:type", Boolean)
    ], AmqpExternalRulePatchTarget.prototype, "persistentMessages", void 0);
    __decorate([
        Metadata({ data: "json, name=routingKey" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePatchTarget.prototype, "routingKey", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePatchTarget.prototype, "url", void 0);
    return AmqpExternalRulePatchTarget;
}(SpeakeasyBase));
export { AmqpExternalRulePatchTarget };
var AmqpExternalRulePatch = /** @class */ (function (_super) {
    __extends(AmqpExternalRulePatch, _super);
    function AmqpExternalRulePatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePatch.prototype, "requestMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePatch.prototype, "ruleType", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], AmqpExternalRulePatch.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePatch.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=target" }),
        __metadata("design:type", AmqpExternalRulePatchTarget)
    ], AmqpExternalRulePatch.prototype, "target", void 0);
    return AmqpExternalRulePatch;
}(SpeakeasyBase));
export { AmqpExternalRulePatch };
