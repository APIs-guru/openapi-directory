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
export var PostCreateReplaceRootVolumeTaskActionEnum;
(function (PostCreateReplaceRootVolumeTaskActionEnum) {
    PostCreateReplaceRootVolumeTaskActionEnum["CreateReplaceRootVolumeTask"] = "CreateReplaceRootVolumeTask";
})(PostCreateReplaceRootVolumeTaskActionEnum || (PostCreateReplaceRootVolumeTaskActionEnum = {}));
export var PostCreateReplaceRootVolumeTaskVersionEnum;
(function (PostCreateReplaceRootVolumeTaskVersionEnum) {
    PostCreateReplaceRootVolumeTaskVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateReplaceRootVolumeTaskVersionEnum || (PostCreateReplaceRootVolumeTaskVersionEnum = {}));
var PostCreateReplaceRootVolumeTaskQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateReplaceRootVolumeTaskQueryParams, _super);
    function PostCreateReplaceRootVolumeTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateReplaceRootVolumeTaskQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateReplaceRootVolumeTaskQueryParams.prototype, "version", void 0);
    return PostCreateReplaceRootVolumeTaskQueryParams;
}(SpeakeasyBase));
export { PostCreateReplaceRootVolumeTaskQueryParams };
var PostCreateReplaceRootVolumeTaskHeaders = /** @class */ (function (_super) {
    __extends(PostCreateReplaceRootVolumeTaskHeaders, _super);
    function PostCreateReplaceRootVolumeTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateReplaceRootVolumeTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateReplaceRootVolumeTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateReplaceRootVolumeTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateReplaceRootVolumeTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateReplaceRootVolumeTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateReplaceRootVolumeTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateReplaceRootVolumeTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateReplaceRootVolumeTaskHeaders;
}(SpeakeasyBase));
export { PostCreateReplaceRootVolumeTaskHeaders };
var PostCreateReplaceRootVolumeTaskRequest = /** @class */ (function (_super) {
    __extends(PostCreateReplaceRootVolumeTaskRequest, _super);
    function PostCreateReplaceRootVolumeTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateReplaceRootVolumeTaskQueryParams)
    ], PostCreateReplaceRootVolumeTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateReplaceRootVolumeTaskHeaders)
    ], PostCreateReplaceRootVolumeTaskRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateReplaceRootVolumeTaskRequest.prototype, "request", void 0);
    return PostCreateReplaceRootVolumeTaskRequest;
}(SpeakeasyBase));
export { PostCreateReplaceRootVolumeTaskRequest };
var PostCreateReplaceRootVolumeTaskResponse = /** @class */ (function (_super) {
    __extends(PostCreateReplaceRootVolumeTaskResponse, _super);
    function PostCreateReplaceRootVolumeTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateReplaceRootVolumeTaskResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateReplaceRootVolumeTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateReplaceRootVolumeTaskResponse.prototype, "statusCode", void 0);
    return PostCreateReplaceRootVolumeTaskResponse;
}(SpeakeasyBase));
export { PostCreateReplaceRootVolumeTaskResponse };
