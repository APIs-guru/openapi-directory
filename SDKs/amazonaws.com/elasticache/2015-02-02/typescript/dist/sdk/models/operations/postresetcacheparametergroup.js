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
export var PostResetCacheParameterGroupActionEnum;
(function (PostResetCacheParameterGroupActionEnum) {
    PostResetCacheParameterGroupActionEnum["ResetCacheParameterGroup"] = "ResetCacheParameterGroup";
})(PostResetCacheParameterGroupActionEnum || (PostResetCacheParameterGroupActionEnum = {}));
export var PostResetCacheParameterGroupVersionEnum;
(function (PostResetCacheParameterGroupVersionEnum) {
    PostResetCacheParameterGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostResetCacheParameterGroupVersionEnum || (PostResetCacheParameterGroupVersionEnum = {}));
var PostResetCacheParameterGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostResetCacheParameterGroupQueryParams, _super);
    function PostResetCacheParameterGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostResetCacheParameterGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostResetCacheParameterGroupQueryParams.prototype, "version", void 0);
    return PostResetCacheParameterGroupQueryParams;
}(SpeakeasyBase));
export { PostResetCacheParameterGroupQueryParams };
var PostResetCacheParameterGroupHeaders = /** @class */ (function (_super) {
    __extends(PostResetCacheParameterGroupHeaders, _super);
    function PostResetCacheParameterGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostResetCacheParameterGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostResetCacheParameterGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostResetCacheParameterGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostResetCacheParameterGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostResetCacheParameterGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostResetCacheParameterGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostResetCacheParameterGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostResetCacheParameterGroupHeaders;
}(SpeakeasyBase));
export { PostResetCacheParameterGroupHeaders };
var PostResetCacheParameterGroupRequest = /** @class */ (function (_super) {
    __extends(PostResetCacheParameterGroupRequest, _super);
    function PostResetCacheParameterGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostResetCacheParameterGroupQueryParams)
    ], PostResetCacheParameterGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostResetCacheParameterGroupHeaders)
    ], PostResetCacheParameterGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostResetCacheParameterGroupRequest.prototype, "request", void 0);
    return PostResetCacheParameterGroupRequest;
}(SpeakeasyBase));
export { PostResetCacheParameterGroupRequest };
var PostResetCacheParameterGroupResponse = /** @class */ (function (_super) {
    __extends(PostResetCacheParameterGroupResponse, _super);
    function PostResetCacheParameterGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostResetCacheParameterGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostResetCacheParameterGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostResetCacheParameterGroupResponse.prototype, "statusCode", void 0);
    return PostResetCacheParameterGroupResponse;
}(SpeakeasyBase));
export { PostResetCacheParameterGroupResponse };
