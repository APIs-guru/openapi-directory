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
export var HttpRuleResponseRequestModeEnum;
(function (HttpRuleResponseRequestModeEnum) {
    HttpRuleResponseRequestModeEnum["Single"] = "single";
    HttpRuleResponseRequestModeEnum["Batch"] = "batch";
})(HttpRuleResponseRequestModeEnum || (HttpRuleResponseRequestModeEnum = {}));
export var HttpRuleResponseRuleTypeEnum;
(function (HttpRuleResponseRuleTypeEnum) {
    HttpRuleResponseRuleTypeEnum["Http"] = "http";
})(HttpRuleResponseRuleTypeEnum || (HttpRuleResponseRuleTypeEnum = {}));
export var HttpRuleResponseStatusEnum;
(function (HttpRuleResponseStatusEnum) {
    HttpRuleResponseStatusEnum["Enabled"] = "enabled";
    HttpRuleResponseStatusEnum["Disabled"] = "disabled";
})(HttpRuleResponseStatusEnum || (HttpRuleResponseStatusEnum = {}));
export var HttpRuleResponseTargetFormatEnum;
(function (HttpRuleResponseTargetFormatEnum) {
    HttpRuleResponseTargetFormatEnum["Json"] = "json";
    HttpRuleResponseTargetFormatEnum["Msgpack"] = "msgpack";
})(HttpRuleResponseTargetFormatEnum || (HttpRuleResponseTargetFormatEnum = {}));
var HttpRuleResponseTargetHeaders = /** @class */ (function (_super) {
    __extends(HttpRuleResponseTargetHeaders, _super);
    function HttpRuleResponseTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], HttpRuleResponseTargetHeaders.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], HttpRuleResponseTargetHeaders.prototype, "value", void 0);
    return HttpRuleResponseTargetHeaders;
}(SpeakeasyBase));
export { HttpRuleResponseTargetHeaders };
var HttpRuleResponseTarget = /** @class */ (function (_super) {
    __extends(HttpRuleResponseTarget, _super);
    function HttpRuleResponseTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enveloped" }),
        __metadata("design:type", Boolean)
    ], HttpRuleResponseTarget.prototype, "enveloped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], HttpRuleResponseTarget.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers", elemType: HttpRuleResponseTargetHeaders }),
        __metadata("design:type", Array)
    ], HttpRuleResponseTarget.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signingKeyId" }),
        __metadata("design:type", String)
    ], HttpRuleResponseTarget.prototype, "signingKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], HttpRuleResponseTarget.prototype, "url", void 0);
    return HttpRuleResponseTarget;
}(SpeakeasyBase));
export { HttpRuleResponseTarget };
var HttpRuleResponse = /** @class */ (function (_super) {
    __extends(HttpRuleResponse, _super);
    function HttpRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", Map)
    ], HttpRuleResponse.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], HttpRuleResponse.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], HttpRuleResponse.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], HttpRuleResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], HttpRuleResponse.prototype, "modified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMode" }),
        __metadata("design:type", String)
    ], HttpRuleResponse.prototype, "requestMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleType" }),
        __metadata("design:type", String)
    ], HttpRuleResponse.prototype, "ruleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", RuleSource)
    ], HttpRuleResponse.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], HttpRuleResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", HttpRuleResponseTarget)
    ], HttpRuleResponse.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], HttpRuleResponse.prototype, "version", void 0);
    return HttpRuleResponse;
}(SpeakeasyBase));
export { HttpRuleResponse };
