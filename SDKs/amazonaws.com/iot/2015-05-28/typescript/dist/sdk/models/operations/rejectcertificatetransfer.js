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
var RejectCertificateTransferPathParams = /** @class */ (function (_super) {
    __extends(RejectCertificateTransferPathParams, _super);
    function RejectCertificateTransferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" }),
        __metadata("design:type", String)
    ], RejectCertificateTransferPathParams.prototype, "certificateId", void 0);
    return RejectCertificateTransferPathParams;
}(SpeakeasyBase));
export { RejectCertificateTransferPathParams };
var RejectCertificateTransferHeaders = /** @class */ (function (_super) {
    __extends(RejectCertificateTransferHeaders, _super);
    function RejectCertificateTransferHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RejectCertificateTransferHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RejectCertificateTransferHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RejectCertificateTransferHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RejectCertificateTransferHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RejectCertificateTransferHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RejectCertificateTransferHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RejectCertificateTransferHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RejectCertificateTransferHeaders;
}(SpeakeasyBase));
export { RejectCertificateTransferHeaders };
var RejectCertificateTransferRequestBody = /** @class */ (function (_super) {
    __extends(RejectCertificateTransferRequestBody, _super);
    function RejectCertificateTransferRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejectReason" }),
        __metadata("design:type", String)
    ], RejectCertificateTransferRequestBody.prototype, "rejectReason", void 0);
    return RejectCertificateTransferRequestBody;
}(SpeakeasyBase));
export { RejectCertificateTransferRequestBody };
var RejectCertificateTransferRequest = /** @class */ (function (_super) {
    __extends(RejectCertificateTransferRequest, _super);
    function RejectCertificateTransferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RejectCertificateTransferPathParams)
    ], RejectCertificateTransferRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RejectCertificateTransferHeaders)
    ], RejectCertificateTransferRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RejectCertificateTransferRequestBody)
    ], RejectCertificateTransferRequest.prototype, "request", void 0);
    return RejectCertificateTransferRequest;
}(SpeakeasyBase));
export { RejectCertificateTransferRequest };
var RejectCertificateTransferResponse = /** @class */ (function (_super) {
    __extends(RejectCertificateTransferResponse, _super);
    function RejectCertificateTransferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RejectCertificateTransferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RejectCertificateTransferResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RejectCertificateTransferResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RejectCertificateTransferResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RejectCertificateTransferResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RejectCertificateTransferResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RejectCertificateTransferResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RejectCertificateTransferResponse.prototype, "transferAlreadyCompletedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RejectCertificateTransferResponse.prototype, "unauthorizedException", void 0);
    return RejectCertificateTransferResponse;
}(SpeakeasyBase));
export { RejectCertificateTransferResponse };
