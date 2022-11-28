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
export var PostListUserPoliciesActionEnum;
(function (PostListUserPoliciesActionEnum) {
    PostListUserPoliciesActionEnum["ListUserPolicies"] = "ListUserPolicies";
})(PostListUserPoliciesActionEnum || (PostListUserPoliciesActionEnum = {}));
export var PostListUserPoliciesVersionEnum;
(function (PostListUserPoliciesVersionEnum) {
    PostListUserPoliciesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListUserPoliciesVersionEnum || (PostListUserPoliciesVersionEnum = {}));
var PostListUserPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(PostListUserPoliciesQueryParams, _super);
    function PostListUserPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListUserPoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostListUserPoliciesQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], PostListUserPoliciesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListUserPoliciesQueryParams.prototype, "version", void 0);
    return PostListUserPoliciesQueryParams;
}(SpeakeasyBase));
export { PostListUserPoliciesQueryParams };
var PostListUserPoliciesHeaders = /** @class */ (function (_super) {
    __extends(PostListUserPoliciesHeaders, _super);
    function PostListUserPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListUserPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListUserPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListUserPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListUserPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListUserPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListUserPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListUserPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListUserPoliciesHeaders;
}(SpeakeasyBase));
export { PostListUserPoliciesHeaders };
var PostListUserPoliciesRequest = /** @class */ (function (_super) {
    __extends(PostListUserPoliciesRequest, _super);
    function PostListUserPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListUserPoliciesQueryParams)
    ], PostListUserPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListUserPoliciesHeaders)
    ], PostListUserPoliciesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListUserPoliciesRequest.prototype, "request", void 0);
    return PostListUserPoliciesRequest;
}(SpeakeasyBase));
export { PostListUserPoliciesRequest };
var PostListUserPoliciesResponse = /** @class */ (function (_super) {
    __extends(PostListUserPoliciesResponse, _super);
    function PostListUserPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostListUserPoliciesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostListUserPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostListUserPoliciesResponse.prototype, "statusCode", void 0);
    return PostListUserPoliciesResponse;
}(SpeakeasyBase));
export { PostListUserPoliciesResponse };
