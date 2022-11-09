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
export var PostEnableFastSnapshotRestoresActionEnum;
(function (PostEnableFastSnapshotRestoresActionEnum) {
    PostEnableFastSnapshotRestoresActionEnum["EnableFastSnapshotRestores"] = "EnableFastSnapshotRestores";
})(PostEnableFastSnapshotRestoresActionEnum || (PostEnableFastSnapshotRestoresActionEnum = {}));
export var PostEnableFastSnapshotRestoresVersionEnum;
(function (PostEnableFastSnapshotRestoresVersionEnum) {
    PostEnableFastSnapshotRestoresVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostEnableFastSnapshotRestoresVersionEnum || (PostEnableFastSnapshotRestoresVersionEnum = {}));
var PostEnableFastSnapshotRestoresQueryParams = /** @class */ (function (_super) {
    __extends(PostEnableFastSnapshotRestoresQueryParams, _super);
    function PostEnableFastSnapshotRestoresQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostEnableFastSnapshotRestoresQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostEnableFastSnapshotRestoresQueryParams.prototype, "version", void 0);
    return PostEnableFastSnapshotRestoresQueryParams;
}(SpeakeasyBase));
export { PostEnableFastSnapshotRestoresQueryParams };
var PostEnableFastSnapshotRestoresHeaders = /** @class */ (function (_super) {
    __extends(PostEnableFastSnapshotRestoresHeaders, _super);
    function PostEnableFastSnapshotRestoresHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostEnableFastSnapshotRestoresHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostEnableFastSnapshotRestoresHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostEnableFastSnapshotRestoresHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostEnableFastSnapshotRestoresHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostEnableFastSnapshotRestoresHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostEnableFastSnapshotRestoresHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostEnableFastSnapshotRestoresHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostEnableFastSnapshotRestoresHeaders;
}(SpeakeasyBase));
export { PostEnableFastSnapshotRestoresHeaders };
var PostEnableFastSnapshotRestoresRequest = /** @class */ (function (_super) {
    __extends(PostEnableFastSnapshotRestoresRequest, _super);
    function PostEnableFastSnapshotRestoresRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostEnableFastSnapshotRestoresQueryParams)
    ], PostEnableFastSnapshotRestoresRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostEnableFastSnapshotRestoresHeaders)
    ], PostEnableFastSnapshotRestoresRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostEnableFastSnapshotRestoresRequest.prototype, "request", void 0);
    return PostEnableFastSnapshotRestoresRequest;
}(SpeakeasyBase));
export { PostEnableFastSnapshotRestoresRequest };
var PostEnableFastSnapshotRestoresResponse = /** @class */ (function (_super) {
    __extends(PostEnableFastSnapshotRestoresResponse, _super);
    function PostEnableFastSnapshotRestoresResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostEnableFastSnapshotRestoresResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostEnableFastSnapshotRestoresResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostEnableFastSnapshotRestoresResponse.prototype, "statusCode", void 0);
    return PostEnableFastSnapshotRestoresResponse;
}(SpeakeasyBase));
export { PostEnableFastSnapshotRestoresResponse };
