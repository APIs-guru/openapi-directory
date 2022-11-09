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
export var PostCreateStorageLocationActionEnum;
(function (PostCreateStorageLocationActionEnum) {
    PostCreateStorageLocationActionEnum["CreateStorageLocation"] = "CreateStorageLocation";
})(PostCreateStorageLocationActionEnum || (PostCreateStorageLocationActionEnum = {}));
export var PostCreateStorageLocationVersionEnum;
(function (PostCreateStorageLocationVersionEnum) {
    PostCreateStorageLocationVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostCreateStorageLocationVersionEnum || (PostCreateStorageLocationVersionEnum = {}));
var PostCreateStorageLocationQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateStorageLocationQueryParams, _super);
    function PostCreateStorageLocationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateStorageLocationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateStorageLocationQueryParams.prototype, "version", void 0);
    return PostCreateStorageLocationQueryParams;
}(SpeakeasyBase));
export { PostCreateStorageLocationQueryParams };
var PostCreateStorageLocationHeaders = /** @class */ (function (_super) {
    __extends(PostCreateStorageLocationHeaders, _super);
    function PostCreateStorageLocationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateStorageLocationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateStorageLocationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateStorageLocationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateStorageLocationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateStorageLocationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateStorageLocationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateStorageLocationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateStorageLocationHeaders;
}(SpeakeasyBase));
export { PostCreateStorageLocationHeaders };
var PostCreateStorageLocationRequest = /** @class */ (function (_super) {
    __extends(PostCreateStorageLocationRequest, _super);
    function PostCreateStorageLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateStorageLocationQueryParams)
    ], PostCreateStorageLocationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateStorageLocationHeaders)
    ], PostCreateStorageLocationRequest.prototype, "headers", void 0);
    return PostCreateStorageLocationRequest;
}(SpeakeasyBase));
export { PostCreateStorageLocationRequest };
var PostCreateStorageLocationResponse = /** @class */ (function (_super) {
    __extends(PostCreateStorageLocationResponse, _super);
    function PostCreateStorageLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateStorageLocationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateStorageLocationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateStorageLocationResponse.prototype, "statusCode", void 0);
    return PostCreateStorageLocationResponse;
}(SpeakeasyBase));
export { PostCreateStorageLocationResponse };
