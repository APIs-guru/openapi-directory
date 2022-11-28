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
export var AmqpExternalRuleResponseRequestModeEnum;
(function (AmqpExternalRuleResponseRequestModeEnum) {
    AmqpExternalRuleResponseRequestModeEnum["Single"] = "single";
})(AmqpExternalRuleResponseRequestModeEnum || (AmqpExternalRuleResponseRequestModeEnum = {}));
export var AmqpExternalRuleResponseRuleTypeEnum;
(function (AmqpExternalRuleResponseRuleTypeEnum) {
    AmqpExternalRuleResponseRuleTypeEnum["AmqpExternal"] = "amqp/external";
})(AmqpExternalRuleResponseRuleTypeEnum || (AmqpExternalRuleResponseRuleTypeEnum = {}));
export var AmqpExternalRuleResponseStatusEnum;
(function (AmqpExternalRuleResponseStatusEnum) {
    AmqpExternalRuleResponseStatusEnum["Enabled"] = "enabled";
    AmqpExternalRuleResponseStatusEnum["Disabled"] = "disabled";
})(AmqpExternalRuleResponseStatusEnum || (AmqpExternalRuleResponseStatusEnum = {}));
var AmqpExternalRuleResponseTargetHeaders = /** @class */ (function (_super) {
    __extends(AmqpExternalRuleResponseTargetHeaders, _super);
    function AmqpExternalRuleResponseTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AmqpExternalRuleResponseTargetHeaders.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], AmqpExternalRuleResponseTargetHeaders.prototype, "value", void 0);
    return AmqpExternalRuleResponseTargetHeaders;
}(SpeakeasyBase));
export { AmqpExternalRuleResponseTargetHeaders };
var AmqpExternalRuleResponseTarget = /** @class */ (function (_super) {
    __extends(AmqpExternalRuleResponseTarget, _super);
    function AmqpExternalRuleResponseTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AmqpExternalRuleResponseTarget.prototype, "enveloped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AmqpExternalRuleResponseTarget.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers", elemType: AmqpExternalRuleResponseTargetHeaders }),
        __metadata("design:type", Array)
    ], AmqpExternalRuleResponseTarget.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mandatoryRoute" }),
        __metadata("design:type", Boolean)
    ], AmqpExternalRuleResponseTarget.prototype, "mandatoryRoute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageTtl" }),
        __metadata("design:type", Number)
    ], AmqpExternalRuleResponseTarget.prototype, "messageTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persistentMessages" }),
        __metadata("design:type", Boolean)
    ], AmqpExternalRuleResponseTarget.prototype, "persistentMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingKey" }),
        __metadata("design:type", String)
    ], AmqpExternalRuleResponseTarget.prototype, "routingKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AmqpExternalRuleResponseTarget.prototype, "url", void 0);
    return AmqpExternalRuleResponseTarget;
}(SpeakeasyBase));
export { AmqpExternalRuleResponseTarget };
var AmqpExternalRuleResponse = /** @class */ (function (_super) {
    __extends(AmqpExternalRuleResponse, _super);
    function AmqpExternalRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", Map)
    ], AmqpExternalRuleResponse.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], AmqpExternalRuleResponse.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], AmqpExternalRuleResponse.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AmqpExternalRuleResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], AmqpExternalRuleResponse.prototype, "modified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AmqpExternalRuleResponse.prototype, "requestMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AmqpExternalRuleResponse.prototype, "ruleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], AmqpExternalRuleResponse.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AmqpExternalRuleResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", AmqpExternalRuleResponseTarget)
    ], AmqpExternalRuleResponse.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], AmqpExternalRuleResponse.prototype, "version", void 0);
    return AmqpExternalRuleResponse;
}(SpeakeasyBase));
export { AmqpExternalRuleResponse };
