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
var GetTransactionsQueryParams = /** @class */ (function (_super) {
    __extends(GetTransactionsQueryParams, _super);
    function GetTransactionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=accountHolderId" }),
        __metadata("design:type", String)
    ], GetTransactionsQueryParams.prototype, "accountHolderId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=balanceAccountId" }),
        __metadata("design:type", String)
    ], GetTransactionsQueryParams.prototype, "balanceAccountId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=balancePlatform" }),
        __metadata("design:type", String)
    ], GetTransactionsQueryParams.prototype, "balancePlatform", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdSince" }),
        __metadata("design:type", Date)
    ], GetTransactionsQueryParams.prototype, "createdSince", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdUntil" }),
        __metadata("design:type", Date)
    ], GetTransactionsQueryParams.prototype, "createdUntil", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], GetTransactionsQueryParams.prototype, "cursor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTransactionsQueryParams.prototype, "limit", void 0);
    return GetTransactionsQueryParams;
}(SpeakeasyBase));
export { GetTransactionsQueryParams };
var GetTransactionsSecurity = /** @class */ (function (_super) {
    __extends(GetTransactionsSecurity, _super);
    function GetTransactionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetTransactionsSecurity.prototype, "apiKeyAuth", void 0);
    return GetTransactionsSecurity;
}(SpeakeasyBase));
export { GetTransactionsSecurity };
var GetTransactionsRequest = /** @class */ (function (_super) {
    __extends(GetTransactionsRequest, _super);
    function GetTransactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTransactionsQueryParams)
    ], GetTransactionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTransactionsSecurity)
    ], GetTransactionsRequest.prototype, "security", void 0);
    return GetTransactionsRequest;
}(SpeakeasyBase));
export { GetTransactionsRequest };
var GetTransactionsResponse = /** @class */ (function (_super) {
    __extends(GetTransactionsResponse, _super);
    function GetTransactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTransactionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetTransactionsResponse.prototype, "restServiceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTransactionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetTransactionsResponse.prototype, "transactionSearchResponse", void 0);
    return GetTransactionsResponse;
}(SpeakeasyBase));
export { GetTransactionsResponse };
