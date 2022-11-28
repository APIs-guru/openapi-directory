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
export var AwsLambdaRulePatchRequestModeEnum;
(function (AwsLambdaRulePatchRequestModeEnum) {
    AwsLambdaRulePatchRequestModeEnum["Single"] = "single";
})(AwsLambdaRulePatchRequestModeEnum || (AwsLambdaRulePatchRequestModeEnum = {}));
export var AwsLambdaRulePatchRuleTypeEnum;
(function (AwsLambdaRulePatchRuleTypeEnum) {
    AwsLambdaRulePatchRuleTypeEnum["AwsLambda"] = "aws/lambda";
})(AwsLambdaRulePatchRuleTypeEnum || (AwsLambdaRulePatchRuleTypeEnum = {}));
export var AwsLambdaRulePatchStatusEnum;
(function (AwsLambdaRulePatchStatusEnum) {
    AwsLambdaRulePatchStatusEnum["Enabled"] = "enabled";
    AwsLambdaRulePatchStatusEnum["Disabled"] = "disabled";
})(AwsLambdaRulePatchStatusEnum || (AwsLambdaRulePatchStatusEnum = {}));
var AwsLambdaRulePatchTarget = /** @class */ (function (_super) {
    __extends(AwsLambdaRulePatchTarget, _super);
    function AwsLambdaRulePatchTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authentication" }),
        __metadata("design:type", Object)
    ], AwsLambdaRulePatchTarget.prototype, "authentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AwsLambdaRulePatchTarget.prototype, "enveloped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=functionName" }),
        __metadata("design:type", String)
    ], AwsLambdaRulePatchTarget.prototype, "functionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], AwsLambdaRulePatchTarget.prototype, "region", void 0);
    return AwsLambdaRulePatchTarget;
}(SpeakeasyBase));
export { AwsLambdaRulePatchTarget };
var AwsLambdaRulePatch = /** @class */ (function (_super) {
    __extends(AwsLambdaRulePatch, _super);
    function AwsLambdaRulePatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AwsLambdaRulePatch.prototype, "requestMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AwsLambdaRulePatch.prototype, "ruleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], AwsLambdaRulePatch.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AwsLambdaRulePatch.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", AwsLambdaRulePatchTarget)
    ], AwsLambdaRulePatch.prototype, "target", void 0);
    return AwsLambdaRulePatch;
}(SpeakeasyBase));
export { AwsLambdaRulePatch };
