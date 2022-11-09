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
import * as shared from "../shared";
export var PutImageXAmzTargetEnum;
(function (PutImageXAmzTargetEnum) {
    PutImageXAmzTargetEnum["SpencerFrontendServicePutImage"] = "SpencerFrontendService.PutImage";
})(PutImageXAmzTargetEnum || (PutImageXAmzTargetEnum = {}));
var PutImageHeaders = /** @class */ (function (_super) {
    __extends(PutImageHeaders, _super);
    function PutImageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutImageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutImageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutImageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutImageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutImageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutImageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutImageHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], PutImageHeaders.prototype, "xAmzTarget", void 0);
    return PutImageHeaders;
}(SpeakeasyBase));
export { PutImageHeaders };
var PutImageRequest = /** @class */ (function (_super) {
    __extends(PutImageRequest, _super);
    function PutImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutImageHeaders)
    ], PutImageRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PutImageRequest)
    ], PutImageRequest.prototype, "request", void 0);
    return PutImageRequest;
}(SpeakeasyBase));
export { PutImageRequest };
var PutImageResponse = /** @class */ (function (_super) {
    __extends(PutImageResponse, _super);
    function PutImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutImageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImageResponse.prototype, "imageAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImageResponse.prototype, "imageDigestDoesNotMatchException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImageResponse.prototype, "imageTagAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImageResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImageResponse.prototype, "layersNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImageResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PutImageResponse)
    ], PutImageResponse.prototype, "putImageResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImageResponse.prototype, "referencedImagesNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImageResponse.prototype, "registryNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImageResponse.prototype, "repositoryNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImageResponse.prototype, "serverException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutImageResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutImageResponse.prototype, "unsupportedCommandException", void 0);
    return PutImageResponse;
}(SpeakeasyBase));
export { PutImageResponse };
