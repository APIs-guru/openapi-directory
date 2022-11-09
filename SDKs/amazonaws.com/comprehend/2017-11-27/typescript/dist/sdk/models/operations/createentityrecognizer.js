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
export var CreateEntityRecognizerXAmzTargetEnum;
(function (CreateEntityRecognizerXAmzTargetEnum) {
    CreateEntityRecognizerXAmzTargetEnum["Comprehend20171127CreateEntityRecognizer"] = "Comprehend_20171127.CreateEntityRecognizer";
})(CreateEntityRecognizerXAmzTargetEnum || (CreateEntityRecognizerXAmzTargetEnum = {}));
var CreateEntityRecognizerHeaders = /** @class */ (function (_super) {
    __extends(CreateEntityRecognizerHeaders, _super);
    function CreateEntityRecognizerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateEntityRecognizerHeaders.prototype, "xAmzTarget", void 0);
    return CreateEntityRecognizerHeaders;
}(SpeakeasyBase));
export { CreateEntityRecognizerHeaders };
var CreateEntityRecognizerRequest = /** @class */ (function (_super) {
    __extends(CreateEntityRecognizerRequest, _super);
    function CreateEntityRecognizerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateEntityRecognizerHeaders)
    ], CreateEntityRecognizerRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateEntityRecognizerRequest)
    ], CreateEntityRecognizerRequest.prototype, "request", void 0);
    return CreateEntityRecognizerRequest;
}(SpeakeasyBase));
export { CreateEntityRecognizerRequest };
var CreateEntityRecognizerResponse = /** @class */ (function (_super) {
    __extends(CreateEntityRecognizerResponse, _super);
    function CreateEntityRecognizerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateEntityRecognizerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateEntityRecognizerResponse)
    ], CreateEntityRecognizerResponse.prototype, "createEntityRecognizerResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateEntityRecognizerResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateEntityRecognizerResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateEntityRecognizerResponse.prototype, "kmsKeyValidationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateEntityRecognizerResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateEntityRecognizerResponse.prototype, "resourceLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateEntityRecognizerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateEntityRecognizerResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateEntityRecognizerResponse.prototype, "tooManyTagsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateEntityRecognizerResponse.prototype, "unsupportedLanguageException", void 0);
    return CreateEntityRecognizerResponse;
}(SpeakeasyBase));
export { CreateEntityRecognizerResponse };
