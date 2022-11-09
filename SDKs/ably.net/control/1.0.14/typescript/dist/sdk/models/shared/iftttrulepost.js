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
export var IftttRulePostRequestModeEnum;
(function (IftttRulePostRequestModeEnum) {
    IftttRulePostRequestModeEnum["Single"] = "single";
})(IftttRulePostRequestModeEnum || (IftttRulePostRequestModeEnum = {}));
export var IftttRulePostRuleTypeEnum;
(function (IftttRulePostRuleTypeEnum) {
    IftttRulePostRuleTypeEnum["HttpIfttt"] = "http/ifttt";
})(IftttRulePostRuleTypeEnum || (IftttRulePostRuleTypeEnum = {}));
export var IftttRulePostStatusEnum;
(function (IftttRulePostStatusEnum) {
    IftttRulePostStatusEnum["Enabled"] = "enabled";
    IftttRulePostStatusEnum["Disabled"] = "disabled";
})(IftttRulePostStatusEnum || (IftttRulePostStatusEnum = {}));
var IftttRulePostTarget = /** @class */ (function (_super) {
    __extends(IftttRulePostTarget, _super);
    function IftttRulePostTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=eventName" }),
        __metadata("design:type", String)
    ], IftttRulePostTarget.prototype, "eventName", void 0);
    __decorate([
        Metadata({ data: "json, name=webhookKey" }),
        __metadata("design:type", String)
    ], IftttRulePostTarget.prototype, "webhookKey", void 0);
    return IftttRulePostTarget;
}(SpeakeasyBase));
export { IftttRulePostTarget };
var IftttRulePost = /** @class */ (function (_super) {
    __extends(IftttRulePost, _super);
    function IftttRulePost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], IftttRulePost.prototype, "requestMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], IftttRulePost.prototype, "ruleType", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], IftttRulePost.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], IftttRulePost.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=target" }),
        __metadata("design:type", IftttRulePostTarget)
    ], IftttRulePost.prototype, "target", void 0);
    return IftttRulePost;
}(SpeakeasyBase));
export { IftttRulePost };
