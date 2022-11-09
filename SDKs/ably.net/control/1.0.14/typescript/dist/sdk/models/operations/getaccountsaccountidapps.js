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
var GetAccountsAccountIdAppsPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdAppsPathParams, _super);
    function GetAccountsAccountIdAppsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" }),
        __metadata("design:type", String)
    ], GetAccountsAccountIdAppsPathParams.prototype, "accountId", void 0);
    return GetAccountsAccountIdAppsPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountIdAppsPathParams };
var GetAccountsAccountIdAppsSecurity = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdAppsSecurity, _super);
    function GetAccountsAccountIdAppsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAccountsAccountIdAppsSecurity.prototype, "bearerAuth", void 0);
    return GetAccountsAccountIdAppsSecurity;
}(SpeakeasyBase));
export { GetAccountsAccountIdAppsSecurity };
var GetAccountsAccountIdAppsRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdAppsRequest, _super);
    function GetAccountsAccountIdAppsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAccountsAccountIdAppsPathParams)
    ], GetAccountsAccountIdAppsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAccountsAccountIdAppsSecurity)
    ], GetAccountsAccountIdAppsRequest.prototype, "security", void 0);
    return GetAccountsAccountIdAppsRequest;
}(SpeakeasyBase));
export { GetAccountsAccountIdAppsRequest };
var GetAccountsAccountIdAppsResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountIdAppsResponse, _super);
    function GetAccountsAccountIdAppsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountIdAppsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountIdAppsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.AppResponse }),
        __metadata("design:type", Array)
    ], GetAccountsAccountIdAppsResponse.prototype, "appResponses", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], GetAccountsAccountIdAppsResponse.prototype, "error", void 0);
    return GetAccountsAccountIdAppsResponse;
}(SpeakeasyBase));
export { GetAccountsAccountIdAppsResponse };
