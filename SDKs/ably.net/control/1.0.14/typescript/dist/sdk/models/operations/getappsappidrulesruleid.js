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
var GetAppsAppIdRulesRuleIdPathParams = /** @class */ (function (_super) {
    __extends(GetAppsAppIdRulesRuleIdPathParams, _super);
    function GetAppsAppIdRulesRuleIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], GetAppsAppIdRulesRuleIdPathParams.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=rule_id" }),
        __metadata("design:type", String)
    ], GetAppsAppIdRulesRuleIdPathParams.prototype, "ruleId", void 0);
    return GetAppsAppIdRulesRuleIdPathParams;
}(SpeakeasyBase));
export { GetAppsAppIdRulesRuleIdPathParams };
var GetAppsAppIdRulesRuleIdSecurity = /** @class */ (function (_super) {
    __extends(GetAppsAppIdRulesRuleIdSecurity, _super);
    function GetAppsAppIdRulesRuleIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAppsAppIdRulesRuleIdSecurity.prototype, "bearerAuth", void 0);
    return GetAppsAppIdRulesRuleIdSecurity;
}(SpeakeasyBase));
export { GetAppsAppIdRulesRuleIdSecurity };
var GetAppsAppIdRulesRuleIdRequest = /** @class */ (function (_super) {
    __extends(GetAppsAppIdRulesRuleIdRequest, _super);
    function GetAppsAppIdRulesRuleIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAppsAppIdRulesRuleIdPathParams)
    ], GetAppsAppIdRulesRuleIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAppsAppIdRulesRuleIdSecurity)
    ], GetAppsAppIdRulesRuleIdRequest.prototype, "security", void 0);
    return GetAppsAppIdRulesRuleIdRequest;
}(SpeakeasyBase));
export { GetAppsAppIdRulesRuleIdRequest };
var GetAppsAppIdRulesRuleIdResponse = /** @class */ (function (_super) {
    __extends(GetAppsAppIdRulesRuleIdResponse, _super);
    function GetAppsAppIdRulesRuleIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAppsAppIdRulesRuleIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAppsAppIdRulesRuleIdResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], GetAppsAppIdRulesRuleIdResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAppsAppIdRulesRuleIdResponse.prototype, "ruleResponse", void 0);
    return GetAppsAppIdRulesRuleIdResponse;
}(SpeakeasyBase));
export { GetAppsAppIdRulesRuleIdResponse };
