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
export var AwsSqsRulePostRequestModeEnum;
(function (AwsSqsRulePostRequestModeEnum) {
    AwsSqsRulePostRequestModeEnum["Single"] = "single";
})(AwsSqsRulePostRequestModeEnum || (AwsSqsRulePostRequestModeEnum = {}));
export var AwsSqsRulePostRuleTypeEnum;
(function (AwsSqsRulePostRuleTypeEnum) {
    AwsSqsRulePostRuleTypeEnum["AwsSqs"] = "aws/sqs";
})(AwsSqsRulePostRuleTypeEnum || (AwsSqsRulePostRuleTypeEnum = {}));
export var AwsSqsRulePostStatusEnum;
(function (AwsSqsRulePostStatusEnum) {
    AwsSqsRulePostStatusEnum["Enabled"] = "enabled";
    AwsSqsRulePostStatusEnum["Disabled"] = "disabled";
})(AwsSqsRulePostStatusEnum || (AwsSqsRulePostStatusEnum = {}));
var AwsSqsRulePostTarget = /** @class */ (function (_super) {
    __extends(AwsSqsRulePostTarget, _super);
    function AwsSqsRulePostTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authentication" }),
        __metadata("design:type", Object)
    ], AwsSqsRulePostTarget.prototype, "authentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsAccountId" }),
        __metadata("design:type", String)
    ], AwsSqsRulePostTarget.prototype, "awsAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AwsSqsRulePostTarget.prototype, "enveloped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AwsSqsRulePostTarget.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queueName" }),
        __metadata("design:type", String)
    ], AwsSqsRulePostTarget.prototype, "queueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], AwsSqsRulePostTarget.prototype, "region", void 0);
    return AwsSqsRulePostTarget;
}(SpeakeasyBase));
export { AwsSqsRulePostTarget };
var AwsSqsRulePost = /** @class */ (function (_super) {
    __extends(AwsSqsRulePost, _super);
    function AwsSqsRulePost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AwsSqsRulePost.prototype, "requestMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AwsSqsRulePost.prototype, "ruleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], AwsSqsRulePost.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AwsSqsRulePost.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", AwsSqsRulePostTarget)
    ], AwsSqsRulePost.prototype, "target", void 0);
    return AwsSqsRulePost;
}(SpeakeasyBase));
export { AwsSqsRulePost };
