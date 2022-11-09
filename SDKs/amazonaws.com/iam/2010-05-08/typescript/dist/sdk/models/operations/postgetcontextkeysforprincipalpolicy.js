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
export var PostGetContextKeysForPrincipalPolicyActionEnum;
(function (PostGetContextKeysForPrincipalPolicyActionEnum) {
    PostGetContextKeysForPrincipalPolicyActionEnum["GetContextKeysForPrincipalPolicy"] = "GetContextKeysForPrincipalPolicy";
})(PostGetContextKeysForPrincipalPolicyActionEnum || (PostGetContextKeysForPrincipalPolicyActionEnum = {}));
export var PostGetContextKeysForPrincipalPolicyVersionEnum;
(function (PostGetContextKeysForPrincipalPolicyVersionEnum) {
    PostGetContextKeysForPrincipalPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostGetContextKeysForPrincipalPolicyVersionEnum || (PostGetContextKeysForPrincipalPolicyVersionEnum = {}));
var PostGetContextKeysForPrincipalPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostGetContextKeysForPrincipalPolicyQueryParams, _super);
    function PostGetContextKeysForPrincipalPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetContextKeysForPrincipalPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetContextKeysForPrincipalPolicyQueryParams.prototype, "version", void 0);
    return PostGetContextKeysForPrincipalPolicyQueryParams;
}(SpeakeasyBase));
export { PostGetContextKeysForPrincipalPolicyQueryParams };
var PostGetContextKeysForPrincipalPolicyHeaders = /** @class */ (function (_super) {
    __extends(PostGetContextKeysForPrincipalPolicyHeaders, _super);
    function PostGetContextKeysForPrincipalPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetContextKeysForPrincipalPolicyHeaders;
}(SpeakeasyBase));
export { PostGetContextKeysForPrincipalPolicyHeaders };
var PostGetContextKeysForPrincipalPolicyRequest = /** @class */ (function (_super) {
    __extends(PostGetContextKeysForPrincipalPolicyRequest, _super);
    function PostGetContextKeysForPrincipalPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetContextKeysForPrincipalPolicyQueryParams)
    ], PostGetContextKeysForPrincipalPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetContextKeysForPrincipalPolicyHeaders)
    ], PostGetContextKeysForPrincipalPolicyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetContextKeysForPrincipalPolicyRequest.prototype, "request", void 0);
    return PostGetContextKeysForPrincipalPolicyRequest;
}(SpeakeasyBase));
export { PostGetContextKeysForPrincipalPolicyRequest };
var PostGetContextKeysForPrincipalPolicyResponse = /** @class */ (function (_super) {
    __extends(PostGetContextKeysForPrincipalPolicyResponse, _super);
    function PostGetContextKeysForPrincipalPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetContextKeysForPrincipalPolicyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostGetContextKeysForPrincipalPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostGetContextKeysForPrincipalPolicyResponse.prototype, "statusCode", void 0);
    return PostGetContextKeysForPrincipalPolicyResponse;
}(SpeakeasyBase));
export { PostGetContextKeysForPrincipalPolicyResponse };
