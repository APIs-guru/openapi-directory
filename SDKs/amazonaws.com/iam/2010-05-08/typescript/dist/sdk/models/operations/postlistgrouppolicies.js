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
export var PostListGroupPoliciesActionEnum;
(function (PostListGroupPoliciesActionEnum) {
    PostListGroupPoliciesActionEnum["ListGroupPolicies"] = "ListGroupPolicies";
})(PostListGroupPoliciesActionEnum || (PostListGroupPoliciesActionEnum = {}));
export var PostListGroupPoliciesVersionEnum;
(function (PostListGroupPoliciesVersionEnum) {
    PostListGroupPoliciesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListGroupPoliciesVersionEnum || (PostListGroupPoliciesVersionEnum = {}));
var PostListGroupPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(PostListGroupPoliciesQueryParams, _super);
    function PostListGroupPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListGroupPoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostListGroupPoliciesQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], PostListGroupPoliciesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListGroupPoliciesQueryParams.prototype, "version", void 0);
    return PostListGroupPoliciesQueryParams;
}(SpeakeasyBase));
export { PostListGroupPoliciesQueryParams };
var PostListGroupPoliciesHeaders = /** @class */ (function (_super) {
    __extends(PostListGroupPoliciesHeaders, _super);
    function PostListGroupPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListGroupPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListGroupPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListGroupPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListGroupPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListGroupPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListGroupPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListGroupPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListGroupPoliciesHeaders;
}(SpeakeasyBase));
export { PostListGroupPoliciesHeaders };
var PostListGroupPoliciesRequest = /** @class */ (function (_super) {
    __extends(PostListGroupPoliciesRequest, _super);
    function PostListGroupPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostListGroupPoliciesQueryParams)
    ], PostListGroupPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostListGroupPoliciesHeaders)
    ], PostListGroupPoliciesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListGroupPoliciesRequest.prototype, "request", void 0);
    return PostListGroupPoliciesRequest;
}(SpeakeasyBase));
export { PostListGroupPoliciesRequest };
var PostListGroupPoliciesResponse = /** @class */ (function (_super) {
    __extends(PostListGroupPoliciesResponse, _super);
    function PostListGroupPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostListGroupPoliciesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostListGroupPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostListGroupPoliciesResponse.prototype, "statusCode", void 0);
    return PostListGroupPoliciesResponse;
}(SpeakeasyBase));
export { PostListGroupPoliciesResponse };
