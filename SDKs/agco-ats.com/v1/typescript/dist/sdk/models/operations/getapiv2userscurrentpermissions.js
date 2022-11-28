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
var GetApiV2UsersCurrentPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV2UsersCurrentPermissionsQueryParams, _super);
    function GetApiV2UsersCurrentPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Permission" }),
        __metadata("design:type", String)
    ], GetApiV2UsersCurrentPermissionsQueryParams.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetApiV2UsersCurrentPermissionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetApiV2UsersCurrentPermissionsQueryParams.prototype, "offset", void 0);
    return GetApiV2UsersCurrentPermissionsQueryParams;
}(SpeakeasyBase));
export { GetApiV2UsersCurrentPermissionsQueryParams };
var GetApiV2UsersCurrentPermissionsRequest = /** @class */ (function (_super) {
    __extends(GetApiV2UsersCurrentPermissionsRequest, _super);
    function GetApiV2UsersCurrentPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV2UsersCurrentPermissionsQueryParams)
    ], GetApiV2UsersCurrentPermissionsRequest.prototype, "queryParams", void 0);
    return GetApiV2UsersCurrentPermissionsRequest;
}(SpeakeasyBase));
export { GetApiV2UsersCurrentPermissionsRequest };
var GetApiV2UsersCurrentPermissionsResponse = /** @class */ (function (_super) {
    __extends(GetApiV2UsersCurrentPermissionsResponse, _super);
    function GetApiV2UsersCurrentPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], GetApiV2UsersCurrentPermissionsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseApiModelsUserEffectivePermission)
    ], GetApiV2UsersCurrentPermissionsResponse.prototype, "apiPagedResponseApiModelsUserEffectivePermission", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV2UsersCurrentPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV2UsersCurrentPermissionsResponse.prototype, "statusCode", void 0);
    return GetApiV2UsersCurrentPermissionsResponse;
}(SpeakeasyBase));
export { GetApiV2UsersCurrentPermissionsResponse };
