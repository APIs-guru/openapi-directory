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
export var DetectPiiEntitiesXAmzTargetEnum;
(function (DetectPiiEntitiesXAmzTargetEnum) {
    DetectPiiEntitiesXAmzTargetEnum["Comprehend20171127DetectPiiEntities"] = "Comprehend_20171127.DetectPiiEntities";
})(DetectPiiEntitiesXAmzTargetEnum || (DetectPiiEntitiesXAmzTargetEnum = {}));
var DetectPiiEntitiesHeaders = /** @class */ (function (_super) {
    __extends(DetectPiiEntitiesHeaders, _super);
    function DetectPiiEntitiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DetectPiiEntitiesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DetectPiiEntitiesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DetectPiiEntitiesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DetectPiiEntitiesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DetectPiiEntitiesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DetectPiiEntitiesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DetectPiiEntitiesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DetectPiiEntitiesHeaders.prototype, "xAmzTarget", void 0);
    return DetectPiiEntitiesHeaders;
}(SpeakeasyBase));
export { DetectPiiEntitiesHeaders };
var DetectPiiEntitiesRequest = /** @class */ (function (_super) {
    __extends(DetectPiiEntitiesRequest, _super);
    function DetectPiiEntitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DetectPiiEntitiesHeaders)
    ], DetectPiiEntitiesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DetectPiiEntitiesRequest)
    ], DetectPiiEntitiesRequest.prototype, "request", void 0);
    return DetectPiiEntitiesRequest;
}(SpeakeasyBase));
export { DetectPiiEntitiesRequest };
var DetectPiiEntitiesResponse = /** @class */ (function (_super) {
    __extends(DetectPiiEntitiesResponse, _super);
    function DetectPiiEntitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DetectPiiEntitiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DetectPiiEntitiesResponse)
    ], DetectPiiEntitiesResponse.prototype, "detectPiiEntitiesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DetectPiiEntitiesResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DetectPiiEntitiesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DetectPiiEntitiesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DetectPiiEntitiesResponse.prototype, "textSizeLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DetectPiiEntitiesResponse.prototype, "unsupportedLanguageException", void 0);
    return DetectPiiEntitiesResponse;
}(SpeakeasyBase));
export { DetectPiiEntitiesResponse };
