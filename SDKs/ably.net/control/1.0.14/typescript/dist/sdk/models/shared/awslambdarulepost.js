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
import { RuleSource } from "./rulesource";
export var AwsLambdaRulePostRequestModeEnum;
(function (AwsLambdaRulePostRequestModeEnum) {
    AwsLambdaRulePostRequestModeEnum["Single"] = "single";
})(AwsLambdaRulePostRequestModeEnum || (AwsLambdaRulePostRequestModeEnum = {}));
export var AwsLambdaRulePostRuleTypeEnum;
(function (AwsLambdaRulePostRuleTypeEnum) {
    AwsLambdaRulePostRuleTypeEnum["AwsLambda"] = "aws/lambda";
})(AwsLambdaRulePostRuleTypeEnum || (AwsLambdaRulePostRuleTypeEnum = {}));
export var AwsLambdaRulePostStatusEnum;
(function (AwsLambdaRulePostStatusEnum) {
    AwsLambdaRulePostStatusEnum["Enabled"] = "enabled";
    AwsLambdaRulePostStatusEnum["Disabled"] = "disabled";
})(AwsLambdaRulePostStatusEnum || (AwsLambdaRulePostStatusEnum = {}));
var AwsLambdaRulePostTarget = /** @class */ (function (_super) {
    __extends(AwsLambdaRulePostTarget, _super);
    function AwsLambdaRulePostTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=authentication" }),
        __metadata("design:type", Object)
    ], AwsLambdaRulePostTarget.prototype, "authentication", void 0);
    __decorate([
        Metadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AwsLambdaRulePostTarget.prototype, "enveloped", void 0);
    __decorate([
        Metadata({ data: "json, name=functionName" }),
        __metadata("design:type", String)
    ], AwsLambdaRulePostTarget.prototype, "functionName", void 0);
    __decorate([
        Metadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], AwsLambdaRulePostTarget.prototype, "region", void 0);
    return AwsLambdaRulePostTarget;
}(SpeakeasyBase));
export { AwsLambdaRulePostTarget };
var AwsLambdaRulePost = /** @class */ (function (_super) {
    __extends(AwsLambdaRulePost, _super);
    function AwsLambdaRulePost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AwsLambdaRulePost.prototype, "requestMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AwsLambdaRulePost.prototype, "ruleType", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], AwsLambdaRulePost.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AwsLambdaRulePost.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=target" }),
        __metadata("design:type", AwsLambdaRulePostTarget)
    ], AwsLambdaRulePost.prototype, "target", void 0);
    return AwsLambdaRulePost;
}(SpeakeasyBase));
export { AwsLambdaRulePost };
