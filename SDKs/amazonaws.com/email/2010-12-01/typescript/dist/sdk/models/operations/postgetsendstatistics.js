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
export var PostGetSendStatisticsActionEnum;
(function (PostGetSendStatisticsActionEnum) {
    PostGetSendStatisticsActionEnum["GetSendStatistics"] = "GetSendStatistics";
})(PostGetSendStatisticsActionEnum || (PostGetSendStatisticsActionEnum = {}));
export var PostGetSendStatisticsVersionEnum;
(function (PostGetSendStatisticsVersionEnum) {
    PostGetSendStatisticsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostGetSendStatisticsVersionEnum || (PostGetSendStatisticsVersionEnum = {}));
var PostGetSendStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(PostGetSendStatisticsQueryParams, _super);
    function PostGetSendStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetSendStatisticsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetSendStatisticsQueryParams.prototype, "version", void 0);
    return PostGetSendStatisticsQueryParams;
}(SpeakeasyBase));
export { PostGetSendStatisticsQueryParams };
var PostGetSendStatisticsHeaders = /** @class */ (function (_super) {
    __extends(PostGetSendStatisticsHeaders, _super);
    function PostGetSendStatisticsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetSendStatisticsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetSendStatisticsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetSendStatisticsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetSendStatisticsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetSendStatisticsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetSendStatisticsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetSendStatisticsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetSendStatisticsHeaders;
}(SpeakeasyBase));
export { PostGetSendStatisticsHeaders };
var PostGetSendStatisticsRequest = /** @class */ (function (_super) {
    __extends(PostGetSendStatisticsRequest, _super);
    function PostGetSendStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetSendStatisticsQueryParams)
    ], PostGetSendStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetSendStatisticsHeaders)
    ], PostGetSendStatisticsRequest.prototype, "headers", void 0);
    return PostGetSendStatisticsRequest;
}(SpeakeasyBase));
export { PostGetSendStatisticsRequest };
var PostGetSendStatisticsResponse = /** @class */ (function (_super) {
    __extends(PostGetSendStatisticsResponse, _super);
    function PostGetSendStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetSendStatisticsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGetSendStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGetSendStatisticsResponse.prototype, "statusCode", void 0);
    return PostGetSendStatisticsResponse;
}(SpeakeasyBase));
export { PostGetSendStatisticsResponse };
