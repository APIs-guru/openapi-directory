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
export var PostDescribeScalingProcessTypesActionEnum;
(function (PostDescribeScalingProcessTypesActionEnum) {
    PostDescribeScalingProcessTypesActionEnum["DescribeScalingProcessTypes"] = "DescribeScalingProcessTypes";
})(PostDescribeScalingProcessTypesActionEnum || (PostDescribeScalingProcessTypesActionEnum = {}));
export var PostDescribeScalingProcessTypesVersionEnum;
(function (PostDescribeScalingProcessTypesVersionEnum) {
    PostDescribeScalingProcessTypesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostDescribeScalingProcessTypesVersionEnum || (PostDescribeScalingProcessTypesVersionEnum = {}));
var PostDescribeScalingProcessTypesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeScalingProcessTypesQueryParams, _super);
    function PostDescribeScalingProcessTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeScalingProcessTypesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeScalingProcessTypesQueryParams.prototype, "version", void 0);
    return PostDescribeScalingProcessTypesQueryParams;
}(SpeakeasyBase));
export { PostDescribeScalingProcessTypesQueryParams };
var PostDescribeScalingProcessTypesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeScalingProcessTypesHeaders, _super);
    function PostDescribeScalingProcessTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeScalingProcessTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeScalingProcessTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeScalingProcessTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeScalingProcessTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeScalingProcessTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeScalingProcessTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeScalingProcessTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeScalingProcessTypesHeaders;
}(SpeakeasyBase));
export { PostDescribeScalingProcessTypesHeaders };
var PostDescribeScalingProcessTypesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeScalingProcessTypesRequest, _super);
    function PostDescribeScalingProcessTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeScalingProcessTypesQueryParams)
    ], PostDescribeScalingProcessTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeScalingProcessTypesHeaders)
    ], PostDescribeScalingProcessTypesRequest.prototype, "headers", void 0);
    return PostDescribeScalingProcessTypesRequest;
}(SpeakeasyBase));
export { PostDescribeScalingProcessTypesRequest };
var PostDescribeScalingProcessTypesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeScalingProcessTypesResponse, _super);
    function PostDescribeScalingProcessTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeScalingProcessTypesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeScalingProcessTypesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeScalingProcessTypesResponse.prototype, "statusCode", void 0);
    return PostDescribeScalingProcessTypesResponse;
}(SpeakeasyBase));
export { PostDescribeScalingProcessTypesResponse };
