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
var GetVaultItemByIdPathParams = /** @class */ (function (_super) {
    __extends(GetVaultItemByIdPathParams, _super);
    function GetVaultItemByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" }),
        __metadata("design:type", String)
    ], GetVaultItemByIdPathParams.prototype, "itemUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" }),
        __metadata("design:type", String)
    ], GetVaultItemByIdPathParams.prototype, "vaultUuid", void 0);
    return GetVaultItemByIdPathParams;
}(SpeakeasyBase));
export { GetVaultItemByIdPathParams };
var GetVaultItemByIdSecurity = /** @class */ (function (_super) {
    __extends(GetVaultItemByIdSecurity, _super);
    function GetVaultItemByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeConnectToken)
    ], GetVaultItemByIdSecurity.prototype, "connectToken", void 0);
    return GetVaultItemByIdSecurity;
}(SpeakeasyBase));
export { GetVaultItemByIdSecurity };
var GetVaultItemByIdRequest = /** @class */ (function (_super) {
    __extends(GetVaultItemByIdRequest, _super);
    function GetVaultItemByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVaultItemByIdPathParams)
    ], GetVaultItemByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVaultItemByIdSecurity)
    ], GetVaultItemByIdRequest.prototype, "security", void 0);
    return GetVaultItemByIdRequest;
}(SpeakeasyBase));
export { GetVaultItemByIdRequest };
var GetVaultItemByIdResponse = /** @class */ (function (_super) {
    __extends(GetVaultItemByIdResponse, _super);
    function GetVaultItemByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVaultItemByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetVaultItemByIdResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FullItem)
    ], GetVaultItemByIdResponse.prototype, "fullItem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVaultItemByIdResponse.prototype, "statusCode", void 0);
    return GetVaultItemByIdResponse;
}(SpeakeasyBase));
export { GetVaultItemByIdResponse };
