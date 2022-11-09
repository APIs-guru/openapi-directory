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
export var PostDescribeReservedInstancesListingsActionEnum;
(function (PostDescribeReservedInstancesListingsActionEnum) {
    PostDescribeReservedInstancesListingsActionEnum["DescribeReservedInstancesListings"] = "DescribeReservedInstancesListings";
})(PostDescribeReservedInstancesListingsActionEnum || (PostDescribeReservedInstancesListingsActionEnum = {}));
export var PostDescribeReservedInstancesListingsVersionEnum;
(function (PostDescribeReservedInstancesListingsVersionEnum) {
    PostDescribeReservedInstancesListingsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeReservedInstancesListingsVersionEnum || (PostDescribeReservedInstancesListingsVersionEnum = {}));
var PostDescribeReservedInstancesListingsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeReservedInstancesListingsQueryParams, _super);
    function PostDescribeReservedInstancesListingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesListingsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesListingsQueryParams.prototype, "version", void 0);
    return PostDescribeReservedInstancesListingsQueryParams;
}(SpeakeasyBase));
export { PostDescribeReservedInstancesListingsQueryParams };
var PostDescribeReservedInstancesListingsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeReservedInstancesListingsHeaders, _super);
    function PostDescribeReservedInstancesListingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesListingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesListingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesListingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesListingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesListingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesListingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesListingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeReservedInstancesListingsHeaders;
}(SpeakeasyBase));
export { PostDescribeReservedInstancesListingsHeaders };
var PostDescribeReservedInstancesListingsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeReservedInstancesListingsRequest, _super);
    function PostDescribeReservedInstancesListingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeReservedInstancesListingsQueryParams)
    ], PostDescribeReservedInstancesListingsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeReservedInstancesListingsHeaders)
    ], PostDescribeReservedInstancesListingsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeReservedInstancesListingsRequest.prototype, "request", void 0);
    return PostDescribeReservedInstancesListingsRequest;
}(SpeakeasyBase));
export { PostDescribeReservedInstancesListingsRequest };
var PostDescribeReservedInstancesListingsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeReservedInstancesListingsResponse, _super);
    function PostDescribeReservedInstancesListingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeReservedInstancesListingsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesListingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeReservedInstancesListingsResponse.prototype, "statusCode", void 0);
    return PostDescribeReservedInstancesListingsResponse;
}(SpeakeasyBase));
export { PostDescribeReservedInstancesListingsResponse };
