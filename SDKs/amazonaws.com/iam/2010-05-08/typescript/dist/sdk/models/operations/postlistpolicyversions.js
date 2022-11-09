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
export var PostListPolicyVersionsActionEnum;
(function (PostListPolicyVersionsActionEnum) {
    PostListPolicyVersionsActionEnum["ListPolicyVersions"] = "ListPolicyVersions";
})(PostListPolicyVersionsActionEnum || (PostListPolicyVersionsActionEnum = {}));
export var PostListPolicyVersionsVersionEnum;
(function (PostListPolicyVersionsVersionEnum) {
    PostListPolicyVersionsVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListPolicyVersionsVersionEnum || (PostListPolicyVersionsVersionEnum = {}));
var PostListPolicyVersionsQueryParams = /** @class */ (function (_super) {
    __extends(PostListPolicyVersionsQueryParams, _super);
    function PostListPolicyVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListPolicyVersionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostListPolicyVersionsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], PostListPolicyVersionsQueryParams.prototype, "maxItems", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListPolicyVersionsQueryParams.prototype, "version", void 0);
    return PostListPolicyVersionsQueryParams;
}(SpeakeasyBase));
export { PostListPolicyVersionsQueryParams };
var PostListPolicyVersionsHeaders = /** @class */ (function (_super) {
    __extends(PostListPolicyVersionsHeaders, _super);
    function PostListPolicyVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListPolicyVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListPolicyVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListPolicyVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListPolicyVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListPolicyVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListPolicyVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListPolicyVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListPolicyVersionsHeaders;
}(SpeakeasyBase));
export { PostListPolicyVersionsHeaders };
var PostListPolicyVersionsRequest = /** @class */ (function (_super) {
    __extends(PostListPolicyVersionsRequest, _super);
    function PostListPolicyVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostListPolicyVersionsQueryParams)
    ], PostListPolicyVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostListPolicyVersionsHeaders)
    ], PostListPolicyVersionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListPolicyVersionsRequest.prototype, "request", void 0);
    return PostListPolicyVersionsRequest;
}(SpeakeasyBase));
export { PostListPolicyVersionsRequest };
var PostListPolicyVersionsResponse = /** @class */ (function (_super) {
    __extends(PostListPolicyVersionsResponse, _super);
    function PostListPolicyVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostListPolicyVersionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostListPolicyVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostListPolicyVersionsResponse.prototype, "statusCode", void 0);
    return PostListPolicyVersionsResponse;
}(SpeakeasyBase));
export { PostListPolicyVersionsResponse };
