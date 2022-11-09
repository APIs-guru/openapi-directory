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
export var PostCreateEnvironmentActionEnum;
(function (PostCreateEnvironmentActionEnum) {
    PostCreateEnvironmentActionEnum["CreateEnvironment"] = "CreateEnvironment";
})(PostCreateEnvironmentActionEnum || (PostCreateEnvironmentActionEnum = {}));
export var PostCreateEnvironmentVersionEnum;
(function (PostCreateEnvironmentVersionEnum) {
    PostCreateEnvironmentVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostCreateEnvironmentVersionEnum || (PostCreateEnvironmentVersionEnum = {}));
var PostCreateEnvironmentQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateEnvironmentQueryParams, _super);
    function PostCreateEnvironmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateEnvironmentQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateEnvironmentQueryParams.prototype, "version", void 0);
    return PostCreateEnvironmentQueryParams;
}(SpeakeasyBase));
export { PostCreateEnvironmentQueryParams };
var PostCreateEnvironmentHeaders = /** @class */ (function (_super) {
    __extends(PostCreateEnvironmentHeaders, _super);
    function PostCreateEnvironmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateEnvironmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateEnvironmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateEnvironmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateEnvironmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateEnvironmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateEnvironmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateEnvironmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateEnvironmentHeaders;
}(SpeakeasyBase));
export { PostCreateEnvironmentHeaders };
var PostCreateEnvironmentRequest = /** @class */ (function (_super) {
    __extends(PostCreateEnvironmentRequest, _super);
    function PostCreateEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateEnvironmentQueryParams)
    ], PostCreateEnvironmentRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateEnvironmentHeaders)
    ], PostCreateEnvironmentRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateEnvironmentRequest.prototype, "request", void 0);
    return PostCreateEnvironmentRequest;
}(SpeakeasyBase));
export { PostCreateEnvironmentRequest };
var PostCreateEnvironmentResponse = /** @class */ (function (_super) {
    __extends(PostCreateEnvironmentResponse, _super);
    function PostCreateEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateEnvironmentResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateEnvironmentResponse.prototype, "statusCode", void 0);
    return PostCreateEnvironmentResponse;
}(SpeakeasyBase));
export { PostCreateEnvironmentResponse };
