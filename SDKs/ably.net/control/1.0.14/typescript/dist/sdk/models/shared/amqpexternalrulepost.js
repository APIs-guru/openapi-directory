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
export var AmqpExternalRulePostRequestModeEnum;
(function (AmqpExternalRulePostRequestModeEnum) {
    AmqpExternalRulePostRequestModeEnum["Single"] = "single";
})(AmqpExternalRulePostRequestModeEnum || (AmqpExternalRulePostRequestModeEnum = {}));
export var AmqpExternalRulePostRuleTypeEnum;
(function (AmqpExternalRulePostRuleTypeEnum) {
    AmqpExternalRulePostRuleTypeEnum["AmqpExternal"] = "amqp/external";
})(AmqpExternalRulePostRuleTypeEnum || (AmqpExternalRulePostRuleTypeEnum = {}));
var AmqpExternalRulePostTargetHeaders = /** @class */ (function (_super) {
    __extends(AmqpExternalRulePostTargetHeaders, _super);
    function AmqpExternalRulePostTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePostTargetHeaders.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePostTargetHeaders.prototype, "value", void 0);
    return AmqpExternalRulePostTargetHeaders;
}(SpeakeasyBase));
export { AmqpExternalRulePostTargetHeaders };
var AmqpExternalRulePostTarget = /** @class */ (function (_super) {
    __extends(AmqpExternalRulePostTarget, _super);
    function AmqpExternalRulePostTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AmqpExternalRulePostTarget.prototype, "enveloped", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePostTarget.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=headers", elemType: shared.AmqpExternalRulePostTargetHeaders }),
        __metadata("design:type", Array)
    ], AmqpExternalRulePostTarget.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "json, name=mandatoryRoute" }),
        __metadata("design:type", Boolean)
    ], AmqpExternalRulePostTarget.prototype, "mandatoryRoute", void 0);
    __decorate([
        Metadata({ data: "json, name=messageTtl" }),
        __metadata("design:type", Number)
    ], AmqpExternalRulePostTarget.prototype, "messageTtl", void 0);
    __decorate([
        Metadata({ data: "json, name=persistentMessages" }),
        __metadata("design:type", Boolean)
    ], AmqpExternalRulePostTarget.prototype, "persistentMessages", void 0);
    __decorate([
        Metadata({ data: "json, name=routingKey" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePostTarget.prototype, "routingKey", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePostTarget.prototype, "url", void 0);
    return AmqpExternalRulePostTarget;
}(SpeakeasyBase));
export { AmqpExternalRulePostTarget };
var AmqpExternalRulePost = /** @class */ (function (_super) {
    __extends(AmqpExternalRulePost, _super);
    function AmqpExternalRulePost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePost.prototype, "requestMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AmqpExternalRulePost.prototype, "ruleType", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], AmqpExternalRulePost.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=target" }),
        __metadata("design:type", AmqpExternalRulePostTarget)
    ], AmqpExternalRulePost.prototype, "target", void 0);
    return AmqpExternalRulePost;
}(SpeakeasyBase));
export { AmqpExternalRulePost };
