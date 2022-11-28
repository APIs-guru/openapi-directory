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
export var PostDescribeSslPoliciesActionEnum;
(function (PostDescribeSslPoliciesActionEnum) {
    PostDescribeSslPoliciesActionEnum["DescribeSslPolicies"] = "DescribeSSLPolicies";
})(PostDescribeSslPoliciesActionEnum || (PostDescribeSslPoliciesActionEnum = {}));
export var PostDescribeSslPoliciesVersionEnum;
(function (PostDescribeSslPoliciesVersionEnum) {
    PostDescribeSslPoliciesVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(PostDescribeSslPoliciesVersionEnum || (PostDescribeSslPoliciesVersionEnum = {}));
var PostDescribeSslPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeSslPoliciesQueryParams, _super);
    function PostDescribeSslPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeSslPoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeSslPoliciesQueryParams.prototype, "version", void 0);
    return PostDescribeSslPoliciesQueryParams;
}(SpeakeasyBase));
export { PostDescribeSslPoliciesQueryParams };
var PostDescribeSslPoliciesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeSslPoliciesHeaders, _super);
    function PostDescribeSslPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeSslPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeSslPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeSslPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeSslPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeSslPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeSslPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeSslPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeSslPoliciesHeaders;
}(SpeakeasyBase));
export { PostDescribeSslPoliciesHeaders };
var PostDescribeSslPoliciesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeSslPoliciesRequest, _super);
    function PostDescribeSslPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeSslPoliciesQueryParams)
    ], PostDescribeSslPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeSslPoliciesHeaders)
    ], PostDescribeSslPoliciesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSslPoliciesRequest.prototype, "request", void 0);
    return PostDescribeSslPoliciesRequest;
}(SpeakeasyBase));
export { PostDescribeSslPoliciesRequest };
var PostDescribeSslPoliciesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeSslPoliciesResponse, _super);
    function PostDescribeSslPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSslPoliciesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeSslPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeSslPoliciesResponse.prototype, "statusCode", void 0);
    return PostDescribeSslPoliciesResponse;
}(SpeakeasyBase));
export { PostDescribeSslPoliciesResponse };
