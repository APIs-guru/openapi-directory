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
var AcceptCertificateTransferPathParams = /** @class */ (function (_super) {
    __extends(AcceptCertificateTransferPathParams, _super);
    function AcceptCertificateTransferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" }),
        __metadata("design:type", String)
    ], AcceptCertificateTransferPathParams.prototype, "certificateId", void 0);
    return AcceptCertificateTransferPathParams;
}(SpeakeasyBase));
export { AcceptCertificateTransferPathParams };
var AcceptCertificateTransferQueryParams = /** @class */ (function (_super) {
    __extends(AcceptCertificateTransferQueryParams, _super);
    function AcceptCertificateTransferQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setAsActive" }),
        __metadata("design:type", Boolean)
    ], AcceptCertificateTransferQueryParams.prototype, "setAsActive", void 0);
    return AcceptCertificateTransferQueryParams;
}(SpeakeasyBase));
export { AcceptCertificateTransferQueryParams };
var AcceptCertificateTransferHeaders = /** @class */ (function (_super) {
    __extends(AcceptCertificateTransferHeaders, _super);
    function AcceptCertificateTransferHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AcceptCertificateTransferHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AcceptCertificateTransferHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AcceptCertificateTransferHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AcceptCertificateTransferHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AcceptCertificateTransferHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AcceptCertificateTransferHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AcceptCertificateTransferHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AcceptCertificateTransferHeaders;
}(SpeakeasyBase));
export { AcceptCertificateTransferHeaders };
var AcceptCertificateTransferRequest = /** @class */ (function (_super) {
    __extends(AcceptCertificateTransferRequest, _super);
    function AcceptCertificateTransferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcceptCertificateTransferPathParams)
    ], AcceptCertificateTransferRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcceptCertificateTransferQueryParams)
    ], AcceptCertificateTransferRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcceptCertificateTransferHeaders)
    ], AcceptCertificateTransferRequest.prototype, "headers", void 0);
    return AcceptCertificateTransferRequest;
}(SpeakeasyBase));
export { AcceptCertificateTransferRequest };
var AcceptCertificateTransferResponse = /** @class */ (function (_super) {
    __extends(AcceptCertificateTransferResponse, _super);
    function AcceptCertificateTransferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcceptCertificateTransferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptCertificateTransferResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptCertificateTransferResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptCertificateTransferResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptCertificateTransferResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AcceptCertificateTransferResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptCertificateTransferResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptCertificateTransferResponse.prototype, "transferAlreadyCompletedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AcceptCertificateTransferResponse.prototype, "unauthorizedException", void 0);
    return AcceptCertificateTransferResponse;
}(SpeakeasyBase));
export { AcceptCertificateTransferResponse };
