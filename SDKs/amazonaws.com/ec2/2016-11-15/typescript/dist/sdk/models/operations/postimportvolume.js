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
export var PostImportVolumeActionEnum;
(function (PostImportVolumeActionEnum) {
    PostImportVolumeActionEnum["ImportVolume"] = "ImportVolume";
})(PostImportVolumeActionEnum || (PostImportVolumeActionEnum = {}));
export var PostImportVolumeVersionEnum;
(function (PostImportVolumeVersionEnum) {
    PostImportVolumeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostImportVolumeVersionEnum || (PostImportVolumeVersionEnum = {}));
var PostImportVolumeQueryParams = /** @class */ (function (_super) {
    __extends(PostImportVolumeQueryParams, _super);
    function PostImportVolumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostImportVolumeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostImportVolumeQueryParams.prototype, "version", void 0);
    return PostImportVolumeQueryParams;
}(SpeakeasyBase));
export { PostImportVolumeQueryParams };
var PostImportVolumeHeaders = /** @class */ (function (_super) {
    __extends(PostImportVolumeHeaders, _super);
    function PostImportVolumeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostImportVolumeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostImportVolumeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostImportVolumeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostImportVolumeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostImportVolumeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostImportVolumeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostImportVolumeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostImportVolumeHeaders;
}(SpeakeasyBase));
export { PostImportVolumeHeaders };
var PostImportVolumeRequest = /** @class */ (function (_super) {
    __extends(PostImportVolumeRequest, _super);
    function PostImportVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostImportVolumeQueryParams)
    ], PostImportVolumeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostImportVolumeHeaders)
    ], PostImportVolumeRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostImportVolumeRequest.prototype, "request", void 0);
    return PostImportVolumeRequest;
}(SpeakeasyBase));
export { PostImportVolumeRequest };
var PostImportVolumeResponse = /** @class */ (function (_super) {
    __extends(PostImportVolumeResponse, _super);
    function PostImportVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostImportVolumeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostImportVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostImportVolumeResponse.prototype, "statusCode", void 0);
    return PostImportVolumeResponse;
}(SpeakeasyBase));
export { PostImportVolumeResponse };
