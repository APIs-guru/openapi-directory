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
export var PostCreateTrafficMirrorSessionActionEnum;
(function (PostCreateTrafficMirrorSessionActionEnum) {
    PostCreateTrafficMirrorSessionActionEnum["CreateTrafficMirrorSession"] = "CreateTrafficMirrorSession";
})(PostCreateTrafficMirrorSessionActionEnum || (PostCreateTrafficMirrorSessionActionEnum = {}));
export var PostCreateTrafficMirrorSessionVersionEnum;
(function (PostCreateTrafficMirrorSessionVersionEnum) {
    PostCreateTrafficMirrorSessionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateTrafficMirrorSessionVersionEnum || (PostCreateTrafficMirrorSessionVersionEnum = {}));
var PostCreateTrafficMirrorSessionQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateTrafficMirrorSessionQueryParams, _super);
    function PostCreateTrafficMirrorSessionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorSessionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorSessionQueryParams.prototype, "version", void 0);
    return PostCreateTrafficMirrorSessionQueryParams;
}(SpeakeasyBase));
export { PostCreateTrafficMirrorSessionQueryParams };
var PostCreateTrafficMirrorSessionHeaders = /** @class */ (function (_super) {
    __extends(PostCreateTrafficMirrorSessionHeaders, _super);
    function PostCreateTrafficMirrorSessionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorSessionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorSessionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorSessionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorSessionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorSessionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorSessionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorSessionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateTrafficMirrorSessionHeaders;
}(SpeakeasyBase));
export { PostCreateTrafficMirrorSessionHeaders };
var PostCreateTrafficMirrorSessionRequest = /** @class */ (function (_super) {
    __extends(PostCreateTrafficMirrorSessionRequest, _super);
    function PostCreateTrafficMirrorSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateTrafficMirrorSessionQueryParams)
    ], PostCreateTrafficMirrorSessionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateTrafficMirrorSessionHeaders)
    ], PostCreateTrafficMirrorSessionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateTrafficMirrorSessionRequest.prototype, "request", void 0);
    return PostCreateTrafficMirrorSessionRequest;
}(SpeakeasyBase));
export { PostCreateTrafficMirrorSessionRequest };
var PostCreateTrafficMirrorSessionResponse = /** @class */ (function (_super) {
    __extends(PostCreateTrafficMirrorSessionResponse, _super);
    function PostCreateTrafficMirrorSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateTrafficMirrorSessionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorSessionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateTrafficMirrorSessionResponse.prototype, "statusCode", void 0);
    return PostCreateTrafficMirrorSessionResponse;
}(SpeakeasyBase));
export { PostCreateTrafficMirrorSessionResponse };
