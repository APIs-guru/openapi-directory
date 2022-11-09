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
export var PostDescribeManagedPrefixListsActionEnum;
(function (PostDescribeManagedPrefixListsActionEnum) {
    PostDescribeManagedPrefixListsActionEnum["DescribeManagedPrefixLists"] = "DescribeManagedPrefixLists";
})(PostDescribeManagedPrefixListsActionEnum || (PostDescribeManagedPrefixListsActionEnum = {}));
export var PostDescribeManagedPrefixListsVersionEnum;
(function (PostDescribeManagedPrefixListsVersionEnum) {
    PostDescribeManagedPrefixListsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeManagedPrefixListsVersionEnum || (PostDescribeManagedPrefixListsVersionEnum = {}));
var PostDescribeManagedPrefixListsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeManagedPrefixListsQueryParams, _super);
    function PostDescribeManagedPrefixListsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeManagedPrefixListsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeManagedPrefixListsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeManagedPrefixListsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeManagedPrefixListsQueryParams.prototype, "version", void 0);
    return PostDescribeManagedPrefixListsQueryParams;
}(SpeakeasyBase));
export { PostDescribeManagedPrefixListsQueryParams };
var PostDescribeManagedPrefixListsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeManagedPrefixListsHeaders, _super);
    function PostDescribeManagedPrefixListsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeManagedPrefixListsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeManagedPrefixListsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeManagedPrefixListsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeManagedPrefixListsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeManagedPrefixListsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeManagedPrefixListsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeManagedPrefixListsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeManagedPrefixListsHeaders;
}(SpeakeasyBase));
export { PostDescribeManagedPrefixListsHeaders };
var PostDescribeManagedPrefixListsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeManagedPrefixListsRequest, _super);
    function PostDescribeManagedPrefixListsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeManagedPrefixListsQueryParams)
    ], PostDescribeManagedPrefixListsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeManagedPrefixListsHeaders)
    ], PostDescribeManagedPrefixListsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeManagedPrefixListsRequest.prototype, "request", void 0);
    return PostDescribeManagedPrefixListsRequest;
}(SpeakeasyBase));
export { PostDescribeManagedPrefixListsRequest };
var PostDescribeManagedPrefixListsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeManagedPrefixListsResponse, _super);
    function PostDescribeManagedPrefixListsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeManagedPrefixListsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeManagedPrefixListsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeManagedPrefixListsResponse.prototype, "statusCode", void 0);
    return PostDescribeManagedPrefixListsResponse;
}(SpeakeasyBase));
export { PostDescribeManagedPrefixListsResponse };
