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
export var PostCreateUserGroupActionEnum;
(function (PostCreateUserGroupActionEnum) {
    PostCreateUserGroupActionEnum["CreateUserGroup"] = "CreateUserGroup";
})(PostCreateUserGroupActionEnum || (PostCreateUserGroupActionEnum = {}));
export var PostCreateUserGroupVersionEnum;
(function (PostCreateUserGroupVersionEnum) {
    PostCreateUserGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostCreateUserGroupVersionEnum || (PostCreateUserGroupVersionEnum = {}));
var PostCreateUserGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateUserGroupQueryParams, _super);
    function PostCreateUserGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateUserGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateUserGroupQueryParams.prototype, "version", void 0);
    return PostCreateUserGroupQueryParams;
}(SpeakeasyBase));
export { PostCreateUserGroupQueryParams };
var PostCreateUserGroupHeaders = /** @class */ (function (_super) {
    __extends(PostCreateUserGroupHeaders, _super);
    function PostCreateUserGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateUserGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateUserGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateUserGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateUserGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateUserGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateUserGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateUserGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateUserGroupHeaders;
}(SpeakeasyBase));
export { PostCreateUserGroupHeaders };
var PostCreateUserGroupRequest = /** @class */ (function (_super) {
    __extends(PostCreateUserGroupRequest, _super);
    function PostCreateUserGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateUserGroupQueryParams)
    ], PostCreateUserGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateUserGroupHeaders)
    ], PostCreateUserGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateUserGroupRequest.prototype, "request", void 0);
    return PostCreateUserGroupRequest;
}(SpeakeasyBase));
export { PostCreateUserGroupRequest };
var PostCreateUserGroupResponse = /** @class */ (function (_super) {
    __extends(PostCreateUserGroupResponse, _super);
    function PostCreateUserGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateUserGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateUserGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateUserGroupResponse.prototype, "statusCode", void 0);
    return PostCreateUserGroupResponse;
}(SpeakeasyBase));
export { PostCreateUserGroupResponse };
