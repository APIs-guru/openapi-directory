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
export var PostCreateCacheParameterGroupActionEnum;
(function (PostCreateCacheParameterGroupActionEnum) {
    PostCreateCacheParameterGroupActionEnum["CreateCacheParameterGroup"] = "CreateCacheParameterGroup";
})(PostCreateCacheParameterGroupActionEnum || (PostCreateCacheParameterGroupActionEnum = {}));
export var PostCreateCacheParameterGroupVersionEnum;
(function (PostCreateCacheParameterGroupVersionEnum) {
    PostCreateCacheParameterGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostCreateCacheParameterGroupVersionEnum || (PostCreateCacheParameterGroupVersionEnum = {}));
var PostCreateCacheParameterGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateCacheParameterGroupQueryParams, _super);
    function PostCreateCacheParameterGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateCacheParameterGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateCacheParameterGroupQueryParams.prototype, "version", void 0);
    return PostCreateCacheParameterGroupQueryParams;
}(SpeakeasyBase));
export { PostCreateCacheParameterGroupQueryParams };
var PostCreateCacheParameterGroupHeaders = /** @class */ (function (_super) {
    __extends(PostCreateCacheParameterGroupHeaders, _super);
    function PostCreateCacheParameterGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateCacheParameterGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateCacheParameterGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateCacheParameterGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateCacheParameterGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateCacheParameterGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateCacheParameterGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateCacheParameterGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateCacheParameterGroupHeaders;
}(SpeakeasyBase));
export { PostCreateCacheParameterGroupHeaders };
var PostCreateCacheParameterGroupRequest = /** @class */ (function (_super) {
    __extends(PostCreateCacheParameterGroupRequest, _super);
    function PostCreateCacheParameterGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateCacheParameterGroupQueryParams)
    ], PostCreateCacheParameterGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateCacheParameterGroupHeaders)
    ], PostCreateCacheParameterGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateCacheParameterGroupRequest.prototype, "request", void 0);
    return PostCreateCacheParameterGroupRequest;
}(SpeakeasyBase));
export { PostCreateCacheParameterGroupRequest };
var PostCreateCacheParameterGroupResponse = /** @class */ (function (_super) {
    __extends(PostCreateCacheParameterGroupResponse, _super);
    function PostCreateCacheParameterGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateCacheParameterGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateCacheParameterGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateCacheParameterGroupResponse.prototype, "statusCode", void 0);
    return PostCreateCacheParameterGroupResponse;
}(SpeakeasyBase));
export { PostCreateCacheParameterGroupResponse };
