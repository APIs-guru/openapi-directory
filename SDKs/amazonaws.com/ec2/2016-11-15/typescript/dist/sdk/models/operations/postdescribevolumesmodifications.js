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
export var PostDescribeVolumesModificationsActionEnum;
(function (PostDescribeVolumesModificationsActionEnum) {
    PostDescribeVolumesModificationsActionEnum["DescribeVolumesModifications"] = "DescribeVolumesModifications";
})(PostDescribeVolumesModificationsActionEnum || (PostDescribeVolumesModificationsActionEnum = {}));
export var PostDescribeVolumesModificationsVersionEnum;
(function (PostDescribeVolumesModificationsVersionEnum) {
    PostDescribeVolumesModificationsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeVolumesModificationsVersionEnum || (PostDescribeVolumesModificationsVersionEnum = {}));
var PostDescribeVolumesModificationsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeVolumesModificationsQueryParams, _super);
    function PostDescribeVolumesModificationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeVolumesModificationsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeVolumesModificationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeVolumesModificationsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeVolumesModificationsQueryParams.prototype, "version", void 0);
    return PostDescribeVolumesModificationsQueryParams;
}(SpeakeasyBase));
export { PostDescribeVolumesModificationsQueryParams };
var PostDescribeVolumesModificationsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeVolumesModificationsHeaders, _super);
    function PostDescribeVolumesModificationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeVolumesModificationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeVolumesModificationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeVolumesModificationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeVolumesModificationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeVolumesModificationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeVolumesModificationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeVolumesModificationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeVolumesModificationsHeaders;
}(SpeakeasyBase));
export { PostDescribeVolumesModificationsHeaders };
var PostDescribeVolumesModificationsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeVolumesModificationsRequest, _super);
    function PostDescribeVolumesModificationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeVolumesModificationsQueryParams)
    ], PostDescribeVolumesModificationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeVolumesModificationsHeaders)
    ], PostDescribeVolumesModificationsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVolumesModificationsRequest.prototype, "request", void 0);
    return PostDescribeVolumesModificationsRequest;
}(SpeakeasyBase));
export { PostDescribeVolumesModificationsRequest };
var PostDescribeVolumesModificationsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeVolumesModificationsResponse, _super);
    function PostDescribeVolumesModificationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVolumesModificationsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeVolumesModificationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeVolumesModificationsResponse.prototype, "statusCode", void 0);
    return PostDescribeVolumesModificationsResponse;
}(SpeakeasyBase));
export { PostDescribeVolumesModificationsResponse };
