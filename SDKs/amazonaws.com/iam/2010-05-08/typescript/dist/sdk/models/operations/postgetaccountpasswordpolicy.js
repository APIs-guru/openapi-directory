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
export var PostGetAccountPasswordPolicyActionEnum;
(function (PostGetAccountPasswordPolicyActionEnum) {
    PostGetAccountPasswordPolicyActionEnum["GetAccountPasswordPolicy"] = "GetAccountPasswordPolicy";
})(PostGetAccountPasswordPolicyActionEnum || (PostGetAccountPasswordPolicyActionEnum = {}));
export var PostGetAccountPasswordPolicyVersionEnum;
(function (PostGetAccountPasswordPolicyVersionEnum) {
    PostGetAccountPasswordPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostGetAccountPasswordPolicyVersionEnum || (PostGetAccountPasswordPolicyVersionEnum = {}));
var PostGetAccountPasswordPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostGetAccountPasswordPolicyQueryParams, _super);
    function PostGetAccountPasswordPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetAccountPasswordPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetAccountPasswordPolicyQueryParams.prototype, "version", void 0);
    return PostGetAccountPasswordPolicyQueryParams;
}(SpeakeasyBase));
export { PostGetAccountPasswordPolicyQueryParams };
var PostGetAccountPasswordPolicyHeaders = /** @class */ (function (_super) {
    __extends(PostGetAccountPasswordPolicyHeaders, _super);
    function PostGetAccountPasswordPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetAccountPasswordPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetAccountPasswordPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetAccountPasswordPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetAccountPasswordPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetAccountPasswordPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetAccountPasswordPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetAccountPasswordPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetAccountPasswordPolicyHeaders;
}(SpeakeasyBase));
export { PostGetAccountPasswordPolicyHeaders };
var PostGetAccountPasswordPolicyRequest = /** @class */ (function (_super) {
    __extends(PostGetAccountPasswordPolicyRequest, _super);
    function PostGetAccountPasswordPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetAccountPasswordPolicyQueryParams)
    ], PostGetAccountPasswordPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetAccountPasswordPolicyHeaders)
    ], PostGetAccountPasswordPolicyRequest.prototype, "headers", void 0);
    return PostGetAccountPasswordPolicyRequest;
}(SpeakeasyBase));
export { PostGetAccountPasswordPolicyRequest };
var PostGetAccountPasswordPolicyResponse = /** @class */ (function (_super) {
    __extends(PostGetAccountPasswordPolicyResponse, _super);
    function PostGetAccountPasswordPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetAccountPasswordPolicyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGetAccountPasswordPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGetAccountPasswordPolicyResponse.prototype, "statusCode", void 0);
    return PostGetAccountPasswordPolicyResponse;
}(SpeakeasyBase));
export { PostGetAccountPasswordPolicyResponse };
