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
export var PostDescribeAdjustmentTypesActionEnum;
(function (PostDescribeAdjustmentTypesActionEnum) {
    PostDescribeAdjustmentTypesActionEnum["DescribeAdjustmentTypes"] = "DescribeAdjustmentTypes";
})(PostDescribeAdjustmentTypesActionEnum || (PostDescribeAdjustmentTypesActionEnum = {}));
export var PostDescribeAdjustmentTypesVersionEnum;
(function (PostDescribeAdjustmentTypesVersionEnum) {
    PostDescribeAdjustmentTypesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostDescribeAdjustmentTypesVersionEnum || (PostDescribeAdjustmentTypesVersionEnum = {}));
var PostDescribeAdjustmentTypesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeAdjustmentTypesQueryParams, _super);
    function PostDescribeAdjustmentTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeAdjustmentTypesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeAdjustmentTypesQueryParams.prototype, "version", void 0);
    return PostDescribeAdjustmentTypesQueryParams;
}(SpeakeasyBase));
export { PostDescribeAdjustmentTypesQueryParams };
var PostDescribeAdjustmentTypesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeAdjustmentTypesHeaders, _super);
    function PostDescribeAdjustmentTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeAdjustmentTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeAdjustmentTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeAdjustmentTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeAdjustmentTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeAdjustmentTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeAdjustmentTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeAdjustmentTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeAdjustmentTypesHeaders;
}(SpeakeasyBase));
export { PostDescribeAdjustmentTypesHeaders };
var PostDescribeAdjustmentTypesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeAdjustmentTypesRequest, _super);
    function PostDescribeAdjustmentTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeAdjustmentTypesQueryParams)
    ], PostDescribeAdjustmentTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeAdjustmentTypesHeaders)
    ], PostDescribeAdjustmentTypesRequest.prototype, "headers", void 0);
    return PostDescribeAdjustmentTypesRequest;
}(SpeakeasyBase));
export { PostDescribeAdjustmentTypesRequest };
var PostDescribeAdjustmentTypesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeAdjustmentTypesResponse, _super);
    function PostDescribeAdjustmentTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAdjustmentTypesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeAdjustmentTypesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeAdjustmentTypesResponse.prototype, "statusCode", void 0);
    return PostDescribeAdjustmentTypesResponse;
}(SpeakeasyBase));
export { PostDescribeAdjustmentTypesResponse };
