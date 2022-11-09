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
export var PostDeleteReplicationGroupActionEnum;
(function (PostDeleteReplicationGroupActionEnum) {
    PostDeleteReplicationGroupActionEnum["DeleteReplicationGroup"] = "DeleteReplicationGroup";
})(PostDeleteReplicationGroupActionEnum || (PostDeleteReplicationGroupActionEnum = {}));
export var PostDeleteReplicationGroupVersionEnum;
(function (PostDeleteReplicationGroupVersionEnum) {
    PostDeleteReplicationGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostDeleteReplicationGroupVersionEnum || (PostDeleteReplicationGroupVersionEnum = {}));
var PostDeleteReplicationGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteReplicationGroupQueryParams, _super);
    function PostDeleteReplicationGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteReplicationGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteReplicationGroupQueryParams.prototype, "version", void 0);
    return PostDeleteReplicationGroupQueryParams;
}(SpeakeasyBase));
export { PostDeleteReplicationGroupQueryParams };
var PostDeleteReplicationGroupHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteReplicationGroupHeaders, _super);
    function PostDeleteReplicationGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteReplicationGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteReplicationGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteReplicationGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteReplicationGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteReplicationGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteReplicationGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteReplicationGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteReplicationGroupHeaders;
}(SpeakeasyBase));
export { PostDeleteReplicationGroupHeaders };
var PostDeleteReplicationGroupRequest = /** @class */ (function (_super) {
    __extends(PostDeleteReplicationGroupRequest, _super);
    function PostDeleteReplicationGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteReplicationGroupQueryParams)
    ], PostDeleteReplicationGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteReplicationGroupHeaders)
    ], PostDeleteReplicationGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteReplicationGroupRequest.prototype, "request", void 0);
    return PostDeleteReplicationGroupRequest;
}(SpeakeasyBase));
export { PostDeleteReplicationGroupRequest };
var PostDeleteReplicationGroupResponse = /** @class */ (function (_super) {
    __extends(PostDeleteReplicationGroupResponse, _super);
    function PostDeleteReplicationGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteReplicationGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteReplicationGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteReplicationGroupResponse.prototype, "statusCode", void 0);
    return PostDeleteReplicationGroupResponse;
}(SpeakeasyBase));
export { PostDeleteReplicationGroupResponse };
