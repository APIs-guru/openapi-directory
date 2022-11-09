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
export var PostEnterStandbyActionEnum;
(function (PostEnterStandbyActionEnum) {
    PostEnterStandbyActionEnum["EnterStandby"] = "EnterStandby";
})(PostEnterStandbyActionEnum || (PostEnterStandbyActionEnum = {}));
export var PostEnterStandbyVersionEnum;
(function (PostEnterStandbyVersionEnum) {
    PostEnterStandbyVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostEnterStandbyVersionEnum || (PostEnterStandbyVersionEnum = {}));
var PostEnterStandbyQueryParams = /** @class */ (function (_super) {
    __extends(PostEnterStandbyQueryParams, _super);
    function PostEnterStandbyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostEnterStandbyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostEnterStandbyQueryParams.prototype, "version", void 0);
    return PostEnterStandbyQueryParams;
}(SpeakeasyBase));
export { PostEnterStandbyQueryParams };
var PostEnterStandbyHeaders = /** @class */ (function (_super) {
    __extends(PostEnterStandbyHeaders, _super);
    function PostEnterStandbyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostEnterStandbyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostEnterStandbyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostEnterStandbyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostEnterStandbyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostEnterStandbyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostEnterStandbyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostEnterStandbyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostEnterStandbyHeaders;
}(SpeakeasyBase));
export { PostEnterStandbyHeaders };
var PostEnterStandbyRequest = /** @class */ (function (_super) {
    __extends(PostEnterStandbyRequest, _super);
    function PostEnterStandbyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostEnterStandbyQueryParams)
    ], PostEnterStandbyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostEnterStandbyHeaders)
    ], PostEnterStandbyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostEnterStandbyRequest.prototype, "request", void 0);
    return PostEnterStandbyRequest;
}(SpeakeasyBase));
export { PostEnterStandbyRequest };
var PostEnterStandbyResponse = /** @class */ (function (_super) {
    __extends(PostEnterStandbyResponse, _super);
    function PostEnterStandbyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostEnterStandbyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostEnterStandbyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostEnterStandbyResponse.prototype, "statusCode", void 0);
    return PostEnterStandbyResponse;
}(SpeakeasyBase));
export { PostEnterStandbyResponse };
