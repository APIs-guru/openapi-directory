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
export var PostListInstanceProfilesForRoleActionEnum;
(function (PostListInstanceProfilesForRoleActionEnum) {
    PostListInstanceProfilesForRoleActionEnum["ListInstanceProfilesForRole"] = "ListInstanceProfilesForRole";
})(PostListInstanceProfilesForRoleActionEnum || (PostListInstanceProfilesForRoleActionEnum = {}));
export var PostListInstanceProfilesForRoleVersionEnum;
(function (PostListInstanceProfilesForRoleVersionEnum) {
    PostListInstanceProfilesForRoleVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListInstanceProfilesForRoleVersionEnum || (PostListInstanceProfilesForRoleVersionEnum = {}));
var PostListInstanceProfilesForRoleQueryParams = /** @class */ (function (_super) {
    __extends(PostListInstanceProfilesForRoleQueryParams, _super);
    function PostListInstanceProfilesForRoleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesForRoleQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesForRoleQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesForRoleQueryParams.prototype, "maxItems", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesForRoleQueryParams.prototype, "version", void 0);
    return PostListInstanceProfilesForRoleQueryParams;
}(SpeakeasyBase));
export { PostListInstanceProfilesForRoleQueryParams };
var PostListInstanceProfilesForRoleHeaders = /** @class */ (function (_super) {
    __extends(PostListInstanceProfilesForRoleHeaders, _super);
    function PostListInstanceProfilesForRoleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesForRoleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesForRoleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesForRoleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesForRoleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesForRoleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesForRoleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListInstanceProfilesForRoleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListInstanceProfilesForRoleHeaders;
}(SpeakeasyBase));
export { PostListInstanceProfilesForRoleHeaders };
var PostListInstanceProfilesForRoleRequest = /** @class */ (function (_super) {
    __extends(PostListInstanceProfilesForRoleRequest, _super);
    function PostListInstanceProfilesForRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostListInstanceProfilesForRoleQueryParams)
    ], PostListInstanceProfilesForRoleRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostListInstanceProfilesForRoleHeaders)
    ], PostListInstanceProfilesForRoleRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListInstanceProfilesForRoleRequest.prototype, "request", void 0);
    return PostListInstanceProfilesForRoleRequest;
}(SpeakeasyBase));
export { PostListInstanceProfilesForRoleRequest };
var PostListInstanceProfilesForRoleResponse = /** @class */ (function (_super) {
    __extends(PostListInstanceProfilesForRoleResponse, _super);
    function PostListInstanceProfilesForRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostListInstanceProfilesForRoleResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostListInstanceProfilesForRoleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostListInstanceProfilesForRoleResponse.prototype, "statusCode", void 0);
    return PostListInstanceProfilesForRoleResponse;
}(SpeakeasyBase));
export { PostListInstanceProfilesForRoleResponse };
