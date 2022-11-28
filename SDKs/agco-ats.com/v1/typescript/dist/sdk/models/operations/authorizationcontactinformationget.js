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
import * as shared from "../shared";
var AuthorizationContactInformationGetQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizationContactInformationGetQueryParams, _super);
    function AuthorizationContactInformationGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=afterDate" }),
        __metadata("design:type", Date)
    ], AuthorizationContactInformationGetQueryParams.prototype, "afterDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorizationCode" }),
        __metadata("design:type", String)
    ], AuthorizationContactInformationGetQueryParams.prototype, "authorizationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beforeDate" }),
        __metadata("design:type", Date)
    ], AuthorizationContactInformationGetQueryParams.prototype, "beforeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealerCode" }),
        __metadata("design:type", String)
    ], AuthorizationContactInformationGetQueryParams.prototype, "dealerCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AuthorizationContactInformationGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], AuthorizationContactInformationGetQueryParams.prototype, "offset", void 0);
    return AuthorizationContactInformationGetQueryParams;
}(SpeakeasyBase));
export { AuthorizationContactInformationGetQueryParams };
var AuthorizationContactInformationGetRequest = /** @class */ (function (_super) {
    __extends(AuthorizationContactInformationGetRequest, _super);
    function AuthorizationContactInformationGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizationContactInformationGetQueryParams)
    ], AuthorizationContactInformationGetRequest.prototype, "queryParams", void 0);
    return AuthorizationContactInformationGetRequest;
}(SpeakeasyBase));
export { AuthorizationContactInformationGetRequest };
var AuthorizationContactInformationGetResponse = /** @class */ (function (_super) {
    __extends(AuthorizationContactInformationGetResponse, _super);
    function AuthorizationContactInformationGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation)
    ], AuthorizationContactInformationGetResponse.prototype, "apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], AuthorizationContactInformationGetResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AuthorizationContactInformationGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizationContactInformationGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizationContactInformationGetResponse.prototype, "statusCode", void 0);
    return AuthorizationContactInformationGetResponse;
}(SpeakeasyBase));
export { AuthorizationContactInformationGetResponse };
