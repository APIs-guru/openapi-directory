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
export var ZapierRulePostRequestModeEnum;
(function (ZapierRulePostRequestModeEnum) {
    ZapierRulePostRequestModeEnum["Single"] = "single";
    ZapierRulePostRequestModeEnum["Batch"] = "batch";
})(ZapierRulePostRequestModeEnum || (ZapierRulePostRequestModeEnum = {}));
export var ZapierRulePostRuleTypeEnum;
(function (ZapierRulePostRuleTypeEnum) {
    ZapierRulePostRuleTypeEnum["HttpZapier"] = "http/zapier";
})(ZapierRulePostRuleTypeEnum || (ZapierRulePostRuleTypeEnum = {}));
export var ZapierRulePostStatusEnum;
(function (ZapierRulePostStatusEnum) {
    ZapierRulePostStatusEnum["Enabled"] = "enabled";
    ZapierRulePostStatusEnum["Disabled"] = "disabled";
})(ZapierRulePostStatusEnum || (ZapierRulePostStatusEnum = {}));
var ZapierRulePostTargetHeaders = /** @class */ (function (_super) {
    __extends(ZapierRulePostTargetHeaders, _super);
    function ZapierRulePostTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ZapierRulePostTargetHeaders.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ZapierRulePostTargetHeaders.prototype, "value", void 0);
    return ZapierRulePostTargetHeaders;
}(SpeakeasyBase));
export { ZapierRulePostTargetHeaders };
var ZapierRulePostTarget = /** @class */ (function (_super) {
    __extends(ZapierRulePostTarget, _super);
    function ZapierRulePostTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers", elemType: ZapierRulePostTargetHeaders }),
        __metadata("design:type", Array)
    ], ZapierRulePostTarget.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], ZapierRulePostTarget.prototype, "signingKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ZapierRulePostTarget.prototype, "url", void 0);
    return ZapierRulePostTarget;
}(SpeakeasyBase));
export { ZapierRulePostTarget };
var ZapierRulePost = /** @class */ (function (_super) {
    __extends(ZapierRulePost, _super);
    function ZapierRulePost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], ZapierRulePost.prototype, "requestMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], ZapierRulePost.prototype, "ruleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], ZapierRulePost.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ZapierRulePost.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", ZapierRulePostTarget)
    ], ZapierRulePost.prototype, "target", void 0);
    return ZapierRulePost;
}(SpeakeasyBase));
export { ZapierRulePost };
