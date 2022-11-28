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
export var RevokeCertificateXAmzTargetEnum;
(function (RevokeCertificateXAmzTargetEnum) {
    RevokeCertificateXAmzTargetEnum["AcmPrivateCaRevokeCertificate"] = "ACMPrivateCA.RevokeCertificate";
})(RevokeCertificateXAmzTargetEnum || (RevokeCertificateXAmzTargetEnum = {}));
var RevokeCertificateHeaders = /** @class */ (function (_super) {
    __extends(RevokeCertificateHeaders, _super);
    function RevokeCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RevokeCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RevokeCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RevokeCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RevokeCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RevokeCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RevokeCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RevokeCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], RevokeCertificateHeaders.prototype, "xAmzTarget", void 0);
    return RevokeCertificateHeaders;
}(SpeakeasyBase));
export { RevokeCertificateHeaders };
var RevokeCertificateRequest = /** @class */ (function (_super) {
    __extends(RevokeCertificateRequest, _super);
    function RevokeCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RevokeCertificateHeaders)
    ], RevokeCertificateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RevokeCertificateRequest)
    ], RevokeCertificateRequest.prototype, "request", void 0);
    return RevokeCertificateRequest;
}(SpeakeasyBase));
export { RevokeCertificateRequest };
var RevokeCertificateResponse = /** @class */ (function (_super) {
    __extends(RevokeCertificateResponse, _super);
    function RevokeCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RevokeCertificateResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RevokeCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RevokeCertificateResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RevokeCertificateResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RevokeCertificateResponse.prototype, "invalidStateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RevokeCertificateResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RevokeCertificateResponse.prototype, "requestAlreadyProcessedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RevokeCertificateResponse.prototype, "requestFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RevokeCertificateResponse.prototype, "requestInProgressException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RevokeCertificateResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RevokeCertificateResponse.prototype, "statusCode", void 0);
    return RevokeCertificateResponse;
}(SpeakeasyBase));
export { RevokeCertificateResponse };
