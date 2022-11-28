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
export var PostDeleteSpotDatafeedSubscriptionActionEnum;
(function (PostDeleteSpotDatafeedSubscriptionActionEnum) {
    PostDeleteSpotDatafeedSubscriptionActionEnum["DeleteSpotDatafeedSubscription"] = "DeleteSpotDatafeedSubscription";
})(PostDeleteSpotDatafeedSubscriptionActionEnum || (PostDeleteSpotDatafeedSubscriptionActionEnum = {}));
export var PostDeleteSpotDatafeedSubscriptionVersionEnum;
(function (PostDeleteSpotDatafeedSubscriptionVersionEnum) {
    PostDeleteSpotDatafeedSubscriptionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteSpotDatafeedSubscriptionVersionEnum || (PostDeleteSpotDatafeedSubscriptionVersionEnum = {}));
var PostDeleteSpotDatafeedSubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteSpotDatafeedSubscriptionQueryParams, _super);
    function PostDeleteSpotDatafeedSubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteSpotDatafeedSubscriptionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteSpotDatafeedSubscriptionQueryParams.prototype, "version", void 0);
    return PostDeleteSpotDatafeedSubscriptionQueryParams;
}(SpeakeasyBase));
export { PostDeleteSpotDatafeedSubscriptionQueryParams };
var PostDeleteSpotDatafeedSubscriptionHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteSpotDatafeedSubscriptionHeaders, _super);
    function PostDeleteSpotDatafeedSubscriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteSpotDatafeedSubscriptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteSpotDatafeedSubscriptionHeaders;
}(SpeakeasyBase));
export { PostDeleteSpotDatafeedSubscriptionHeaders };
var PostDeleteSpotDatafeedSubscriptionRequest = /** @class */ (function (_super) {
    __extends(PostDeleteSpotDatafeedSubscriptionRequest, _super);
    function PostDeleteSpotDatafeedSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteSpotDatafeedSubscriptionQueryParams)
    ], PostDeleteSpotDatafeedSubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteSpotDatafeedSubscriptionHeaders)
    ], PostDeleteSpotDatafeedSubscriptionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteSpotDatafeedSubscriptionRequest.prototype, "request", void 0);
    return PostDeleteSpotDatafeedSubscriptionRequest;
}(SpeakeasyBase));
export { PostDeleteSpotDatafeedSubscriptionRequest };
var PostDeleteSpotDatafeedSubscriptionResponse = /** @class */ (function (_super) {
    __extends(PostDeleteSpotDatafeedSubscriptionResponse, _super);
    function PostDeleteSpotDatafeedSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeleteSpotDatafeedSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeleteSpotDatafeedSubscriptionResponse.prototype, "statusCode", void 0);
    return PostDeleteSpotDatafeedSubscriptionResponse;
}(SpeakeasyBase));
export { PostDeleteSpotDatafeedSubscriptionResponse };
