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
export var PostModifyCacheSubnetGroupActionEnum;
(function (PostModifyCacheSubnetGroupActionEnum) {
    PostModifyCacheSubnetGroupActionEnum["ModifyCacheSubnetGroup"] = "ModifyCacheSubnetGroup";
})(PostModifyCacheSubnetGroupActionEnum || (PostModifyCacheSubnetGroupActionEnum = {}));
export var PostModifyCacheSubnetGroupVersionEnum;
(function (PostModifyCacheSubnetGroupVersionEnum) {
    PostModifyCacheSubnetGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostModifyCacheSubnetGroupVersionEnum || (PostModifyCacheSubnetGroupVersionEnum = {}));
var PostModifyCacheSubnetGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyCacheSubnetGroupQueryParams, _super);
    function PostModifyCacheSubnetGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyCacheSubnetGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyCacheSubnetGroupQueryParams.prototype, "version", void 0);
    return PostModifyCacheSubnetGroupQueryParams;
}(SpeakeasyBase));
export { PostModifyCacheSubnetGroupQueryParams };
var PostModifyCacheSubnetGroupHeaders = /** @class */ (function (_super) {
    __extends(PostModifyCacheSubnetGroupHeaders, _super);
    function PostModifyCacheSubnetGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyCacheSubnetGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyCacheSubnetGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyCacheSubnetGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyCacheSubnetGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyCacheSubnetGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyCacheSubnetGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyCacheSubnetGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyCacheSubnetGroupHeaders;
}(SpeakeasyBase));
export { PostModifyCacheSubnetGroupHeaders };
var PostModifyCacheSubnetGroupRequest = /** @class */ (function (_super) {
    __extends(PostModifyCacheSubnetGroupRequest, _super);
    function PostModifyCacheSubnetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyCacheSubnetGroupQueryParams)
    ], PostModifyCacheSubnetGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyCacheSubnetGroupHeaders)
    ], PostModifyCacheSubnetGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyCacheSubnetGroupRequest.prototype, "request", void 0);
    return PostModifyCacheSubnetGroupRequest;
}(SpeakeasyBase));
export { PostModifyCacheSubnetGroupRequest };
var PostModifyCacheSubnetGroupResponse = /** @class */ (function (_super) {
    __extends(PostModifyCacheSubnetGroupResponse, _super);
    function PostModifyCacheSubnetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyCacheSubnetGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostModifyCacheSubnetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostModifyCacheSubnetGroupResponse.prototype, "statusCode", void 0);
    return PostModifyCacheSubnetGroupResponse;
}(SpeakeasyBase));
export { PostModifyCacheSubnetGroupResponse };
