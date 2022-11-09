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
export var PostDescribeSpotFleetRequestHistoryActionEnum;
(function (PostDescribeSpotFleetRequestHistoryActionEnum) {
    PostDescribeSpotFleetRequestHistoryActionEnum["DescribeSpotFleetRequestHistory"] = "DescribeSpotFleetRequestHistory";
})(PostDescribeSpotFleetRequestHistoryActionEnum || (PostDescribeSpotFleetRequestHistoryActionEnum = {}));
export var PostDescribeSpotFleetRequestHistoryVersionEnum;
(function (PostDescribeSpotFleetRequestHistoryVersionEnum) {
    PostDescribeSpotFleetRequestHistoryVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeSpotFleetRequestHistoryVersionEnum || (PostDescribeSpotFleetRequestHistoryVersionEnum = {}));
var PostDescribeSpotFleetRequestHistoryQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeSpotFleetRequestHistoryQueryParams, _super);
    function PostDescribeSpotFleetRequestHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeSpotFleetRequestHistoryQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeSpotFleetRequestHistoryQueryParams.prototype, "version", void 0);
    return PostDescribeSpotFleetRequestHistoryQueryParams;
}(SpeakeasyBase));
export { PostDescribeSpotFleetRequestHistoryQueryParams };
var PostDescribeSpotFleetRequestHistoryHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeSpotFleetRequestHistoryHeaders, _super);
    function PostDescribeSpotFleetRequestHistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeSpotFleetRequestHistoryHeaders;
}(SpeakeasyBase));
export { PostDescribeSpotFleetRequestHistoryHeaders };
var PostDescribeSpotFleetRequestHistoryRequest = /** @class */ (function (_super) {
    __extends(PostDescribeSpotFleetRequestHistoryRequest, _super);
    function PostDescribeSpotFleetRequestHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeSpotFleetRequestHistoryQueryParams)
    ], PostDescribeSpotFleetRequestHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeSpotFleetRequestHistoryHeaders)
    ], PostDescribeSpotFleetRequestHistoryRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSpotFleetRequestHistoryRequest.prototype, "request", void 0);
    return PostDescribeSpotFleetRequestHistoryRequest;
}(SpeakeasyBase));
export { PostDescribeSpotFleetRequestHistoryRequest };
var PostDescribeSpotFleetRequestHistoryResponse = /** @class */ (function (_super) {
    __extends(PostDescribeSpotFleetRequestHistoryResponse, _super);
    function PostDescribeSpotFleetRequestHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSpotFleetRequestHistoryResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeSpotFleetRequestHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeSpotFleetRequestHistoryResponse.prototype, "statusCode", void 0);
    return PostDescribeSpotFleetRequestHistoryResponse;
}(SpeakeasyBase));
export { PostDescribeSpotFleetRequestHistoryResponse };
