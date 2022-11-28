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
var AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams = /** @class */ (function (_super) {
    __extends(AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams, _super);
    function AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categoryID" }),
        __metadata("design:type", String)
    ], AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdByUserID" }),
        __metadata("design:type", Number)
    ], AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams.prototype, "createdByUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deletedByUserID" }),
        __metadata("design:type", Number)
    ], AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams.prototype, "deletedByUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" }),
        __metadata("design:type", Boolean)
    ], AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams.prototype, "includeDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams.prototype, "offset", void 0);
    return AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams;
}(SpeakeasyBase));
export { AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams };
var AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest = /** @class */ (function (_super) {
    __extends(AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest, _super);
    function AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams)
    ], AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest.prototype, "queryParams", void 0);
    return AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest;
}(SpeakeasyBase));
export { AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest };
var AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse = /** @class */ (function (_super) {
    __extends(AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse, _super);
    function AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition)
    ], AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse.prototype, "apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse.prototype, "statusCode", void 0);
    return AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse;
}(SpeakeasyBase));
export { AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse };
