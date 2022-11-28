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
export var PostListInstanceProfilesActionEnum;
(function (PostListInstanceProfilesActionEnum) {
    PostListInstanceProfilesActionEnum["ListInstanceProfiles"] = "ListInstanceProfiles";
})(PostListInstanceProfilesActionEnum || (PostListInstanceProfilesActionEnum = {}));
export var PostListInstanceProfilesVersionEnum;
(function (PostListInstanceProfilesVersionEnum) {
    PostListInstanceProfilesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListInstanceProfilesVersionEnum || (PostListInstanceProfilesVersionEnum = {}));
var PostListInstanceProfilesQueryParams = /** @class */ (function (_super) {
    __extends(PostListInstanceProfilesQueryParams, _super);
    function PostListInstanceProfilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesQueryParams.prototype, "version", void 0);
    return PostListInstanceProfilesQueryParams;
}(SpeakeasyBase));
export { PostListInstanceProfilesQueryParams };
var PostListInstanceProfilesHeaders = /** @class */ (function (_super) {
    __extends(PostListInstanceProfilesHeaders, _super);
    function PostListInstanceProfilesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListInstanceProfilesHeaders;
}(SpeakeasyBase));
export { PostListInstanceProfilesHeaders };
var PostListInstanceProfilesRequest = /** @class */ (function (_super) {
    __extends(PostListInstanceProfilesRequest, _super);
    function PostListInstanceProfilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListInstanceProfilesQueryParams)
    ], PostListInstanceProfilesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListInstanceProfilesHeaders)
    ], PostListInstanceProfilesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListInstanceProfilesRequest.prototype, "request", void 0);
    return PostListInstanceProfilesRequest;
}(SpeakeasyBase));
export { PostListInstanceProfilesRequest };
var PostListInstanceProfilesResponse = /** @class */ (function (_super) {
    __extends(PostListInstanceProfilesResponse, _super);
    function PostListInstanceProfilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostListInstanceProfilesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostListInstanceProfilesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostListInstanceProfilesResponse.prototype, "statusCode", void 0);
    return PostListInstanceProfilesResponse;
}(SpeakeasyBase));
export { PostListInstanceProfilesResponse };
