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
export var PostCreateVpcEndpointServiceConfigurationActionEnum;
(function (PostCreateVpcEndpointServiceConfigurationActionEnum) {
    PostCreateVpcEndpointServiceConfigurationActionEnum["CreateVpcEndpointServiceConfiguration"] = "CreateVpcEndpointServiceConfiguration";
})(PostCreateVpcEndpointServiceConfigurationActionEnum || (PostCreateVpcEndpointServiceConfigurationActionEnum = {}));
export var PostCreateVpcEndpointServiceConfigurationVersionEnum;
(function (PostCreateVpcEndpointServiceConfigurationVersionEnum) {
    PostCreateVpcEndpointServiceConfigurationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateVpcEndpointServiceConfigurationVersionEnum || (PostCreateVpcEndpointServiceConfigurationVersionEnum = {}));
var PostCreateVpcEndpointServiceConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateVpcEndpointServiceConfigurationQueryParams, _super);
    function PostCreateVpcEndpointServiceConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointServiceConfigurationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointServiceConfigurationQueryParams.prototype, "version", void 0);
    return PostCreateVpcEndpointServiceConfigurationQueryParams;
}(SpeakeasyBase));
export { PostCreateVpcEndpointServiceConfigurationQueryParams };
var PostCreateVpcEndpointServiceConfigurationHeaders = /** @class */ (function (_super) {
    __extends(PostCreateVpcEndpointServiceConfigurationHeaders, _super);
    function PostCreateVpcEndpointServiceConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointServiceConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointServiceConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointServiceConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointServiceConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointServiceConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointServiceConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointServiceConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateVpcEndpointServiceConfigurationHeaders;
}(SpeakeasyBase));
export { PostCreateVpcEndpointServiceConfigurationHeaders };
var PostCreateVpcEndpointServiceConfigurationRequest = /** @class */ (function (_super) {
    __extends(PostCreateVpcEndpointServiceConfigurationRequest, _super);
    function PostCreateVpcEndpointServiceConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateVpcEndpointServiceConfigurationQueryParams)
    ], PostCreateVpcEndpointServiceConfigurationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateVpcEndpointServiceConfigurationHeaders)
    ], PostCreateVpcEndpointServiceConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateVpcEndpointServiceConfigurationRequest.prototype, "request", void 0);
    return PostCreateVpcEndpointServiceConfigurationRequest;
}(SpeakeasyBase));
export { PostCreateVpcEndpointServiceConfigurationRequest };
var PostCreateVpcEndpointServiceConfigurationResponse = /** @class */ (function (_super) {
    __extends(PostCreateVpcEndpointServiceConfigurationResponse, _super);
    function PostCreateVpcEndpointServiceConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateVpcEndpointServiceConfigurationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateVpcEndpointServiceConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateVpcEndpointServiceConfigurationResponse.prototype, "statusCode", void 0);
    return PostCreateVpcEndpointServiceConfigurationResponse;
}(SpeakeasyBase));
export { PostCreateVpcEndpointServiceConfigurationResponse };
