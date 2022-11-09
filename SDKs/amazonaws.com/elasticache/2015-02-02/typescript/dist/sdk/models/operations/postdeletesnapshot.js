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
export var PostDeleteSnapshotActionEnum;
(function (PostDeleteSnapshotActionEnum) {
    PostDeleteSnapshotActionEnum["DeleteSnapshot"] = "DeleteSnapshot";
})(PostDeleteSnapshotActionEnum || (PostDeleteSnapshotActionEnum = {}));
export var PostDeleteSnapshotVersionEnum;
(function (PostDeleteSnapshotVersionEnum) {
    PostDeleteSnapshotVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostDeleteSnapshotVersionEnum || (PostDeleteSnapshotVersionEnum = {}));
var PostDeleteSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteSnapshotQueryParams, _super);
    function PostDeleteSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotQueryParams.prototype, "version", void 0);
    return PostDeleteSnapshotQueryParams;
}(SpeakeasyBase));
export { PostDeleteSnapshotQueryParams };
var PostDeleteSnapshotHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteSnapshotHeaders, _super);
    function PostDeleteSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteSnapshotHeaders;
}(SpeakeasyBase));
export { PostDeleteSnapshotHeaders };
var PostDeleteSnapshotRequest = /** @class */ (function (_super) {
    __extends(PostDeleteSnapshotRequest, _super);
    function PostDeleteSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteSnapshotQueryParams)
    ], PostDeleteSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteSnapshotHeaders)
    ], PostDeleteSnapshotRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteSnapshotRequest.prototype, "request", void 0);
    return PostDeleteSnapshotRequest;
}(SpeakeasyBase));
export { PostDeleteSnapshotRequest };
var PostDeleteSnapshotResponse = /** @class */ (function (_super) {
    __extends(PostDeleteSnapshotResponse, _super);
    function PostDeleteSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteSnapshotResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteSnapshotResponse.prototype, "statusCode", void 0);
    return PostDeleteSnapshotResponse;
}(SpeakeasyBase));
export { PostDeleteSnapshotResponse };
