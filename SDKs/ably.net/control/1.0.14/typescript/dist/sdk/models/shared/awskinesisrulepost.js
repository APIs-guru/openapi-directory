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
export var AwsKinesisRulePostRequestModeEnum;
(function (AwsKinesisRulePostRequestModeEnum) {
    AwsKinesisRulePostRequestModeEnum["Single"] = "single";
})(AwsKinesisRulePostRequestModeEnum || (AwsKinesisRulePostRequestModeEnum = {}));
export var AwsKinesisRulePostRuleTypeEnum;
(function (AwsKinesisRulePostRuleTypeEnum) {
    AwsKinesisRulePostRuleTypeEnum["AwsKinesis"] = "aws/kinesis";
})(AwsKinesisRulePostRuleTypeEnum || (AwsKinesisRulePostRuleTypeEnum = {}));
export var AwsKinesisRulePostStatusEnum;
(function (AwsKinesisRulePostStatusEnum) {
    AwsKinesisRulePostStatusEnum["Enabled"] = "enabled";
    AwsKinesisRulePostStatusEnum["Disabled"] = "disabled";
})(AwsKinesisRulePostStatusEnum || (AwsKinesisRulePostStatusEnum = {}));
export var AwsKinesisRulePostTargetFormatEnum;
(function (AwsKinesisRulePostTargetFormatEnum) {
    AwsKinesisRulePostTargetFormatEnum["Json"] = "json";
})(AwsKinesisRulePostTargetFormatEnum || (AwsKinesisRulePostTargetFormatEnum = {}));
var AwsKinesisRulePostTarget = /** @class */ (function (_super) {
    __extends(AwsKinesisRulePostTarget, _super);
    function AwsKinesisRulePostTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=authentication" }),
        __metadata("design:type", Object)
    ], AwsKinesisRulePostTarget.prototype, "authentication", void 0);
    __decorate([
        Metadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], AwsKinesisRulePostTarget.prototype, "enveloped", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AwsKinesisRulePostTarget.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=partitionKey" }),
        __metadata("design:type", String)
    ], AwsKinesisRulePostTarget.prototype, "partitionKey", void 0);
    __decorate([
        Metadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], AwsKinesisRulePostTarget.prototype, "region", void 0);
    __decorate([
        Metadata({ data: "json, name=streamName" }),
        __metadata("design:type", String)
    ], AwsKinesisRulePostTarget.prototype, "streamName", void 0);
    return AwsKinesisRulePostTarget;
}(SpeakeasyBase));
export { AwsKinesisRulePostTarget };
var AwsKinesisRulePost = /** @class */ (function (_super) {
    __extends(AwsKinesisRulePost, _super);
    function AwsKinesisRulePost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], AwsKinesisRulePost.prototype, "requestMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], AwsKinesisRulePost.prototype, "ruleType", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], AwsKinesisRulePost.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AwsKinesisRulePost.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=target" }),
        __metadata("design:type", AwsKinesisRulePostTarget)
    ], AwsKinesisRulePost.prototype, "target", void 0);
    return AwsKinesisRulePost;
}(SpeakeasyBase));
export { AwsKinesisRulePost };
