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
var GetVaultLockPathParams = /** @class */ (function (_super) {
    __extends(GetVaultLockPathParams, _super);
    function GetVaultLockPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], GetVaultLockPathParams.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=vaultName" }),
        __metadata("design:type", String)
    ], GetVaultLockPathParams.prototype, "vaultName", void 0);
    return GetVaultLockPathParams;
}(SpeakeasyBase));
export { GetVaultLockPathParams };
var GetVaultLockHeaders = /** @class */ (function (_super) {
    __extends(GetVaultLockHeaders, _super);
    function GetVaultLockHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetVaultLockHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetVaultLockHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetVaultLockHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetVaultLockHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetVaultLockHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetVaultLockHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetVaultLockHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetVaultLockHeaders;
}(SpeakeasyBase));
export { GetVaultLockHeaders };
var GetVaultLockRequest = /** @class */ (function (_super) {
    __extends(GetVaultLockRequest, _super);
    function GetVaultLockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetVaultLockPathParams)
    ], GetVaultLockRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetVaultLockHeaders)
    ], GetVaultLockRequest.prototype, "headers", void 0);
    return GetVaultLockRequest;
}(SpeakeasyBase));
export { GetVaultLockRequest };
var GetVaultLockResponse = /** @class */ (function (_super) {
    __extends(GetVaultLockResponse, _super);
    function GetVaultLockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetVaultLockResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetVaultLockOutput)
    ], GetVaultLockResponse.prototype, "getVaultLockOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetVaultLockResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetVaultLockResponse.prototype, "missingParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetVaultLockResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetVaultLockResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetVaultLockResponse.prototype, "statusCode", void 0);
    return GetVaultLockResponse;
}(SpeakeasyBase));
export { GetVaultLockResponse };
