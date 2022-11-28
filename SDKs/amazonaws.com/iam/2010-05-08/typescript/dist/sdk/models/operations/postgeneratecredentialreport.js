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
export var PostGenerateCredentialReportActionEnum;
(function (PostGenerateCredentialReportActionEnum) {
    PostGenerateCredentialReportActionEnum["GenerateCredentialReport"] = "GenerateCredentialReport";
})(PostGenerateCredentialReportActionEnum || (PostGenerateCredentialReportActionEnum = {}));
export var PostGenerateCredentialReportVersionEnum;
(function (PostGenerateCredentialReportVersionEnum) {
    PostGenerateCredentialReportVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostGenerateCredentialReportVersionEnum || (PostGenerateCredentialReportVersionEnum = {}));
var PostGenerateCredentialReportQueryParams = /** @class */ (function (_super) {
    __extends(PostGenerateCredentialReportQueryParams, _super);
    function PostGenerateCredentialReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGenerateCredentialReportQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGenerateCredentialReportQueryParams.prototype, "version", void 0);
    return PostGenerateCredentialReportQueryParams;
}(SpeakeasyBase));
export { PostGenerateCredentialReportQueryParams };
var PostGenerateCredentialReportHeaders = /** @class */ (function (_super) {
    __extends(PostGenerateCredentialReportHeaders, _super);
    function PostGenerateCredentialReportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGenerateCredentialReportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGenerateCredentialReportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGenerateCredentialReportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGenerateCredentialReportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGenerateCredentialReportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGenerateCredentialReportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGenerateCredentialReportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGenerateCredentialReportHeaders;
}(SpeakeasyBase));
export { PostGenerateCredentialReportHeaders };
var PostGenerateCredentialReportRequest = /** @class */ (function (_super) {
    __extends(PostGenerateCredentialReportRequest, _super);
    function PostGenerateCredentialReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGenerateCredentialReportQueryParams)
    ], PostGenerateCredentialReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGenerateCredentialReportHeaders)
    ], PostGenerateCredentialReportRequest.prototype, "headers", void 0);
    return PostGenerateCredentialReportRequest;
}(SpeakeasyBase));
export { PostGenerateCredentialReportRequest };
var PostGenerateCredentialReportResponse = /** @class */ (function (_super) {
    __extends(PostGenerateCredentialReportResponse, _super);
    function PostGenerateCredentialReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostGenerateCredentialReportResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGenerateCredentialReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGenerateCredentialReportResponse.prototype, "statusCode", void 0);
    return PostGenerateCredentialReportResponse;
}(SpeakeasyBase));
export { PostGenerateCredentialReportResponse };
