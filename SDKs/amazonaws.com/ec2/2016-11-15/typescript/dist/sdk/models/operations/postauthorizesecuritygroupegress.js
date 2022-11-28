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
export var PostAuthorizeSecurityGroupEgressActionEnum;
(function (PostAuthorizeSecurityGroupEgressActionEnum) {
    PostAuthorizeSecurityGroupEgressActionEnum["AuthorizeSecurityGroupEgress"] = "AuthorizeSecurityGroupEgress";
})(PostAuthorizeSecurityGroupEgressActionEnum || (PostAuthorizeSecurityGroupEgressActionEnum = {}));
export var PostAuthorizeSecurityGroupEgressVersionEnum;
(function (PostAuthorizeSecurityGroupEgressVersionEnum) {
    PostAuthorizeSecurityGroupEgressVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostAuthorizeSecurityGroupEgressVersionEnum || (PostAuthorizeSecurityGroupEgressVersionEnum = {}));
var PostAuthorizeSecurityGroupEgressQueryParams = /** @class */ (function (_super) {
    __extends(PostAuthorizeSecurityGroupEgressQueryParams, _super);
    function PostAuthorizeSecurityGroupEgressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAuthorizeSecurityGroupEgressQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAuthorizeSecurityGroupEgressQueryParams.prototype, "version", void 0);
    return PostAuthorizeSecurityGroupEgressQueryParams;
}(SpeakeasyBase));
export { PostAuthorizeSecurityGroupEgressQueryParams };
var PostAuthorizeSecurityGroupEgressHeaders = /** @class */ (function (_super) {
    __extends(PostAuthorizeSecurityGroupEgressHeaders, _super);
    function PostAuthorizeSecurityGroupEgressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAuthorizeSecurityGroupEgressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAuthorizeSecurityGroupEgressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAuthorizeSecurityGroupEgressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAuthorizeSecurityGroupEgressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAuthorizeSecurityGroupEgressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAuthorizeSecurityGroupEgressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAuthorizeSecurityGroupEgressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAuthorizeSecurityGroupEgressHeaders;
}(SpeakeasyBase));
export { PostAuthorizeSecurityGroupEgressHeaders };
var PostAuthorizeSecurityGroupEgressRequest = /** @class */ (function (_super) {
    __extends(PostAuthorizeSecurityGroupEgressRequest, _super);
    function PostAuthorizeSecurityGroupEgressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAuthorizeSecurityGroupEgressQueryParams)
    ], PostAuthorizeSecurityGroupEgressRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAuthorizeSecurityGroupEgressHeaders)
    ], PostAuthorizeSecurityGroupEgressRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAuthorizeSecurityGroupEgressRequest.prototype, "request", void 0);
    return PostAuthorizeSecurityGroupEgressRequest;
}(SpeakeasyBase));
export { PostAuthorizeSecurityGroupEgressRequest };
var PostAuthorizeSecurityGroupEgressResponse = /** @class */ (function (_super) {
    __extends(PostAuthorizeSecurityGroupEgressResponse, _super);
    function PostAuthorizeSecurityGroupEgressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAuthorizeSecurityGroupEgressResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAuthorizeSecurityGroupEgressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAuthorizeSecurityGroupEgressResponse.prototype, "statusCode", void 0);
    return PostAuthorizeSecurityGroupEgressResponse;
}(SpeakeasyBase));
export { PostAuthorizeSecurityGroupEgressResponse };
