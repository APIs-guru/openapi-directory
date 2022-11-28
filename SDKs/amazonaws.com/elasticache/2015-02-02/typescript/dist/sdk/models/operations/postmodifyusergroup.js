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
export var PostModifyUserGroupActionEnum;
(function (PostModifyUserGroupActionEnum) {
    PostModifyUserGroupActionEnum["ModifyUserGroup"] = "ModifyUserGroup";
})(PostModifyUserGroupActionEnum || (PostModifyUserGroupActionEnum = {}));
export var PostModifyUserGroupVersionEnum;
(function (PostModifyUserGroupVersionEnum) {
    PostModifyUserGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostModifyUserGroupVersionEnum || (PostModifyUserGroupVersionEnum = {}));
var PostModifyUserGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyUserGroupQueryParams, _super);
    function PostModifyUserGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyUserGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyUserGroupQueryParams.prototype, "version", void 0);
    return PostModifyUserGroupQueryParams;
}(SpeakeasyBase));
export { PostModifyUserGroupQueryParams };
var PostModifyUserGroupHeaders = /** @class */ (function (_super) {
    __extends(PostModifyUserGroupHeaders, _super);
    function PostModifyUserGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyUserGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyUserGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyUserGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyUserGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyUserGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyUserGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyUserGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyUserGroupHeaders;
}(SpeakeasyBase));
export { PostModifyUserGroupHeaders };
var PostModifyUserGroupRequest = /** @class */ (function (_super) {
    __extends(PostModifyUserGroupRequest, _super);
    function PostModifyUserGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyUserGroupQueryParams)
    ], PostModifyUserGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyUserGroupHeaders)
    ], PostModifyUserGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyUserGroupRequest.prototype, "request", void 0);
    return PostModifyUserGroupRequest;
}(SpeakeasyBase));
export { PostModifyUserGroupRequest };
var PostModifyUserGroupResponse = /** @class */ (function (_super) {
    __extends(PostModifyUserGroupResponse, _super);
    function PostModifyUserGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyUserGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostModifyUserGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostModifyUserGroupResponse.prototype, "statusCode", void 0);
    return PostModifyUserGroupResponse;
}(SpeakeasyBase));
export { PostModifyUserGroupResponse };
