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
export var PostImportClientVpnClientCertificateRevocationListActionEnum;
(function (PostImportClientVpnClientCertificateRevocationListActionEnum) {
    PostImportClientVpnClientCertificateRevocationListActionEnum["ImportClientVpnClientCertificateRevocationList"] = "ImportClientVpnClientCertificateRevocationList";
})(PostImportClientVpnClientCertificateRevocationListActionEnum || (PostImportClientVpnClientCertificateRevocationListActionEnum = {}));
export var PostImportClientVpnClientCertificateRevocationListVersionEnum;
(function (PostImportClientVpnClientCertificateRevocationListVersionEnum) {
    PostImportClientVpnClientCertificateRevocationListVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostImportClientVpnClientCertificateRevocationListVersionEnum || (PostImportClientVpnClientCertificateRevocationListVersionEnum = {}));
var PostImportClientVpnClientCertificateRevocationListQueryParams = /** @class */ (function (_super) {
    __extends(PostImportClientVpnClientCertificateRevocationListQueryParams, _super);
    function PostImportClientVpnClientCertificateRevocationListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostImportClientVpnClientCertificateRevocationListQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostImportClientVpnClientCertificateRevocationListQueryParams.prototype, "version", void 0);
    return PostImportClientVpnClientCertificateRevocationListQueryParams;
}(SpeakeasyBase));
export { PostImportClientVpnClientCertificateRevocationListQueryParams };
var PostImportClientVpnClientCertificateRevocationListHeaders = /** @class */ (function (_super) {
    __extends(PostImportClientVpnClientCertificateRevocationListHeaders, _super);
    function PostImportClientVpnClientCertificateRevocationListHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostImportClientVpnClientCertificateRevocationListHeaders;
}(SpeakeasyBase));
export { PostImportClientVpnClientCertificateRevocationListHeaders };
var PostImportClientVpnClientCertificateRevocationListRequest = /** @class */ (function (_super) {
    __extends(PostImportClientVpnClientCertificateRevocationListRequest, _super);
    function PostImportClientVpnClientCertificateRevocationListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostImportClientVpnClientCertificateRevocationListQueryParams)
    ], PostImportClientVpnClientCertificateRevocationListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostImportClientVpnClientCertificateRevocationListHeaders)
    ], PostImportClientVpnClientCertificateRevocationListRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostImportClientVpnClientCertificateRevocationListRequest.prototype, "request", void 0);
    return PostImportClientVpnClientCertificateRevocationListRequest;
}(SpeakeasyBase));
export { PostImportClientVpnClientCertificateRevocationListRequest };
var PostImportClientVpnClientCertificateRevocationListResponse = /** @class */ (function (_super) {
    __extends(PostImportClientVpnClientCertificateRevocationListResponse, _super);
    function PostImportClientVpnClientCertificateRevocationListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostImportClientVpnClientCertificateRevocationListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostImportClientVpnClientCertificateRevocationListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostImportClientVpnClientCertificateRevocationListResponse.prototype, "statusCode", void 0);
    return PostImportClientVpnClientCertificateRevocationListResponse;
}(SpeakeasyBase));
export { PostImportClientVpnClientCertificateRevocationListResponse };
