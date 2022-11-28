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
export var PostCreateLaunchTemplateVersionActionEnum;
(function (PostCreateLaunchTemplateVersionActionEnum) {
    PostCreateLaunchTemplateVersionActionEnum["CreateLaunchTemplateVersion"] = "CreateLaunchTemplateVersion";
})(PostCreateLaunchTemplateVersionActionEnum || (PostCreateLaunchTemplateVersionActionEnum = {}));
export var PostCreateLaunchTemplateVersionVersionEnum;
(function (PostCreateLaunchTemplateVersionVersionEnum) {
    PostCreateLaunchTemplateVersionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateLaunchTemplateVersionVersionEnum || (PostCreateLaunchTemplateVersionVersionEnum = {}));
var PostCreateLaunchTemplateVersionQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateLaunchTemplateVersionQueryParams, _super);
    function PostCreateLaunchTemplateVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateLaunchTemplateVersionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateLaunchTemplateVersionQueryParams.prototype, "version", void 0);
    return PostCreateLaunchTemplateVersionQueryParams;
}(SpeakeasyBase));
export { PostCreateLaunchTemplateVersionQueryParams };
var PostCreateLaunchTemplateVersionHeaders = /** @class */ (function (_super) {
    __extends(PostCreateLaunchTemplateVersionHeaders, _super);
    function PostCreateLaunchTemplateVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateLaunchTemplateVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateLaunchTemplateVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateLaunchTemplateVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateLaunchTemplateVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateLaunchTemplateVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateLaunchTemplateVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateLaunchTemplateVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateLaunchTemplateVersionHeaders;
}(SpeakeasyBase));
export { PostCreateLaunchTemplateVersionHeaders };
var PostCreateLaunchTemplateVersionRequest = /** @class */ (function (_super) {
    __extends(PostCreateLaunchTemplateVersionRequest, _super);
    function PostCreateLaunchTemplateVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateLaunchTemplateVersionQueryParams)
    ], PostCreateLaunchTemplateVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateLaunchTemplateVersionHeaders)
    ], PostCreateLaunchTemplateVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateLaunchTemplateVersionRequest.prototype, "request", void 0);
    return PostCreateLaunchTemplateVersionRequest;
}(SpeakeasyBase));
export { PostCreateLaunchTemplateVersionRequest };
var PostCreateLaunchTemplateVersionResponse = /** @class */ (function (_super) {
    __extends(PostCreateLaunchTemplateVersionResponse, _super);
    function PostCreateLaunchTemplateVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateLaunchTemplateVersionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateLaunchTemplateVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateLaunchTemplateVersionResponse.prototype, "statusCode", void 0);
    return PostCreateLaunchTemplateVersionResponse;
}(SpeakeasyBase));
export { PostCreateLaunchTemplateVersionResponse };
