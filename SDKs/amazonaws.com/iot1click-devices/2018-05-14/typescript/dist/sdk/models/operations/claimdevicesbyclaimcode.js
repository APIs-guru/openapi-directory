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
var ClaimDevicesByClaimCodePathParams = /** @class */ (function (_super) {
    __extends(ClaimDevicesByClaimCodePathParams, _super);
    function ClaimDevicesByClaimCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=claimCode" }),
        __metadata("design:type", String)
    ], ClaimDevicesByClaimCodePathParams.prototype, "claimCode", void 0);
    return ClaimDevicesByClaimCodePathParams;
}(SpeakeasyBase));
export { ClaimDevicesByClaimCodePathParams };
var ClaimDevicesByClaimCodeHeaders = /** @class */ (function (_super) {
    __extends(ClaimDevicesByClaimCodeHeaders, _super);
    function ClaimDevicesByClaimCodeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ClaimDevicesByClaimCodeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ClaimDevicesByClaimCodeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ClaimDevicesByClaimCodeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ClaimDevicesByClaimCodeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ClaimDevicesByClaimCodeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ClaimDevicesByClaimCodeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ClaimDevicesByClaimCodeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ClaimDevicesByClaimCodeHeaders;
}(SpeakeasyBase));
export { ClaimDevicesByClaimCodeHeaders };
var ClaimDevicesByClaimCodeRequest = /** @class */ (function (_super) {
    __extends(ClaimDevicesByClaimCodeRequest, _super);
    function ClaimDevicesByClaimCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClaimDevicesByClaimCodePathParams)
    ], ClaimDevicesByClaimCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClaimDevicesByClaimCodeHeaders)
    ], ClaimDevicesByClaimCodeRequest.prototype, "headers", void 0);
    return ClaimDevicesByClaimCodeRequest;
}(SpeakeasyBase));
export { ClaimDevicesByClaimCodeRequest };
var ClaimDevicesByClaimCodeResponse = /** @class */ (function (_super) {
    __extends(ClaimDevicesByClaimCodeResponse, _super);
    function ClaimDevicesByClaimCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ClaimDevicesByClaimCodeResponse)
    ], ClaimDevicesByClaimCodeResponse.prototype, "claimDevicesByClaimCodeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClaimDevicesByClaimCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ClaimDevicesByClaimCodeResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ClaimDevicesByClaimCodeResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ClaimDevicesByClaimCodeResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClaimDevicesByClaimCodeResponse.prototype, "statusCode", void 0);
    return ClaimDevicesByClaimCodeResponse;
}(SpeakeasyBase));
export { ClaimDevicesByClaimCodeResponse };
