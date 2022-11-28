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
export var PostUpdateRoleActionEnum;
(function (PostUpdateRoleActionEnum) {
    PostUpdateRoleActionEnum["UpdateRole"] = "UpdateRole";
})(PostUpdateRoleActionEnum || (PostUpdateRoleActionEnum = {}));
export var PostUpdateRoleVersionEnum;
(function (PostUpdateRoleVersionEnum) {
    PostUpdateRoleVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostUpdateRoleVersionEnum || (PostUpdateRoleVersionEnum = {}));
var PostUpdateRoleQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateRoleQueryParams, _super);
    function PostUpdateRoleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateRoleQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateRoleQueryParams.prototype, "version", void 0);
    return PostUpdateRoleQueryParams;
}(SpeakeasyBase));
export { PostUpdateRoleQueryParams };
var PostUpdateRoleHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateRoleHeaders, _super);
    function PostUpdateRoleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateRoleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateRoleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateRoleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateRoleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateRoleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateRoleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateRoleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateRoleHeaders;
}(SpeakeasyBase));
export { PostUpdateRoleHeaders };
var PostUpdateRoleRequest = /** @class */ (function (_super) {
    __extends(PostUpdateRoleRequest, _super);
    function PostUpdateRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUpdateRoleQueryParams)
    ], PostUpdateRoleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUpdateRoleHeaders)
    ], PostUpdateRoleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateRoleRequest.prototype, "request", void 0);
    return PostUpdateRoleRequest;
}(SpeakeasyBase));
export { PostUpdateRoleRequest };
var PostUpdateRoleResponse = /** @class */ (function (_super) {
    __extends(PostUpdateRoleResponse, _super);
    function PostUpdateRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateRoleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUpdateRoleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUpdateRoleResponse.prototype, "statusCode", void 0);
    return PostUpdateRoleResponse;
}(SpeakeasyBase));
export { PostUpdateRoleResponse };
