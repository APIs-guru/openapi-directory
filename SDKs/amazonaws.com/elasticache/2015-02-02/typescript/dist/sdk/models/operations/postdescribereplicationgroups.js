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
export var PostDescribeReplicationGroupsActionEnum;
(function (PostDescribeReplicationGroupsActionEnum) {
    PostDescribeReplicationGroupsActionEnum["DescribeReplicationGroups"] = "DescribeReplicationGroups";
})(PostDescribeReplicationGroupsActionEnum || (PostDescribeReplicationGroupsActionEnum = {}));
export var PostDescribeReplicationGroupsVersionEnum;
(function (PostDescribeReplicationGroupsVersionEnum) {
    PostDescribeReplicationGroupsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostDescribeReplicationGroupsVersionEnum || (PostDescribeReplicationGroupsVersionEnum = {}));
var PostDescribeReplicationGroupsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeReplicationGroupsQueryParams, _super);
    function PostDescribeReplicationGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeReplicationGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeReplicationGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeReplicationGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeReplicationGroupsQueryParams.prototype, "version", void 0);
    return PostDescribeReplicationGroupsQueryParams;
}(SpeakeasyBase));
export { PostDescribeReplicationGroupsQueryParams };
var PostDescribeReplicationGroupsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeReplicationGroupsHeaders, _super);
    function PostDescribeReplicationGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeReplicationGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeReplicationGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeReplicationGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeReplicationGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeReplicationGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeReplicationGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeReplicationGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeReplicationGroupsHeaders;
}(SpeakeasyBase));
export { PostDescribeReplicationGroupsHeaders };
var PostDescribeReplicationGroupsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeReplicationGroupsRequest, _super);
    function PostDescribeReplicationGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeReplicationGroupsQueryParams)
    ], PostDescribeReplicationGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeReplicationGroupsHeaders)
    ], PostDescribeReplicationGroupsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeReplicationGroupsRequest.prototype, "request", void 0);
    return PostDescribeReplicationGroupsRequest;
}(SpeakeasyBase));
export { PostDescribeReplicationGroupsRequest };
var PostDescribeReplicationGroupsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeReplicationGroupsResponse, _super);
    function PostDescribeReplicationGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeReplicationGroupsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeReplicationGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeReplicationGroupsResponse.prototype, "statusCode", void 0);
    return PostDescribeReplicationGroupsResponse;
}(SpeakeasyBase));
export { PostDescribeReplicationGroupsResponse };
