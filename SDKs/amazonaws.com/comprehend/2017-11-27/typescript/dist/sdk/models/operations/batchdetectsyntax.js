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
export var BatchDetectSyntaxXAmzTargetEnum;
(function (BatchDetectSyntaxXAmzTargetEnum) {
    BatchDetectSyntaxXAmzTargetEnum["Comprehend20171127BatchDetectSyntax"] = "Comprehend_20171127.BatchDetectSyntax";
})(BatchDetectSyntaxXAmzTargetEnum || (BatchDetectSyntaxXAmzTargetEnum = {}));
var BatchDetectSyntaxHeaders = /** @class */ (function (_super) {
    __extends(BatchDetectSyntaxHeaders, _super);
    function BatchDetectSyntaxHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchDetectSyntaxHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchDetectSyntaxHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchDetectSyntaxHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchDetectSyntaxHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchDetectSyntaxHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchDetectSyntaxHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchDetectSyntaxHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], BatchDetectSyntaxHeaders.prototype, "xAmzTarget", void 0);
    return BatchDetectSyntaxHeaders;
}(SpeakeasyBase));
export { BatchDetectSyntaxHeaders };
var BatchDetectSyntaxRequest = /** @class */ (function (_super) {
    __extends(BatchDetectSyntaxRequest, _super);
    function BatchDetectSyntaxRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchDetectSyntaxHeaders)
    ], BatchDetectSyntaxRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchDetectSyntaxRequest)
    ], BatchDetectSyntaxRequest.prototype, "request", void 0);
    return BatchDetectSyntaxRequest;
}(SpeakeasyBase));
export { BatchDetectSyntaxRequest };
var BatchDetectSyntaxResponse = /** @class */ (function (_super) {
    __extends(BatchDetectSyntaxResponse, _super);
    function BatchDetectSyntaxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchDetectSyntaxResponse)
    ], BatchDetectSyntaxResponse.prototype, "batchDetectSyntaxResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDetectSyntaxResponse.prototype, "batchSizeLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchDetectSyntaxResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDetectSyntaxResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDetectSyntaxResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchDetectSyntaxResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDetectSyntaxResponse.prototype, "textSizeLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchDetectSyntaxResponse.prototype, "unsupportedLanguageException", void 0);
    return BatchDetectSyntaxResponse;
}(SpeakeasyBase));
export { BatchDetectSyntaxResponse };
