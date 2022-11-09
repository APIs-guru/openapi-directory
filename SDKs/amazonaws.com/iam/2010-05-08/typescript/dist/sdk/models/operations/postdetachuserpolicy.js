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
export var PostDetachUserPolicyActionEnum;
(function (PostDetachUserPolicyActionEnum) {
    PostDetachUserPolicyActionEnum["DetachUserPolicy"] = "DetachUserPolicy";
})(PostDetachUserPolicyActionEnum || (PostDetachUserPolicyActionEnum = {}));
export var PostDetachUserPolicyVersionEnum;
(function (PostDetachUserPolicyVersionEnum) {
    PostDetachUserPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDetachUserPolicyVersionEnum || (PostDetachUserPolicyVersionEnum = {}));
var PostDetachUserPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostDetachUserPolicyQueryParams, _super);
    function PostDetachUserPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDetachUserPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDetachUserPolicyQueryParams.prototype, "version", void 0);
    return PostDetachUserPolicyQueryParams;
}(SpeakeasyBase));
export { PostDetachUserPolicyQueryParams };
var PostDetachUserPolicyHeaders = /** @class */ (function (_super) {
    __extends(PostDetachUserPolicyHeaders, _super);
    function PostDetachUserPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDetachUserPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDetachUserPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDetachUserPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDetachUserPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDetachUserPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDetachUserPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDetachUserPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDetachUserPolicyHeaders;
}(SpeakeasyBase));
export { PostDetachUserPolicyHeaders };
var PostDetachUserPolicyRequest = /** @class */ (function (_super) {
    __extends(PostDetachUserPolicyRequest, _super);
    function PostDetachUserPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDetachUserPolicyQueryParams)
    ], PostDetachUserPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDetachUserPolicyHeaders)
    ], PostDetachUserPolicyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDetachUserPolicyRequest.prototype, "request", void 0);
    return PostDetachUserPolicyRequest;
}(SpeakeasyBase));
export { PostDetachUserPolicyRequest };
var PostDetachUserPolicyResponse = /** @class */ (function (_super) {
    __extends(PostDetachUserPolicyResponse, _super);
    function PostDetachUserPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDetachUserPolicyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDetachUserPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDetachUserPolicyResponse.prototype, "statusCode", void 0);
    return PostDetachUserPolicyResponse;
}(SpeakeasyBase));
export { PostDetachUserPolicyResponse };
