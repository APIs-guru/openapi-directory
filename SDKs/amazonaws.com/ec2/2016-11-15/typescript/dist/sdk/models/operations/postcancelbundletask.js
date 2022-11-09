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
export var PostCancelBundleTaskActionEnum;
(function (PostCancelBundleTaskActionEnum) {
    PostCancelBundleTaskActionEnum["CancelBundleTask"] = "CancelBundleTask";
})(PostCancelBundleTaskActionEnum || (PostCancelBundleTaskActionEnum = {}));
export var PostCancelBundleTaskVersionEnum;
(function (PostCancelBundleTaskVersionEnum) {
    PostCancelBundleTaskVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCancelBundleTaskVersionEnum || (PostCancelBundleTaskVersionEnum = {}));
var PostCancelBundleTaskQueryParams = /** @class */ (function (_super) {
    __extends(PostCancelBundleTaskQueryParams, _super);
    function PostCancelBundleTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCancelBundleTaskQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCancelBundleTaskQueryParams.prototype, "version", void 0);
    return PostCancelBundleTaskQueryParams;
}(SpeakeasyBase));
export { PostCancelBundleTaskQueryParams };
var PostCancelBundleTaskHeaders = /** @class */ (function (_super) {
    __extends(PostCancelBundleTaskHeaders, _super);
    function PostCancelBundleTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCancelBundleTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCancelBundleTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCancelBundleTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCancelBundleTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCancelBundleTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCancelBundleTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCancelBundleTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCancelBundleTaskHeaders;
}(SpeakeasyBase));
export { PostCancelBundleTaskHeaders };
var PostCancelBundleTaskRequest = /** @class */ (function (_super) {
    __extends(PostCancelBundleTaskRequest, _super);
    function PostCancelBundleTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCancelBundleTaskQueryParams)
    ], PostCancelBundleTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCancelBundleTaskHeaders)
    ], PostCancelBundleTaskRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCancelBundleTaskRequest.prototype, "request", void 0);
    return PostCancelBundleTaskRequest;
}(SpeakeasyBase));
export { PostCancelBundleTaskRequest };
var PostCancelBundleTaskResponse = /** @class */ (function (_super) {
    __extends(PostCancelBundleTaskResponse, _super);
    function PostCancelBundleTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCancelBundleTaskResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCancelBundleTaskResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCancelBundleTaskResponse.prototype, "statusCode", void 0);
    return PostCancelBundleTaskResponse;
}(SpeakeasyBase));
export { PostCancelBundleTaskResponse };
