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
var UserPermissionsGetUsersPathParams = /** @class */ (function (_super) {
    __extends(UserPermissionsGetUsersPathParams, _super);
    function UserPermissionsGetUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], UserPermissionsGetUsersPathParams.prototype, "id", void 0);
    return UserPermissionsGetUsersPathParams;
}(SpeakeasyBase));
export { UserPermissionsGetUsersPathParams };
var UserPermissionsGetUsersQueryParams = /** @class */ (function (_super) {
    __extends(UserPermissionsGetUsersQueryParams, _super);
    function UserPermissionsGetUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], UserPermissionsGetUsersQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], UserPermissionsGetUsersQueryParams.prototype, "offset", void 0);
    return UserPermissionsGetUsersQueryParams;
}(SpeakeasyBase));
export { UserPermissionsGetUsersQueryParams };
var UserPermissionsGetUsersRequest = /** @class */ (function (_super) {
    __extends(UserPermissionsGetUsersRequest, _super);
    function UserPermissionsGetUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserPermissionsGetUsersPathParams)
    ], UserPermissionsGetUsersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserPermissionsGetUsersQueryParams)
    ], UserPermissionsGetUsersRequest.prototype, "queryParams", void 0);
    return UserPermissionsGetUsersRequest;
}(SpeakeasyBase));
export { UserPermissionsGetUsersRequest };
var UserPermissionsGetUsersResponse = /** @class */ (function (_super) {
    __extends(UserPermissionsGetUsersResponse, _super);
    function UserPermissionsGetUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], UserPermissionsGetUsersResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseApiModelsUser)
    ], UserPermissionsGetUsersResponse.prototype, "apiPagedResponseApiModelsUser", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserPermissionsGetUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserPermissionsGetUsersResponse.prototype, "statusCode", void 0);
    return UserPermissionsGetUsersResponse;
}(SpeakeasyBase));
export { UserPermissionsGetUsersResponse };
