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
export var PostAttachInstancesActionEnum;
(function (PostAttachInstancesActionEnum) {
    PostAttachInstancesActionEnum["AttachInstances"] = "AttachInstances";
})(PostAttachInstancesActionEnum || (PostAttachInstancesActionEnum = {}));
export var PostAttachInstancesVersionEnum;
(function (PostAttachInstancesVersionEnum) {
    PostAttachInstancesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostAttachInstancesVersionEnum || (PostAttachInstancesVersionEnum = {}));
var PostAttachInstancesQueryParams = /** @class */ (function (_super) {
    __extends(PostAttachInstancesQueryParams, _super);
    function PostAttachInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAttachInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAttachInstancesQueryParams.prototype, "version", void 0);
    return PostAttachInstancesQueryParams;
}(SpeakeasyBase));
export { PostAttachInstancesQueryParams };
var PostAttachInstancesHeaders = /** @class */ (function (_super) {
    __extends(PostAttachInstancesHeaders, _super);
    function PostAttachInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAttachInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAttachInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAttachInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAttachInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAttachInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAttachInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAttachInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAttachInstancesHeaders;
}(SpeakeasyBase));
export { PostAttachInstancesHeaders };
var PostAttachInstancesRequest = /** @class */ (function (_super) {
    __extends(PostAttachInstancesRequest, _super);
    function PostAttachInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostAttachInstancesQueryParams)
    ], PostAttachInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostAttachInstancesHeaders)
    ], PostAttachInstancesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAttachInstancesRequest.prototype, "request", void 0);
    return PostAttachInstancesRequest;
}(SpeakeasyBase));
export { PostAttachInstancesRequest };
var PostAttachInstancesResponse = /** @class */ (function (_super) {
    __extends(PostAttachInstancesResponse, _super);
    function PostAttachInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostAttachInstancesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostAttachInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostAttachInstancesResponse.prototype, "statusCode", void 0);
    return PostAttachInstancesResponse;
}(SpeakeasyBase));
export { PostAttachInstancesResponse };
