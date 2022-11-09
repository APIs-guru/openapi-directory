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
var InitiateVaultLockPathParams = /** @class */ (function (_super) {
    __extends(InitiateVaultLockPathParams, _super);
    function InitiateVaultLockPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], InitiateVaultLockPathParams.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=vaultName" }),
        __metadata("design:type", String)
    ], InitiateVaultLockPathParams.prototype, "vaultName", void 0);
    return InitiateVaultLockPathParams;
}(SpeakeasyBase));
export { InitiateVaultLockPathParams };
var InitiateVaultLockHeaders = /** @class */ (function (_super) {
    __extends(InitiateVaultLockHeaders, _super);
    function InitiateVaultLockHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], InitiateVaultLockHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], InitiateVaultLockHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], InitiateVaultLockHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], InitiateVaultLockHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], InitiateVaultLockHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], InitiateVaultLockHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], InitiateVaultLockHeaders.prototype, "xAmzSignedHeaders", void 0);
    return InitiateVaultLockHeaders;
}(SpeakeasyBase));
export { InitiateVaultLockHeaders };
// InitiateVaultLockRequestBodyPolicy
/**
 * Contains the vault lock policy.
**/
var InitiateVaultLockRequestBodyPolicy = /** @class */ (function (_super) {
    __extends(InitiateVaultLockRequestBodyPolicy, _super);
    function InitiateVaultLockRequestBodyPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Policy" }),
        __metadata("design:type", String)
    ], InitiateVaultLockRequestBodyPolicy.prototype, "policy", void 0);
    return InitiateVaultLockRequestBodyPolicy;
}(SpeakeasyBase));
export { InitiateVaultLockRequestBodyPolicy };
var InitiateVaultLockRequestBody = /** @class */ (function (_super) {
    __extends(InitiateVaultLockRequestBody, _super);
    function InitiateVaultLockRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=policy" }),
        __metadata("design:type", InitiateVaultLockRequestBodyPolicy)
    ], InitiateVaultLockRequestBody.prototype, "policy", void 0);
    return InitiateVaultLockRequestBody;
}(SpeakeasyBase));
export { InitiateVaultLockRequestBody };
var InitiateVaultLockRequest = /** @class */ (function (_super) {
    __extends(InitiateVaultLockRequest, _super);
    function InitiateVaultLockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", InitiateVaultLockPathParams)
    ], InitiateVaultLockRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", InitiateVaultLockHeaders)
    ], InitiateVaultLockRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", InitiateVaultLockRequestBody)
    ], InitiateVaultLockRequest.prototype, "request", void 0);
    return InitiateVaultLockRequest;
}(SpeakeasyBase));
export { InitiateVaultLockRequest };
var InitiateVaultLockResponse = /** @class */ (function (_super) {
    __extends(InitiateVaultLockResponse, _super);
    function InitiateVaultLockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], InitiateVaultLockResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], InitiateVaultLockResponse.prototype, "initiateVaultLockOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InitiateVaultLockResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InitiateVaultLockResponse.prototype, "missingParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InitiateVaultLockResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InitiateVaultLockResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], InitiateVaultLockResponse.prototype, "statusCode", void 0);
    return InitiateVaultLockResponse;
}(SpeakeasyBase));
export { InitiateVaultLockResponse };
