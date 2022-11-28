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
export var PostDisableVpcClassicLinkActionEnum;
(function (PostDisableVpcClassicLinkActionEnum) {
    PostDisableVpcClassicLinkActionEnum["DisableVpcClassicLink"] = "DisableVpcClassicLink";
})(PostDisableVpcClassicLinkActionEnum || (PostDisableVpcClassicLinkActionEnum = {}));
export var PostDisableVpcClassicLinkVersionEnum;
(function (PostDisableVpcClassicLinkVersionEnum) {
    PostDisableVpcClassicLinkVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDisableVpcClassicLinkVersionEnum || (PostDisableVpcClassicLinkVersionEnum = {}));
var PostDisableVpcClassicLinkQueryParams = /** @class */ (function (_super) {
    __extends(PostDisableVpcClassicLinkQueryParams, _super);
    function PostDisableVpcClassicLinkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDisableVpcClassicLinkQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDisableVpcClassicLinkQueryParams.prototype, "version", void 0);
    return PostDisableVpcClassicLinkQueryParams;
}(SpeakeasyBase));
export { PostDisableVpcClassicLinkQueryParams };
var PostDisableVpcClassicLinkHeaders = /** @class */ (function (_super) {
    __extends(PostDisableVpcClassicLinkHeaders, _super);
    function PostDisableVpcClassicLinkHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDisableVpcClassicLinkHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDisableVpcClassicLinkHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDisableVpcClassicLinkHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDisableVpcClassicLinkHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDisableVpcClassicLinkHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDisableVpcClassicLinkHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDisableVpcClassicLinkHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDisableVpcClassicLinkHeaders;
}(SpeakeasyBase));
export { PostDisableVpcClassicLinkHeaders };
var PostDisableVpcClassicLinkRequest = /** @class */ (function (_super) {
    __extends(PostDisableVpcClassicLinkRequest, _super);
    function PostDisableVpcClassicLinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDisableVpcClassicLinkQueryParams)
    ], PostDisableVpcClassicLinkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDisableVpcClassicLinkHeaders)
    ], PostDisableVpcClassicLinkRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDisableVpcClassicLinkRequest.prototype, "request", void 0);
    return PostDisableVpcClassicLinkRequest;
}(SpeakeasyBase));
export { PostDisableVpcClassicLinkRequest };
var PostDisableVpcClassicLinkResponse = /** @class */ (function (_super) {
    __extends(PostDisableVpcClassicLinkResponse, _super);
    function PostDisableVpcClassicLinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDisableVpcClassicLinkResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDisableVpcClassicLinkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDisableVpcClassicLinkResponse.prototype, "statusCode", void 0);
    return PostDisableVpcClassicLinkResponse;
}(SpeakeasyBase));
export { PostDisableVpcClassicLinkResponse };
