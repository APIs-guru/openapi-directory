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
export var PostGenerateServiceLastAccessedDetailsActionEnum;
(function (PostGenerateServiceLastAccessedDetailsActionEnum) {
    PostGenerateServiceLastAccessedDetailsActionEnum["GenerateServiceLastAccessedDetails"] = "GenerateServiceLastAccessedDetails";
})(PostGenerateServiceLastAccessedDetailsActionEnum || (PostGenerateServiceLastAccessedDetailsActionEnum = {}));
export var PostGenerateServiceLastAccessedDetailsVersionEnum;
(function (PostGenerateServiceLastAccessedDetailsVersionEnum) {
    PostGenerateServiceLastAccessedDetailsVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostGenerateServiceLastAccessedDetailsVersionEnum || (PostGenerateServiceLastAccessedDetailsVersionEnum = {}));
var PostGenerateServiceLastAccessedDetailsQueryParams = /** @class */ (function (_super) {
    __extends(PostGenerateServiceLastAccessedDetailsQueryParams, _super);
    function PostGenerateServiceLastAccessedDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGenerateServiceLastAccessedDetailsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGenerateServiceLastAccessedDetailsQueryParams.prototype, "version", void 0);
    return PostGenerateServiceLastAccessedDetailsQueryParams;
}(SpeakeasyBase));
export { PostGenerateServiceLastAccessedDetailsQueryParams };
var PostGenerateServiceLastAccessedDetailsHeaders = /** @class */ (function (_super) {
    __extends(PostGenerateServiceLastAccessedDetailsHeaders, _super);
    function PostGenerateServiceLastAccessedDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGenerateServiceLastAccessedDetailsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGenerateServiceLastAccessedDetailsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGenerateServiceLastAccessedDetailsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGenerateServiceLastAccessedDetailsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGenerateServiceLastAccessedDetailsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGenerateServiceLastAccessedDetailsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGenerateServiceLastAccessedDetailsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGenerateServiceLastAccessedDetailsHeaders;
}(SpeakeasyBase));
export { PostGenerateServiceLastAccessedDetailsHeaders };
var PostGenerateServiceLastAccessedDetailsRequest = /** @class */ (function (_super) {
    __extends(PostGenerateServiceLastAccessedDetailsRequest, _super);
    function PostGenerateServiceLastAccessedDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGenerateServiceLastAccessedDetailsQueryParams)
    ], PostGenerateServiceLastAccessedDetailsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGenerateServiceLastAccessedDetailsHeaders)
    ], PostGenerateServiceLastAccessedDetailsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGenerateServiceLastAccessedDetailsRequest.prototype, "request", void 0);
    return PostGenerateServiceLastAccessedDetailsRequest;
}(SpeakeasyBase));
export { PostGenerateServiceLastAccessedDetailsRequest };
var PostGenerateServiceLastAccessedDetailsResponse = /** @class */ (function (_super) {
    __extends(PostGenerateServiceLastAccessedDetailsResponse, _super);
    function PostGenerateServiceLastAccessedDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostGenerateServiceLastAccessedDetailsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGenerateServiceLastAccessedDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGenerateServiceLastAccessedDetailsResponse.prototype, "statusCode", void 0);
    return PostGenerateServiceLastAccessedDetailsResponse;
}(SpeakeasyBase));
export { PostGenerateServiceLastAccessedDetailsResponse };
