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
export var PostSimulatePrincipalPolicyActionEnum;
(function (PostSimulatePrincipalPolicyActionEnum) {
    PostSimulatePrincipalPolicyActionEnum["SimulatePrincipalPolicy"] = "SimulatePrincipalPolicy";
})(PostSimulatePrincipalPolicyActionEnum || (PostSimulatePrincipalPolicyActionEnum = {}));
export var PostSimulatePrincipalPolicyVersionEnum;
(function (PostSimulatePrincipalPolicyVersionEnum) {
    PostSimulatePrincipalPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostSimulatePrincipalPolicyVersionEnum || (PostSimulatePrincipalPolicyVersionEnum = {}));
var PostSimulatePrincipalPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostSimulatePrincipalPolicyQueryParams, _super);
    function PostSimulatePrincipalPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSimulatePrincipalPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostSimulatePrincipalPolicyQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], PostSimulatePrincipalPolicyQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSimulatePrincipalPolicyQueryParams.prototype, "version", void 0);
    return PostSimulatePrincipalPolicyQueryParams;
}(SpeakeasyBase));
export { PostSimulatePrincipalPolicyQueryParams };
var PostSimulatePrincipalPolicyHeaders = /** @class */ (function (_super) {
    __extends(PostSimulatePrincipalPolicyHeaders, _super);
    function PostSimulatePrincipalPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSimulatePrincipalPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSimulatePrincipalPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSimulatePrincipalPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSimulatePrincipalPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSimulatePrincipalPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSimulatePrincipalPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSimulatePrincipalPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSimulatePrincipalPolicyHeaders;
}(SpeakeasyBase));
export { PostSimulatePrincipalPolicyHeaders };
var PostSimulatePrincipalPolicyRequest = /** @class */ (function (_super) {
    __extends(PostSimulatePrincipalPolicyRequest, _super);
    function PostSimulatePrincipalPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSimulatePrincipalPolicyQueryParams)
    ], PostSimulatePrincipalPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSimulatePrincipalPolicyHeaders)
    ], PostSimulatePrincipalPolicyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSimulatePrincipalPolicyRequest.prototype, "request", void 0);
    return PostSimulatePrincipalPolicyRequest;
}(SpeakeasyBase));
export { PostSimulatePrincipalPolicyRequest };
var PostSimulatePrincipalPolicyResponse = /** @class */ (function (_super) {
    __extends(PostSimulatePrincipalPolicyResponse, _super);
    function PostSimulatePrincipalPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostSimulatePrincipalPolicyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSimulatePrincipalPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSimulatePrincipalPolicyResponse.prototype, "statusCode", void 0);
    return PostSimulatePrincipalPolicyResponse;
}(SpeakeasyBase));
export { PostSimulatePrincipalPolicyResponse };
