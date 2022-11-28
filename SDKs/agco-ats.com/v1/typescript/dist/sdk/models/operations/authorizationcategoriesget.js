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
var AuthorizationCategoriesGetQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizationCategoriesGetQueryParams, _super);
    function AuthorizationCategoriesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=definitionID" }),
        __metadata("design:type", String)
    ], AuthorizationCategoriesGetQueryParams.prototype, "definitionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AuthorizationCategoriesGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], AuthorizationCategoriesGetQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userID" }),
        __metadata("design:type", Number)
    ], AuthorizationCategoriesGetQueryParams.prototype, "userId", void 0);
    return AuthorizationCategoriesGetQueryParams;
}(SpeakeasyBase));
export { AuthorizationCategoriesGetQueryParams };
var AuthorizationCategoriesGetRequest = /** @class */ (function (_super) {
    __extends(AuthorizationCategoriesGetRequest, _super);
    function AuthorizationCategoriesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizationCategoriesGetQueryParams)
    ], AuthorizationCategoriesGetRequest.prototype, "queryParams", void 0);
    return AuthorizationCategoriesGetRequest;
}(SpeakeasyBase));
export { AuthorizationCategoriesGetRequest };
var AuthorizationCategoriesGetResponse = /** @class */ (function (_super) {
    __extends(AuthorizationCategoriesGetResponse, _super);
    function AuthorizationCategoriesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiIPagedResponseAuthorizationCodesSharedModelsCategory)
    ], AuthorizationCategoriesGetResponse.prototype, "apiIPagedResponseAuthorizationCodesSharedModelsCategory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], AuthorizationCategoriesGetResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AuthorizationCategoriesGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizationCategoriesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizationCategoriesGetResponse.prototype, "statusCode", void 0);
    return AuthorizationCategoriesGetResponse;
}(SpeakeasyBase));
export { AuthorizationCategoriesGetResponse };
