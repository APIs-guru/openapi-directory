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
export var PostCopySnapshotActionEnum;
(function (PostCopySnapshotActionEnum) {
    PostCopySnapshotActionEnum["CopySnapshot"] = "CopySnapshot";
})(PostCopySnapshotActionEnum || (PostCopySnapshotActionEnum = {}));
export var PostCopySnapshotVersionEnum;
(function (PostCopySnapshotVersionEnum) {
    PostCopySnapshotVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostCopySnapshotVersionEnum || (PostCopySnapshotVersionEnum = {}));
var PostCopySnapshotQueryParams = /** @class */ (function (_super) {
    __extends(PostCopySnapshotQueryParams, _super);
    function PostCopySnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCopySnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCopySnapshotQueryParams.prototype, "version", void 0);
    return PostCopySnapshotQueryParams;
}(SpeakeasyBase));
export { PostCopySnapshotQueryParams };
var PostCopySnapshotHeaders = /** @class */ (function (_super) {
    __extends(PostCopySnapshotHeaders, _super);
    function PostCopySnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCopySnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCopySnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCopySnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCopySnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCopySnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCopySnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCopySnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCopySnapshotHeaders;
}(SpeakeasyBase));
export { PostCopySnapshotHeaders };
var PostCopySnapshotRequest = /** @class */ (function (_super) {
    __extends(PostCopySnapshotRequest, _super);
    function PostCopySnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCopySnapshotQueryParams)
    ], PostCopySnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCopySnapshotHeaders)
    ], PostCopySnapshotRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCopySnapshotRequest.prototype, "request", void 0);
    return PostCopySnapshotRequest;
}(SpeakeasyBase));
export { PostCopySnapshotRequest };
var PostCopySnapshotResponse = /** @class */ (function (_super) {
    __extends(PostCopySnapshotResponse, _super);
    function PostCopySnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCopySnapshotResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCopySnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCopySnapshotResponse.prototype, "statusCode", void 0);
    return PostCopySnapshotResponse;
}(SpeakeasyBase));
export { PostCopySnapshotResponse };
