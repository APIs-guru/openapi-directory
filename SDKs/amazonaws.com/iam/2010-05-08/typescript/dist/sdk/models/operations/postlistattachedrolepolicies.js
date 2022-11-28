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
export var PostListAttachedRolePoliciesActionEnum;
(function (PostListAttachedRolePoliciesActionEnum) {
    PostListAttachedRolePoliciesActionEnum["ListAttachedRolePolicies"] = "ListAttachedRolePolicies";
})(PostListAttachedRolePoliciesActionEnum || (PostListAttachedRolePoliciesActionEnum = {}));
export var PostListAttachedRolePoliciesVersionEnum;
(function (PostListAttachedRolePoliciesVersionEnum) {
    PostListAttachedRolePoliciesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListAttachedRolePoliciesVersionEnum || (PostListAttachedRolePoliciesVersionEnum = {}));
var PostListAttachedRolePoliciesQueryParams = /** @class */ (function (_super) {
    __extends(PostListAttachedRolePoliciesQueryParams, _super);
    function PostListAttachedRolePoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListAttachedRolePoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostListAttachedRolePoliciesQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], PostListAttachedRolePoliciesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListAttachedRolePoliciesQueryParams.prototype, "version", void 0);
    return PostListAttachedRolePoliciesQueryParams;
}(SpeakeasyBase));
export { PostListAttachedRolePoliciesQueryParams };
var PostListAttachedRolePoliciesHeaders = /** @class */ (function (_super) {
    __extends(PostListAttachedRolePoliciesHeaders, _super);
    function PostListAttachedRolePoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListAttachedRolePoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListAttachedRolePoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListAttachedRolePoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListAttachedRolePoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListAttachedRolePoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListAttachedRolePoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListAttachedRolePoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListAttachedRolePoliciesHeaders;
}(SpeakeasyBase));
export { PostListAttachedRolePoliciesHeaders };
var PostListAttachedRolePoliciesRequest = /** @class */ (function (_super) {
    __extends(PostListAttachedRolePoliciesRequest, _super);
    function PostListAttachedRolePoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListAttachedRolePoliciesQueryParams)
    ], PostListAttachedRolePoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListAttachedRolePoliciesHeaders)
    ], PostListAttachedRolePoliciesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListAttachedRolePoliciesRequest.prototype, "request", void 0);
    return PostListAttachedRolePoliciesRequest;
}(SpeakeasyBase));
export { PostListAttachedRolePoliciesRequest };
var PostListAttachedRolePoliciesResponse = /** @class */ (function (_super) {
    __extends(PostListAttachedRolePoliciesResponse, _super);
    function PostListAttachedRolePoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostListAttachedRolePoliciesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostListAttachedRolePoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostListAttachedRolePoliciesResponse.prototype, "statusCode", void 0);
    return PostListAttachedRolePoliciesResponse;
}(SpeakeasyBase));
export { PostListAttachedRolePoliciesResponse };
