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
export var PostDeleteGroupPolicyActionEnum;
(function (PostDeleteGroupPolicyActionEnum) {
    PostDeleteGroupPolicyActionEnum["DeleteGroupPolicy"] = "DeleteGroupPolicy";
})(PostDeleteGroupPolicyActionEnum || (PostDeleteGroupPolicyActionEnum = {}));
export var PostDeleteGroupPolicyVersionEnum;
(function (PostDeleteGroupPolicyVersionEnum) {
    PostDeleteGroupPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDeleteGroupPolicyVersionEnum || (PostDeleteGroupPolicyVersionEnum = {}));
var PostDeleteGroupPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteGroupPolicyQueryParams, _super);
    function PostDeleteGroupPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteGroupPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteGroupPolicyQueryParams.prototype, "version", void 0);
    return PostDeleteGroupPolicyQueryParams;
}(SpeakeasyBase));
export { PostDeleteGroupPolicyQueryParams };
var PostDeleteGroupPolicyHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteGroupPolicyHeaders, _super);
    function PostDeleteGroupPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteGroupPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteGroupPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteGroupPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteGroupPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteGroupPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteGroupPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteGroupPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteGroupPolicyHeaders;
}(SpeakeasyBase));
export { PostDeleteGroupPolicyHeaders };
var PostDeleteGroupPolicyRequest = /** @class */ (function (_super) {
    __extends(PostDeleteGroupPolicyRequest, _super);
    function PostDeleteGroupPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteGroupPolicyQueryParams)
    ], PostDeleteGroupPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteGroupPolicyHeaders)
    ], PostDeleteGroupPolicyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteGroupPolicyRequest.prototype, "request", void 0);
    return PostDeleteGroupPolicyRequest;
}(SpeakeasyBase));
export { PostDeleteGroupPolicyRequest };
var PostDeleteGroupPolicyResponse = /** @class */ (function (_super) {
    __extends(PostDeleteGroupPolicyResponse, _super);
    function PostDeleteGroupPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteGroupPolicyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteGroupPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteGroupPolicyResponse.prototype, "statusCode", void 0);
    return PostDeleteGroupPolicyResponse;
}(SpeakeasyBase));
export { PostDeleteGroupPolicyResponse };
