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
export var PostDeleteConfigurationSetEventDestinationActionEnum;
(function (PostDeleteConfigurationSetEventDestinationActionEnum) {
    PostDeleteConfigurationSetEventDestinationActionEnum["DeleteConfigurationSetEventDestination"] = "DeleteConfigurationSetEventDestination";
})(PostDeleteConfigurationSetEventDestinationActionEnum || (PostDeleteConfigurationSetEventDestinationActionEnum = {}));
export var PostDeleteConfigurationSetEventDestinationVersionEnum;
(function (PostDeleteConfigurationSetEventDestinationVersionEnum) {
    PostDeleteConfigurationSetEventDestinationVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostDeleteConfigurationSetEventDestinationVersionEnum || (PostDeleteConfigurationSetEventDestinationVersionEnum = {}));
var PostDeleteConfigurationSetEventDestinationQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationSetEventDestinationQueryParams, _super);
    function PostDeleteConfigurationSetEventDestinationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetEventDestinationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetEventDestinationQueryParams.prototype, "version", void 0);
    return PostDeleteConfigurationSetEventDestinationQueryParams;
}(SpeakeasyBase));
export { PostDeleteConfigurationSetEventDestinationQueryParams };
var PostDeleteConfigurationSetEventDestinationHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationSetEventDestinationHeaders, _super);
    function PostDeleteConfigurationSetEventDestinationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteConfigurationSetEventDestinationHeaders;
}(SpeakeasyBase));
export { PostDeleteConfigurationSetEventDestinationHeaders };
var PostDeleteConfigurationSetEventDestinationRequest = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationSetEventDestinationRequest, _super);
    function PostDeleteConfigurationSetEventDestinationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteConfigurationSetEventDestinationQueryParams)
    ], PostDeleteConfigurationSetEventDestinationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteConfigurationSetEventDestinationHeaders)
    ], PostDeleteConfigurationSetEventDestinationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteConfigurationSetEventDestinationRequest.prototype, "request", void 0);
    return PostDeleteConfigurationSetEventDestinationRequest;
}(SpeakeasyBase));
export { PostDeleteConfigurationSetEventDestinationRequest };
var PostDeleteConfigurationSetEventDestinationResponse = /** @class */ (function (_super) {
    __extends(PostDeleteConfigurationSetEventDestinationResponse, _super);
    function PostDeleteConfigurationSetEventDestinationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteConfigurationSetEventDestinationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteConfigurationSetEventDestinationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteConfigurationSetEventDestinationResponse.prototype, "statusCode", void 0);
    return PostDeleteConfigurationSetEventDestinationResponse;
}(SpeakeasyBase));
export { PostDeleteConfigurationSetEventDestinationResponse };
