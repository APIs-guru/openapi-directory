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
var GetVaultByIdPathParams = /** @class */ (function (_super) {
    __extends(GetVaultByIdPathParams, _super);
    function GetVaultByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=vaultUuid" }),
        __metadata("design:type", String)
    ], GetVaultByIdPathParams.prototype, "vaultUuid", void 0);
    return GetVaultByIdPathParams;
}(SpeakeasyBase));
export { GetVaultByIdPathParams };
var GetVaultByIdSecurity = /** @class */ (function (_super) {
    __extends(GetVaultByIdSecurity, _super);
    function GetVaultByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeConnectToken)
    ], GetVaultByIdSecurity.prototype, "connectToken", void 0);
    return GetVaultByIdSecurity;
}(SpeakeasyBase));
export { GetVaultByIdSecurity };
var GetVaultByIdRequest = /** @class */ (function (_super) {
    __extends(GetVaultByIdRequest, _super);
    function GetVaultByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetVaultByIdPathParams)
    ], GetVaultByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetVaultByIdSecurity)
    ], GetVaultByIdRequest.prototype, "security", void 0);
    return GetVaultByIdRequest;
}(SpeakeasyBase));
export { GetVaultByIdRequest };
var GetVaultByIdResponse = /** @class */ (function (_super) {
    __extends(GetVaultByIdResponse, _super);
    function GetVaultByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetVaultByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetVaultByIdResponse.prototype, "errorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetVaultByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Vault)
    ], GetVaultByIdResponse.prototype, "vault", void 0);
    return GetVaultByIdResponse;
}(SpeakeasyBase));
export { GetVaultByIdResponse };
