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
var PostAccountsAccountIdAppsPathParams = /** @class */ (function (_super) {
    __extends(PostAccountsAccountIdAppsPathParams, _super);
    function PostAccountsAccountIdAppsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" }),
        __metadata("design:type", String)
    ], PostAccountsAccountIdAppsPathParams.prototype, "accountId", void 0);
    return PostAccountsAccountIdAppsPathParams;
}(SpeakeasyBase));
export { PostAccountsAccountIdAppsPathParams };
var PostAccountsAccountIdAppsSecurity = /** @class */ (function (_super) {
    __extends(PostAccountsAccountIdAppsSecurity, _super);
    function PostAccountsAccountIdAppsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PostAccountsAccountIdAppsSecurity.prototype, "bearerAuth", void 0);
    return PostAccountsAccountIdAppsSecurity;
}(SpeakeasyBase));
export { PostAccountsAccountIdAppsSecurity };
var PostAccountsAccountIdAppsRequest = /** @class */ (function (_super) {
    __extends(PostAccountsAccountIdAppsRequest, _super);
    function PostAccountsAccountIdAppsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAccountsAccountIdAppsPathParams)
    ], PostAccountsAccountIdAppsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AppPost)
    ], PostAccountsAccountIdAppsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAccountsAccountIdAppsSecurity)
    ], PostAccountsAccountIdAppsRequest.prototype, "security", void 0);
    return PostAccountsAccountIdAppsRequest;
}(SpeakeasyBase));
export { PostAccountsAccountIdAppsRequest };
var PostAccountsAccountIdAppsResponse = /** @class */ (function (_super) {
    __extends(PostAccountsAccountIdAppsResponse, _super);
    function PostAccountsAccountIdAppsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAccountsAccountIdAppsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAccountsAccountIdAppsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AppResponse)
    ], PostAccountsAccountIdAppsResponse.prototype, "appResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PostAccountsAccountIdAppsResponse.prototype, "error", void 0);
    return PostAccountsAccountIdAppsResponse;
}(SpeakeasyBase));
export { PostAccountsAccountIdAppsResponse };
