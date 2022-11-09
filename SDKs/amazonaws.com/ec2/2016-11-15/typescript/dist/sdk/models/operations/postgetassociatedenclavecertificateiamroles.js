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
export var PostGetAssociatedEnclaveCertificateIamRolesActionEnum;
(function (PostGetAssociatedEnclaveCertificateIamRolesActionEnum) {
    PostGetAssociatedEnclaveCertificateIamRolesActionEnum["GetAssociatedEnclaveCertificateIamRoles"] = "GetAssociatedEnclaveCertificateIamRoles";
})(PostGetAssociatedEnclaveCertificateIamRolesActionEnum || (PostGetAssociatedEnclaveCertificateIamRolesActionEnum = {}));
export var PostGetAssociatedEnclaveCertificateIamRolesVersionEnum;
(function (PostGetAssociatedEnclaveCertificateIamRolesVersionEnum) {
    PostGetAssociatedEnclaveCertificateIamRolesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostGetAssociatedEnclaveCertificateIamRolesVersionEnum || (PostGetAssociatedEnclaveCertificateIamRolesVersionEnum = {}));
var PostGetAssociatedEnclaveCertificateIamRolesQueryParams = /** @class */ (function (_super) {
    __extends(PostGetAssociatedEnclaveCertificateIamRolesQueryParams, _super);
    function PostGetAssociatedEnclaveCertificateIamRolesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetAssociatedEnclaveCertificateIamRolesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetAssociatedEnclaveCertificateIamRolesQueryParams.prototype, "version", void 0);
    return PostGetAssociatedEnclaveCertificateIamRolesQueryParams;
}(SpeakeasyBase));
export { PostGetAssociatedEnclaveCertificateIamRolesQueryParams };
var PostGetAssociatedEnclaveCertificateIamRolesHeaders = /** @class */ (function (_super) {
    __extends(PostGetAssociatedEnclaveCertificateIamRolesHeaders, _super);
    function PostGetAssociatedEnclaveCertificateIamRolesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetAssociatedEnclaveCertificateIamRolesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetAssociatedEnclaveCertificateIamRolesHeaders;
}(SpeakeasyBase));
export { PostGetAssociatedEnclaveCertificateIamRolesHeaders };
var PostGetAssociatedEnclaveCertificateIamRolesRequest = /** @class */ (function (_super) {
    __extends(PostGetAssociatedEnclaveCertificateIamRolesRequest, _super);
    function PostGetAssociatedEnclaveCertificateIamRolesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetAssociatedEnclaveCertificateIamRolesQueryParams)
    ], PostGetAssociatedEnclaveCertificateIamRolesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetAssociatedEnclaveCertificateIamRolesHeaders)
    ], PostGetAssociatedEnclaveCertificateIamRolesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetAssociatedEnclaveCertificateIamRolesRequest.prototype, "request", void 0);
    return PostGetAssociatedEnclaveCertificateIamRolesRequest;
}(SpeakeasyBase));
export { PostGetAssociatedEnclaveCertificateIamRolesRequest };
var PostGetAssociatedEnclaveCertificateIamRolesResponse = /** @class */ (function (_super) {
    __extends(PostGetAssociatedEnclaveCertificateIamRolesResponse, _super);
    function PostGetAssociatedEnclaveCertificateIamRolesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetAssociatedEnclaveCertificateIamRolesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostGetAssociatedEnclaveCertificateIamRolesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostGetAssociatedEnclaveCertificateIamRolesResponse.prototype, "statusCode", void 0);
    return PostGetAssociatedEnclaveCertificateIamRolesResponse;
}(SpeakeasyBase));
export { PostGetAssociatedEnclaveCertificateIamRolesResponse };
