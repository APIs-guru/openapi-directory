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
export var PostDeleteConfigurationSetTrackingOptionsActionEnum;
(function (PostDeleteConfigurationSetTrackingOptionsActionEnum) {
    PostDeleteConfigurationSetTrackingOptionsActionEnum["DeleteConfigurationSetTrackingOptions"] = "DeleteConfigurationSetTrackingOptions";
})(PostDeleteConfigurationSetTrackingOptionsActionEnum || (PostDeleteConfigurationSetTrackingOptionsActionEnum = {}));
export var PostDeleteConfigurationSetTrackingOptionsVersionEnum;
(function (PostDeleteConfigurationSetTrackingOptionsVersionEnum) {
    PostDeleteConfigurationSetTrackingOptionsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostDeleteConfigurationSetTrackingOptionsVersionEnum || (PostDeleteConfigurationSetTrackingOptionsVersionEnum = {}));
var PostDeleteConfigurationSetTrackingOptionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationSetTrackingOptionsQueryParams, _super);
    function PostDeleteConfigurationSetTrackingOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetTrackingOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetTrackingOptionsQueryParams.prototype, "version", void 0);
    return PostDeleteConfigurationSetTrackingOptionsQueryParams;
}(SpeakeasyBase));
export { PostDeleteConfigurationSetTrackingOptionsQueryParams };
var PostDeleteConfigurationSetTrackingOptionsHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationSetTrackingOptionsHeaders, _super);
    function PostDeleteConfigurationSetTrackingOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetTrackingOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteConfigurationSetTrackingOptionsHeaders;
}(SpeakeasyBase));
export { PostDeleteConfigurationSetTrackingOptionsHeaders };
var PostDeleteConfigurationSetTrackingOptionsRequest = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationSetTrackingOptionsRequest, _super);
    function PostDeleteConfigurationSetTrackingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteConfigurationSetTrackingOptionsQueryParams)
    ], PostDeleteConfigurationSetTrackingOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteConfigurationSetTrackingOptionsHeaders)
    ], PostDeleteConfigurationSetTrackingOptionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteConfigurationSetTrackingOptionsRequest.prototype, "request", void 0);
    return PostDeleteConfigurationSetTrackingOptionsRequest;
}(SpeakeasyBase));
export { PostDeleteConfigurationSetTrackingOptionsRequest };
var PostDeleteConfigurationSetTrackingOptionsResponse = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationSetTrackingOptionsResponse, _super);
    function PostDeleteConfigurationSetTrackingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteConfigurationSetTrackingOptionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetTrackingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteConfigurationSetTrackingOptionsResponse.prototype, "statusCode", void 0);
    return PostDeleteConfigurationSetTrackingOptionsResponse;
}(SpeakeasyBase));
export { PostDeleteConfigurationSetTrackingOptionsResponse };
