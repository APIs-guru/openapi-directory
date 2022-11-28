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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var PostDeleteRolePermissionsBoundaryActionEnum;
(function (PostDeleteRolePermissionsBoundaryActionEnum) {
    PostDeleteRolePermissionsBoundaryActionEnum["DeleteRolePermissionsBoundary"] = "DeleteRolePermissionsBoundary";
})(PostDeleteRolePermissionsBoundaryActionEnum || (PostDeleteRolePermissionsBoundaryActionEnum = {}));
export var PostDeleteRolePermissionsBoundaryVersionEnum;
(function (PostDeleteRolePermissionsBoundaryVersionEnum) {
    PostDeleteRolePermissionsBoundaryVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDeleteRolePermissionsBoundaryVersionEnum || (PostDeleteRolePermissionsBoundaryVersionEnum = {}));
var PostDeleteRolePermissionsBoundaryQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteRolePermissionsBoundaryQueryParams, _super);
    function PostDeleteRolePermissionsBoundaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteRolePermissionsBoundaryQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteRolePermissionsBoundaryQueryParams.prototype, "version", void 0);
    return PostDeleteRolePermissionsBoundaryQueryParams;
}(SpeakeasyBase));
export { PostDeleteRolePermissionsBoundaryQueryParams };
var PostDeleteRolePermissionsBoundaryHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteRolePermissionsBoundaryHeaders, _super);
    function PostDeleteRolePermissionsBoundaryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteRolePermissionsBoundaryHeaders;
}(SpeakeasyBase));
export { PostDeleteRolePermissionsBoundaryHeaders };
var PostDeleteRolePermissionsBoundaryRequest = /** @class */ (function (_super) {
    __extends(PostDeleteRolePermissionsBoundaryRequest, _super);
    function PostDeleteRolePermissionsBoundaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteRolePermissionsBoundaryQueryParams)
    ], PostDeleteRolePermissionsBoundaryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteRolePermissionsBoundaryHeaders)
    ], PostDeleteRolePermissionsBoundaryRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteRolePermissionsBoundaryRequest.prototype, "request", void 0);
    return PostDeleteRolePermissionsBoundaryRequest;
}(SpeakeasyBase));
export { PostDeleteRolePermissionsBoundaryRequest };
var PostDeleteRolePermissionsBoundaryResponse = /** @class */ (function (_super) {
    __extends(PostDeleteRolePermissionsBoundaryResponse, _super);
    function PostDeleteRolePermissionsBoundaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteRolePermissionsBoundaryResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeleteRolePermissionsBoundaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeleteRolePermissionsBoundaryResponse.prototype, "statusCode", void 0);
    return PostDeleteRolePermissionsBoundaryResponse;
}(SpeakeasyBase));
export { PostDeleteRolePermissionsBoundaryResponse };
