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
export var PostDescribeInstanceEventNotificationAttributesActionEnum;
(function (PostDescribeInstanceEventNotificationAttributesActionEnum) {
    PostDescribeInstanceEventNotificationAttributesActionEnum["DescribeInstanceEventNotificationAttributes"] = "DescribeInstanceEventNotificationAttributes";
})(PostDescribeInstanceEventNotificationAttributesActionEnum || (PostDescribeInstanceEventNotificationAttributesActionEnum = {}));
export var PostDescribeInstanceEventNotificationAttributesVersionEnum;
(function (PostDescribeInstanceEventNotificationAttributesVersionEnum) {
    PostDescribeInstanceEventNotificationAttributesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeInstanceEventNotificationAttributesVersionEnum || (PostDescribeInstanceEventNotificationAttributesVersionEnum = {}));
var PostDescribeInstanceEventNotificationAttributesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceEventNotificationAttributesQueryParams, _super);
    function PostDescribeInstanceEventNotificationAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceEventNotificationAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceEventNotificationAttributesQueryParams.prototype, "version", void 0);
    return PostDescribeInstanceEventNotificationAttributesQueryParams;
}(SpeakeasyBase));
export { PostDescribeInstanceEventNotificationAttributesQueryParams };
var PostDescribeInstanceEventNotificationAttributesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceEventNotificationAttributesHeaders, _super);
    function PostDescribeInstanceEventNotificationAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceEventNotificationAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceEventNotificationAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceEventNotificationAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceEventNotificationAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceEventNotificationAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceEventNotificationAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceEventNotificationAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeInstanceEventNotificationAttributesHeaders;
}(SpeakeasyBase));
export { PostDescribeInstanceEventNotificationAttributesHeaders };
var PostDescribeInstanceEventNotificationAttributesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceEventNotificationAttributesRequest, _super);
    function PostDescribeInstanceEventNotificationAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeInstanceEventNotificationAttributesQueryParams)
    ], PostDescribeInstanceEventNotificationAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeInstanceEventNotificationAttributesHeaders)
    ], PostDescribeInstanceEventNotificationAttributesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeInstanceEventNotificationAttributesRequest.prototype, "request", void 0);
    return PostDescribeInstanceEventNotificationAttributesRequest;
}(SpeakeasyBase));
export { PostDescribeInstanceEventNotificationAttributesRequest };
var PostDescribeInstanceEventNotificationAttributesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceEventNotificationAttributesResponse, _super);
    function PostDescribeInstanceEventNotificationAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeInstanceEventNotificationAttributesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeInstanceEventNotificationAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeInstanceEventNotificationAttributesResponse.prototype, "statusCode", void 0);
    return PostDescribeInstanceEventNotificationAttributesResponse;
}(SpeakeasyBase));
export { PostDescribeInstanceEventNotificationAttributesResponse };
