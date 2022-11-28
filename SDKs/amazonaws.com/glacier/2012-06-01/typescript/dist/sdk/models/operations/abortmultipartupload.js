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
var AbortMultipartUploadPathParams = /** @class */ (function (_super) {
    __extends(AbortMultipartUploadPathParams, _super);
    function AbortMultipartUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AbortMultipartUploadPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uploadId" }),
        __metadata("design:type", String)
    ], AbortMultipartUploadPathParams.prototype, "uploadId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultName" }),
        __metadata("design:type", String)
    ], AbortMultipartUploadPathParams.prototype, "vaultName", void 0);
    return AbortMultipartUploadPathParams;
}(SpeakeasyBase));
export { AbortMultipartUploadPathParams };
var AbortMultipartUploadHeaders = /** @class */ (function (_super) {
    __extends(AbortMultipartUploadHeaders, _super);
    function AbortMultipartUploadHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AbortMultipartUploadHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AbortMultipartUploadHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AbortMultipartUploadHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AbortMultipartUploadHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AbortMultipartUploadHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AbortMultipartUploadHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AbortMultipartUploadHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AbortMultipartUploadHeaders;
}(SpeakeasyBase));
export { AbortMultipartUploadHeaders };
var AbortMultipartUploadRequest = /** @class */ (function (_super) {
    __extends(AbortMultipartUploadRequest, _super);
    function AbortMultipartUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AbortMultipartUploadPathParams)
    ], AbortMultipartUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AbortMultipartUploadHeaders)
    ], AbortMultipartUploadRequest.prototype, "headers", void 0);
    return AbortMultipartUploadRequest;
}(SpeakeasyBase));
export { AbortMultipartUploadRequest };
var AbortMultipartUploadResponse = /** @class */ (function (_super) {
    __extends(AbortMultipartUploadResponse, _super);
    function AbortMultipartUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AbortMultipartUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AbortMultipartUploadResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AbortMultipartUploadResponse.prototype, "missingParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AbortMultipartUploadResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AbortMultipartUploadResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AbortMultipartUploadResponse.prototype, "statusCode", void 0);
    return AbortMultipartUploadResponse;
}(SpeakeasyBase));
export { AbortMultipartUploadResponse };
