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
export var PostUpdateAccountPasswordPolicyActionEnum;
(function (PostUpdateAccountPasswordPolicyActionEnum) {
    PostUpdateAccountPasswordPolicyActionEnum["UpdateAccountPasswordPolicy"] = "UpdateAccountPasswordPolicy";
})(PostUpdateAccountPasswordPolicyActionEnum || (PostUpdateAccountPasswordPolicyActionEnum = {}));
export var PostUpdateAccountPasswordPolicyVersionEnum;
(function (PostUpdateAccountPasswordPolicyVersionEnum) {
    PostUpdateAccountPasswordPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostUpdateAccountPasswordPolicyVersionEnum || (PostUpdateAccountPasswordPolicyVersionEnum = {}));
var PostUpdateAccountPasswordPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateAccountPasswordPolicyQueryParams, _super);
    function PostUpdateAccountPasswordPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateAccountPasswordPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateAccountPasswordPolicyQueryParams.prototype, "version", void 0);
    return PostUpdateAccountPasswordPolicyQueryParams;
}(SpeakeasyBase));
export { PostUpdateAccountPasswordPolicyQueryParams };
var PostUpdateAccountPasswordPolicyHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateAccountPasswordPolicyHeaders, _super);
    function PostUpdateAccountPasswordPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateAccountPasswordPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateAccountPasswordPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateAccountPasswordPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateAccountPasswordPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateAccountPasswordPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateAccountPasswordPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateAccountPasswordPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateAccountPasswordPolicyHeaders;
}(SpeakeasyBase));
export { PostUpdateAccountPasswordPolicyHeaders };
var PostUpdateAccountPasswordPolicyRequest = /** @class */ (function (_super) {
    __extends(PostUpdateAccountPasswordPolicyRequest, _super);
    function PostUpdateAccountPasswordPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateAccountPasswordPolicyQueryParams)
    ], PostUpdateAccountPasswordPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateAccountPasswordPolicyHeaders)
    ], PostUpdateAccountPasswordPolicyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateAccountPasswordPolicyRequest.prototype, "request", void 0);
    return PostUpdateAccountPasswordPolicyRequest;
}(SpeakeasyBase));
export { PostUpdateAccountPasswordPolicyRequest };
var PostUpdateAccountPasswordPolicyResponse = /** @class */ (function (_super) {
    __extends(PostUpdateAccountPasswordPolicyResponse, _super);
    function PostUpdateAccountPasswordPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateAccountPasswordPolicyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUpdateAccountPasswordPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUpdateAccountPasswordPolicyResponse.prototype, "statusCode", void 0);
    return PostUpdateAccountPasswordPolicyResponse;
}(SpeakeasyBase));
export { PostUpdateAccountPasswordPolicyResponse };
