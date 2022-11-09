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
export var PostTerminateEnvironmentActionEnum;
(function (PostTerminateEnvironmentActionEnum) {
    PostTerminateEnvironmentActionEnum["TerminateEnvironment"] = "TerminateEnvironment";
})(PostTerminateEnvironmentActionEnum || (PostTerminateEnvironmentActionEnum = {}));
export var PostTerminateEnvironmentVersionEnum;
(function (PostTerminateEnvironmentVersionEnum) {
    PostTerminateEnvironmentVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostTerminateEnvironmentVersionEnum || (PostTerminateEnvironmentVersionEnum = {}));
var PostTerminateEnvironmentQueryParams = /** @class */ (function (_super) {
    __extends(PostTerminateEnvironmentQueryParams, _super);
    function PostTerminateEnvironmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostTerminateEnvironmentQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostTerminateEnvironmentQueryParams.prototype, "version", void 0);
    return PostTerminateEnvironmentQueryParams;
}(SpeakeasyBase));
export { PostTerminateEnvironmentQueryParams };
var PostTerminateEnvironmentHeaders = /** @class */ (function (_super) {
    __extends(PostTerminateEnvironmentHeaders, _super);
    function PostTerminateEnvironmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostTerminateEnvironmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostTerminateEnvironmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostTerminateEnvironmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostTerminateEnvironmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostTerminateEnvironmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostTerminateEnvironmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostTerminateEnvironmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostTerminateEnvironmentHeaders;
}(SpeakeasyBase));
export { PostTerminateEnvironmentHeaders };
var PostTerminateEnvironmentRequest = /** @class */ (function (_super) {
    __extends(PostTerminateEnvironmentRequest, _super);
    function PostTerminateEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostTerminateEnvironmentQueryParams)
    ], PostTerminateEnvironmentRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostTerminateEnvironmentHeaders)
    ], PostTerminateEnvironmentRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostTerminateEnvironmentRequest.prototype, "request", void 0);
    return PostTerminateEnvironmentRequest;
}(SpeakeasyBase));
export { PostTerminateEnvironmentRequest };
var PostTerminateEnvironmentResponse = /** @class */ (function (_super) {
    __extends(PostTerminateEnvironmentResponse, _super);
    function PostTerminateEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostTerminateEnvironmentResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostTerminateEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostTerminateEnvironmentResponse.prototype, "statusCode", void 0);
    return PostTerminateEnvironmentResponse;
}(SpeakeasyBase));
export { PostTerminateEnvironmentResponse };
