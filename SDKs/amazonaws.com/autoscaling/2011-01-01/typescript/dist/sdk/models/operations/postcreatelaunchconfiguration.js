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
export var PostCreateLaunchConfigurationActionEnum;
(function (PostCreateLaunchConfigurationActionEnum) {
    PostCreateLaunchConfigurationActionEnum["CreateLaunchConfiguration"] = "CreateLaunchConfiguration";
})(PostCreateLaunchConfigurationActionEnum || (PostCreateLaunchConfigurationActionEnum = {}));
export var PostCreateLaunchConfigurationVersionEnum;
(function (PostCreateLaunchConfigurationVersionEnum) {
    PostCreateLaunchConfigurationVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostCreateLaunchConfigurationVersionEnum || (PostCreateLaunchConfigurationVersionEnum = {}));
var PostCreateLaunchConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateLaunchConfigurationQueryParams, _super);
    function PostCreateLaunchConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateLaunchConfigurationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateLaunchConfigurationQueryParams.prototype, "version", void 0);
    return PostCreateLaunchConfigurationQueryParams;
}(SpeakeasyBase));
export { PostCreateLaunchConfigurationQueryParams };
var PostCreateLaunchConfigurationHeaders = /** @class */ (function (_super) {
    __extends(PostCreateLaunchConfigurationHeaders, _super);
    function PostCreateLaunchConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateLaunchConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateLaunchConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateLaunchConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateLaunchConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateLaunchConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateLaunchConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateLaunchConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateLaunchConfigurationHeaders;
}(SpeakeasyBase));
export { PostCreateLaunchConfigurationHeaders };
var PostCreateLaunchConfigurationRequest = /** @class */ (function (_super) {
    __extends(PostCreateLaunchConfigurationRequest, _super);
    function PostCreateLaunchConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateLaunchConfigurationQueryParams)
    ], PostCreateLaunchConfigurationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateLaunchConfigurationHeaders)
    ], PostCreateLaunchConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateLaunchConfigurationRequest.prototype, "request", void 0);
    return PostCreateLaunchConfigurationRequest;
}(SpeakeasyBase));
export { PostCreateLaunchConfigurationRequest };
var PostCreateLaunchConfigurationResponse = /** @class */ (function (_super) {
    __extends(PostCreateLaunchConfigurationResponse, _super);
    function PostCreateLaunchConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateLaunchConfigurationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateLaunchConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateLaunchConfigurationResponse.prototype, "statusCode", void 0);
    return PostCreateLaunchConfigurationResponse;
}(SpeakeasyBase));
export { PostCreateLaunchConfigurationResponse };
