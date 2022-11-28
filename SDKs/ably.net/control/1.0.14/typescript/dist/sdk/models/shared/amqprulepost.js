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
export var AmqpRulePostRequestModeEnum;
(function (AmqpRulePostRequestModeEnum) {
    AmqpRulePostRequestModeEnum["Single"] = "single";
})(AmqpRulePostRequestModeEnum || (AmqpRulePostRequestModeEnum = {}));
export var AmqpRulePostRuleTypeEnum;
(function (AmqpRulePostRuleTypeEnum) {
    AmqpRulePostRuleTypeEnum["Amqp"] = "amqp";
})(AmqpRulePostRuleTypeEnum || (AmqpRulePostRuleTypeEnum = {}));
export var AmqpRulePostStatusEnum;
(function (AmqpRulePostStatusEnum) {
    AmqpRulePostStatusEnum["Enabled"] = "enabled";
    AmqpRulePostStatusEnum["Disabled"] = "disabled";
})(AmqpRulePostStatusEnum || (AmqpRulePostStatusEnum = {}));
var AmqpRulePostTargetHeaders = /** @class */ (function (_super) {
    __extends(AmqpRulePostTargetHeaders, _super);
    function AmqpRulePostTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AmqpRulePostTargetHeaders.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], AmqpRulePostTargetHeaders.prototype, "value", void 0);
    return AmqpRulePostTargetHeaders;
}(SpeakeasyBase));
export { AmqpRulePostTargetHeaders };
var AmqpRulePostTarget = /** @class */ (function (_super) {
    __extends(AmqpRulePostTarget, _super);
    function AmqpRulePostTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AmqpRulePostTarget.prototype, "enveloped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AmqpRulePostTarget.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers", elemType: AmqpRulePostTargetHeaders }),
        __metadata("design:type", Array)
    ], AmqpRulePostTarget.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queueId" }),
        __metadata("design:type", String)
    ], AmqpRulePostTarget.prototype, "queueId", void 0);
    return AmqpRulePostTarget;
}(SpeakeasyBase));
export { AmqpRulePostTarget };
var AmqpRulePost = /** @class */ (function (_super) {
    __extends(AmqpRulePost, _super);
    function AmqpRulePost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AmqpRulePost.prototype, "requestMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AmqpRulePost.prototype, "ruleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], AmqpRulePost.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AmqpRulePost.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", AmqpRulePostTarget)
    ], AmqpRulePost.prototype, "target", void 0);
    return AmqpRulePost;
}(SpeakeasyBase));
export { AmqpRulePost };
