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
var PatchAppsAppIdRulesRuleIdPathParams = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdRulesRuleIdPathParams, _super);
    function PatchAppsAppIdRulesRuleIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdRulesRuleIdPathParams.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=rule_id" }),
        __metadata("design:type", String)
    ], PatchAppsAppIdRulesRuleIdPathParams.prototype, "ruleId", void 0);
    return PatchAppsAppIdRulesRuleIdPathParams;
}(SpeakeasyBase));
export { PatchAppsAppIdRulesRuleIdPathParams };
var PatchAppsAppIdRulesRuleIdSecurity = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdRulesRuleIdSecurity, _super);
    function PatchAppsAppIdRulesRuleIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PatchAppsAppIdRulesRuleIdSecurity.prototype, "bearerAuth", void 0);
    return PatchAppsAppIdRulesRuleIdSecurity;
}(SpeakeasyBase));
export { PatchAppsAppIdRulesRuleIdSecurity };
var PatchAppsAppIdRulesRuleIdRequest = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdRulesRuleIdRequest, _super);
    function PatchAppsAppIdRulesRuleIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PatchAppsAppIdRulesRuleIdPathParams)
    ], PatchAppsAppIdRulesRuleIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PatchAppsAppIdRulesRuleIdRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PatchAppsAppIdRulesRuleIdSecurity)
    ], PatchAppsAppIdRulesRuleIdRequest.prototype, "security", void 0);
    return PatchAppsAppIdRulesRuleIdRequest;
}(SpeakeasyBase));
export { PatchAppsAppIdRulesRuleIdRequest };
var PatchAppsAppIdRulesRuleIdResponse = /** @class */ (function (_super) {
    __extends(PatchAppsAppIdRulesRuleIdResponse, _super);
    function PatchAppsAppIdRulesRuleIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PatchAppsAppIdRulesRuleIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PatchAppsAppIdRulesRuleIdResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], PatchAppsAppIdRulesRuleIdResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PatchAppsAppIdRulesRuleIdResponse.prototype, "ruleResponse", void 0);
    return PatchAppsAppIdRulesRuleIdResponse;
}(SpeakeasyBase));
export { PatchAppsAppIdRulesRuleIdResponse };
