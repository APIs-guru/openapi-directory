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
export var PostUpdateServiceAccessPoliciesActionEnum;
(function (PostUpdateServiceAccessPoliciesActionEnum) {
    PostUpdateServiceAccessPoliciesActionEnum["UpdateServiceAccessPolicies"] = "UpdateServiceAccessPolicies";
})(PostUpdateServiceAccessPoliciesActionEnum || (PostUpdateServiceAccessPoliciesActionEnum = {}));
export var PostUpdateServiceAccessPoliciesVersionEnum;
(function (PostUpdateServiceAccessPoliciesVersionEnum) {
    PostUpdateServiceAccessPoliciesVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(PostUpdateServiceAccessPoliciesVersionEnum || (PostUpdateServiceAccessPoliciesVersionEnum = {}));
var PostUpdateServiceAccessPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateServiceAccessPoliciesQueryParams, _super);
    function PostUpdateServiceAccessPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateServiceAccessPoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateServiceAccessPoliciesQueryParams.prototype, "version", void 0);
    return PostUpdateServiceAccessPoliciesQueryParams;
}(SpeakeasyBase));
export { PostUpdateServiceAccessPoliciesQueryParams };
var PostUpdateServiceAccessPoliciesHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateServiceAccessPoliciesHeaders, _super);
    function PostUpdateServiceAccessPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateServiceAccessPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateServiceAccessPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateServiceAccessPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateServiceAccessPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateServiceAccessPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateServiceAccessPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateServiceAccessPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateServiceAccessPoliciesHeaders;
}(SpeakeasyBase));
export { PostUpdateServiceAccessPoliciesHeaders };
var PostUpdateServiceAccessPoliciesRequest = /** @class */ (function (_super) {
    __extends(PostUpdateServiceAccessPoliciesRequest, _super);
    function PostUpdateServiceAccessPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUpdateServiceAccessPoliciesQueryParams)
    ], PostUpdateServiceAccessPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUpdateServiceAccessPoliciesHeaders)
    ], PostUpdateServiceAccessPoliciesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateServiceAccessPoliciesRequest.prototype, "request", void 0);
    return PostUpdateServiceAccessPoliciesRequest;
}(SpeakeasyBase));
export { PostUpdateServiceAccessPoliciesRequest };
var PostUpdateServiceAccessPoliciesResponse = /** @class */ (function (_super) {
    __extends(PostUpdateServiceAccessPoliciesResponse, _super);
    function PostUpdateServiceAccessPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateServiceAccessPoliciesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUpdateServiceAccessPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUpdateServiceAccessPoliciesResponse.prototype, "statusCode", void 0);
    return PostUpdateServiceAccessPoliciesResponse;
}(SpeakeasyBase));
export { PostUpdateServiceAccessPoliciesResponse };
