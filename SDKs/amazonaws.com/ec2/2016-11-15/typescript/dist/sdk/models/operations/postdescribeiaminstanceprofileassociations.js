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
export var PostDescribeIamInstanceProfileAssociationsActionEnum;
(function (PostDescribeIamInstanceProfileAssociationsActionEnum) {
    PostDescribeIamInstanceProfileAssociationsActionEnum["DescribeIamInstanceProfileAssociations"] = "DescribeIamInstanceProfileAssociations";
})(PostDescribeIamInstanceProfileAssociationsActionEnum || (PostDescribeIamInstanceProfileAssociationsActionEnum = {}));
export var PostDescribeIamInstanceProfileAssociationsVersionEnum;
(function (PostDescribeIamInstanceProfileAssociationsVersionEnum) {
    PostDescribeIamInstanceProfileAssociationsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeIamInstanceProfileAssociationsVersionEnum || (PostDescribeIamInstanceProfileAssociationsVersionEnum = {}));
var PostDescribeIamInstanceProfileAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeIamInstanceProfileAssociationsQueryParams, _super);
    function PostDescribeIamInstanceProfileAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeIamInstanceProfileAssociationsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeIamInstanceProfileAssociationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeIamInstanceProfileAssociationsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeIamInstanceProfileAssociationsQueryParams.prototype, "version", void 0);
    return PostDescribeIamInstanceProfileAssociationsQueryParams;
}(SpeakeasyBase));
export { PostDescribeIamInstanceProfileAssociationsQueryParams };
var PostDescribeIamInstanceProfileAssociationsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeIamInstanceProfileAssociationsHeaders, _super);
    function PostDescribeIamInstanceProfileAssociationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeIamInstanceProfileAssociationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeIamInstanceProfileAssociationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeIamInstanceProfileAssociationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeIamInstanceProfileAssociationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeIamInstanceProfileAssociationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeIamInstanceProfileAssociationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeIamInstanceProfileAssociationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeIamInstanceProfileAssociationsHeaders;
}(SpeakeasyBase));
export { PostDescribeIamInstanceProfileAssociationsHeaders };
var PostDescribeIamInstanceProfileAssociationsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeIamInstanceProfileAssociationsRequest, _super);
    function PostDescribeIamInstanceProfileAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeIamInstanceProfileAssociationsQueryParams)
    ], PostDescribeIamInstanceProfileAssociationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeIamInstanceProfileAssociationsHeaders)
    ], PostDescribeIamInstanceProfileAssociationsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeIamInstanceProfileAssociationsRequest.prototype, "request", void 0);
    return PostDescribeIamInstanceProfileAssociationsRequest;
}(SpeakeasyBase));
export { PostDescribeIamInstanceProfileAssociationsRequest };
var PostDescribeIamInstanceProfileAssociationsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeIamInstanceProfileAssociationsResponse, _super);
    function PostDescribeIamInstanceProfileAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeIamInstanceProfileAssociationsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeIamInstanceProfileAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeIamInstanceProfileAssociationsResponse.prototype, "statusCode", void 0);
    return PostDescribeIamInstanceProfileAssociationsResponse;
}(SpeakeasyBase));
export { PostDescribeIamInstanceProfileAssociationsResponse };
