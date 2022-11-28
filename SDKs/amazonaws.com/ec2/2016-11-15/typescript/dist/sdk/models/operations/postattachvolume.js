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
export var PostAttachVolumeActionEnum;
(function (PostAttachVolumeActionEnum) {
    PostAttachVolumeActionEnum["AttachVolume"] = "AttachVolume";
})(PostAttachVolumeActionEnum || (PostAttachVolumeActionEnum = {}));
export var PostAttachVolumeVersionEnum;
(function (PostAttachVolumeVersionEnum) {
    PostAttachVolumeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostAttachVolumeVersionEnum || (PostAttachVolumeVersionEnum = {}));
var PostAttachVolumeQueryParams = /** @class */ (function (_super) {
    __extends(PostAttachVolumeQueryParams, _super);
    function PostAttachVolumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAttachVolumeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAttachVolumeQueryParams.prototype, "version", void 0);
    return PostAttachVolumeQueryParams;
}(SpeakeasyBase));
export { PostAttachVolumeQueryParams };
var PostAttachVolumeHeaders = /** @class */ (function (_super) {
    __extends(PostAttachVolumeHeaders, _super);
    function PostAttachVolumeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAttachVolumeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAttachVolumeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAttachVolumeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAttachVolumeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAttachVolumeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAttachVolumeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAttachVolumeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAttachVolumeHeaders;
}(SpeakeasyBase));
export { PostAttachVolumeHeaders };
var PostAttachVolumeRequest = /** @class */ (function (_super) {
    __extends(PostAttachVolumeRequest, _super);
    function PostAttachVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAttachVolumeQueryParams)
    ], PostAttachVolumeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAttachVolumeHeaders)
    ], PostAttachVolumeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAttachVolumeRequest.prototype, "request", void 0);
    return PostAttachVolumeRequest;
}(SpeakeasyBase));
export { PostAttachVolumeRequest };
var PostAttachVolumeResponse = /** @class */ (function (_super) {
    __extends(PostAttachVolumeResponse, _super);
    function PostAttachVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAttachVolumeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAttachVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAttachVolumeResponse.prototype, "statusCode", void 0);
    return PostAttachVolumeResponse;
}(SpeakeasyBase));
export { PostAttachVolumeResponse };
