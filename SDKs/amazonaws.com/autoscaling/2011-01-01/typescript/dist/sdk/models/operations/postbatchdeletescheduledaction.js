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
export var PostBatchDeleteScheduledActionActionEnum;
(function (PostBatchDeleteScheduledActionActionEnum) {
    PostBatchDeleteScheduledActionActionEnum["BatchDeleteScheduledAction"] = "BatchDeleteScheduledAction";
})(PostBatchDeleteScheduledActionActionEnum || (PostBatchDeleteScheduledActionActionEnum = {}));
export var PostBatchDeleteScheduledActionVersionEnum;
(function (PostBatchDeleteScheduledActionVersionEnum) {
    PostBatchDeleteScheduledActionVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostBatchDeleteScheduledActionVersionEnum || (PostBatchDeleteScheduledActionVersionEnum = {}));
var PostBatchDeleteScheduledActionQueryParams = /** @class */ (function (_super) {
    __extends(PostBatchDeleteScheduledActionQueryParams, _super);
    function PostBatchDeleteScheduledActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostBatchDeleteScheduledActionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostBatchDeleteScheduledActionQueryParams.prototype, "version", void 0);
    return PostBatchDeleteScheduledActionQueryParams;
}(SpeakeasyBase));
export { PostBatchDeleteScheduledActionQueryParams };
var PostBatchDeleteScheduledActionHeaders = /** @class */ (function (_super) {
    __extends(PostBatchDeleteScheduledActionHeaders, _super);
    function PostBatchDeleteScheduledActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostBatchDeleteScheduledActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostBatchDeleteScheduledActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostBatchDeleteScheduledActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostBatchDeleteScheduledActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostBatchDeleteScheduledActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostBatchDeleteScheduledActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostBatchDeleteScheduledActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostBatchDeleteScheduledActionHeaders;
}(SpeakeasyBase));
export { PostBatchDeleteScheduledActionHeaders };
var PostBatchDeleteScheduledActionRequest = /** @class */ (function (_super) {
    __extends(PostBatchDeleteScheduledActionRequest, _super);
    function PostBatchDeleteScheduledActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostBatchDeleteScheduledActionQueryParams)
    ], PostBatchDeleteScheduledActionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostBatchDeleteScheduledActionHeaders)
    ], PostBatchDeleteScheduledActionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostBatchDeleteScheduledActionRequest.prototype, "request", void 0);
    return PostBatchDeleteScheduledActionRequest;
}(SpeakeasyBase));
export { PostBatchDeleteScheduledActionRequest };
var PostBatchDeleteScheduledActionResponse = /** @class */ (function (_super) {
    __extends(PostBatchDeleteScheduledActionResponse, _super);
    function PostBatchDeleteScheduledActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostBatchDeleteScheduledActionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostBatchDeleteScheduledActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostBatchDeleteScheduledActionResponse.prototype, "statusCode", void 0);
    return PostBatchDeleteScheduledActionResponse;
}(SpeakeasyBase));
export { PostBatchDeleteScheduledActionResponse };
