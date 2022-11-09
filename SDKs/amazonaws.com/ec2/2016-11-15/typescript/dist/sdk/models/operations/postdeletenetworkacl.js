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
export var PostDeleteNetworkAclActionEnum;
(function (PostDeleteNetworkAclActionEnum) {
    PostDeleteNetworkAclActionEnum["DeleteNetworkAcl"] = "DeleteNetworkAcl";
})(PostDeleteNetworkAclActionEnum || (PostDeleteNetworkAclActionEnum = {}));
export var PostDeleteNetworkAclVersionEnum;
(function (PostDeleteNetworkAclVersionEnum) {
    PostDeleteNetworkAclVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteNetworkAclVersionEnum || (PostDeleteNetworkAclVersionEnum = {}));
var PostDeleteNetworkAclQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteNetworkAclQueryParams, _super);
    function PostDeleteNetworkAclQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkAclQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkAclQueryParams.prototype, "version", void 0);
    return PostDeleteNetworkAclQueryParams;
}(SpeakeasyBase));
export { PostDeleteNetworkAclQueryParams };
var PostDeleteNetworkAclHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteNetworkAclHeaders, _super);
    function PostDeleteNetworkAclHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkAclHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkAclHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkAclHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkAclHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkAclHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkAclHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkAclHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteNetworkAclHeaders;
}(SpeakeasyBase));
export { PostDeleteNetworkAclHeaders };
var PostDeleteNetworkAclRequest = /** @class */ (function (_super) {
    __extends(PostDeleteNetworkAclRequest, _super);
    function PostDeleteNetworkAclRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteNetworkAclQueryParams)
    ], PostDeleteNetworkAclRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteNetworkAclHeaders)
    ], PostDeleteNetworkAclRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteNetworkAclRequest.prototype, "request", void 0);
    return PostDeleteNetworkAclRequest;
}(SpeakeasyBase));
export { PostDeleteNetworkAclRequest };
var PostDeleteNetworkAclResponse = /** @class */ (function (_super) {
    __extends(PostDeleteNetworkAclResponse, _super);
    function PostDeleteNetworkAclResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteNetworkAclResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteNetworkAclResponse.prototype, "statusCode", void 0);
    return PostDeleteNetworkAclResponse;
}(SpeakeasyBase));
export { PostDeleteNetworkAclResponse };
