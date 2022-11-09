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
export var PostModifyGlobalReplicationGroupActionEnum;
(function (PostModifyGlobalReplicationGroupActionEnum) {
    PostModifyGlobalReplicationGroupActionEnum["ModifyGlobalReplicationGroup"] = "ModifyGlobalReplicationGroup";
})(PostModifyGlobalReplicationGroupActionEnum || (PostModifyGlobalReplicationGroupActionEnum = {}));
export var PostModifyGlobalReplicationGroupVersionEnum;
(function (PostModifyGlobalReplicationGroupVersionEnum) {
    PostModifyGlobalReplicationGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostModifyGlobalReplicationGroupVersionEnum || (PostModifyGlobalReplicationGroupVersionEnum = {}));
var PostModifyGlobalReplicationGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyGlobalReplicationGroupQueryParams, _super);
    function PostModifyGlobalReplicationGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyGlobalReplicationGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyGlobalReplicationGroupQueryParams.prototype, "version", void 0);
    return PostModifyGlobalReplicationGroupQueryParams;
}(SpeakeasyBase));
export { PostModifyGlobalReplicationGroupQueryParams };
var PostModifyGlobalReplicationGroupHeaders = /** @class */ (function (_super) {
    __extends(PostModifyGlobalReplicationGroupHeaders, _super);
    function PostModifyGlobalReplicationGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyGlobalReplicationGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyGlobalReplicationGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyGlobalReplicationGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyGlobalReplicationGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyGlobalReplicationGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyGlobalReplicationGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyGlobalReplicationGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyGlobalReplicationGroupHeaders;
}(SpeakeasyBase));
export { PostModifyGlobalReplicationGroupHeaders };
var PostModifyGlobalReplicationGroupRequest = /** @class */ (function (_super) {
    __extends(PostModifyGlobalReplicationGroupRequest, _super);
    function PostModifyGlobalReplicationGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyGlobalReplicationGroupQueryParams)
    ], PostModifyGlobalReplicationGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyGlobalReplicationGroupHeaders)
    ], PostModifyGlobalReplicationGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyGlobalReplicationGroupRequest.prototype, "request", void 0);
    return PostModifyGlobalReplicationGroupRequest;
}(SpeakeasyBase));
export { PostModifyGlobalReplicationGroupRequest };
var PostModifyGlobalReplicationGroupResponse = /** @class */ (function (_super) {
    __extends(PostModifyGlobalReplicationGroupResponse, _super);
    function PostModifyGlobalReplicationGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyGlobalReplicationGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostModifyGlobalReplicationGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostModifyGlobalReplicationGroupResponse.prototype, "statusCode", void 0);
    return PostModifyGlobalReplicationGroupResponse;
}(SpeakeasyBase));
export { PostModifyGlobalReplicationGroupResponse };
