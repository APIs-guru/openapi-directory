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
export var HttpRulePostRequestModeEnum;
(function (HttpRulePostRequestModeEnum) {
    HttpRulePostRequestModeEnum["Single"] = "single";
    HttpRulePostRequestModeEnum["Batch"] = "batch";
})(HttpRulePostRequestModeEnum || (HttpRulePostRequestModeEnum = {}));
export var HttpRulePostRuleTypeEnum;
(function (HttpRulePostRuleTypeEnum) {
    HttpRulePostRuleTypeEnum["Http"] = "http";
})(HttpRulePostRuleTypeEnum || (HttpRulePostRuleTypeEnum = {}));
export var HttpRulePostStatusEnum;
(function (HttpRulePostStatusEnum) {
    HttpRulePostStatusEnum["Enabled"] = "enabled";
    HttpRulePostStatusEnum["Disabled"] = "disabled";
})(HttpRulePostStatusEnum || (HttpRulePostStatusEnum = {}));
export var HttpRulePostTargetFormatEnum;
(function (HttpRulePostTargetFormatEnum) {
    HttpRulePostTargetFormatEnum["Json"] = "json";
    HttpRulePostTargetFormatEnum["Msgpack"] = "msgpack";
})(HttpRulePostTargetFormatEnum || (HttpRulePostTargetFormatEnum = {}));
var HttpRulePostTargetHeaders = /** @class */ (function (_super) {
    __extends(HttpRulePostTargetHeaders, _super);
    function HttpRulePostTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], HttpRulePostTargetHeaders.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], HttpRulePostTargetHeaders.prototype, "value", void 0);
    return HttpRulePostTargetHeaders;
}(SpeakeasyBase));
export { HttpRulePostTargetHeaders };
var HttpRulePostTarget = /** @class */ (function (_super) {
    __extends(HttpRulePostTarget, _super);
    function HttpRulePostTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], HttpRulePostTarget.prototype, "enveloped", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], HttpRulePostTarget.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=headers", elemType: shared.HttpRulePostTargetHeaders }),
        __metadata("design:type", Array)
    ], HttpRulePostTarget.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], HttpRulePostTarget.prototype, "signingKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], HttpRulePostTarget.prototype, "url", void 0);
    return HttpRulePostTarget;
}(SpeakeasyBase));
export { HttpRulePostTarget };
var HttpRulePost = /** @class */ (function (_super) {
    __extends(HttpRulePost, _super);
    function HttpRulePost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], HttpRulePost.prototype, "requestMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], HttpRulePost.prototype, "ruleType", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], HttpRulePost.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], HttpRulePost.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=target" }),
        __metadata("design:type", HttpRulePostTarget)
    ], HttpRulePost.prototype, "target", void 0);
    return HttpRulePost;
}(SpeakeasyBase));
export { HttpRulePost };
