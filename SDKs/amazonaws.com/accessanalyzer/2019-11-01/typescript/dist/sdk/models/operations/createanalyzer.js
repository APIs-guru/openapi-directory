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
import * as shared from "../shared";
var CreateAnalyzerHeaders = /** @class */ (function (_super) {
    __extends(CreateAnalyzerHeaders, _super);
    function CreateAnalyzerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateAnalyzerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateAnalyzerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateAnalyzerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateAnalyzerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateAnalyzerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateAnalyzerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateAnalyzerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateAnalyzerHeaders;
}(SpeakeasyBase));
export { CreateAnalyzerHeaders };
export var CreateAnalyzerRequestBodyTypeEnum;
(function (CreateAnalyzerRequestBodyTypeEnum) {
    CreateAnalyzerRequestBodyTypeEnum["Account"] = "ACCOUNT";
    CreateAnalyzerRequestBodyTypeEnum["Organization"] = "ORGANIZATION";
})(CreateAnalyzerRequestBodyTypeEnum || (CreateAnalyzerRequestBodyTypeEnum = {}));
var CreateAnalyzerRequestBody = /** @class */ (function (_super) {
    __extends(CreateAnalyzerRequestBody, _super);
    function CreateAnalyzerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analyzerName" }),
        __metadata("design:type", String)
    ], CreateAnalyzerRequestBody.prototype, "analyzerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archiveRules", elemType: shared.InlineArchiveRule }),
        __metadata("design:type", Array)
    ], CreateAnalyzerRequestBody.prototype, "archiveRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateAnalyzerRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateAnalyzerRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateAnalyzerRequestBody.prototype, "type", void 0);
    return CreateAnalyzerRequestBody;
}(SpeakeasyBase));
export { CreateAnalyzerRequestBody };
var CreateAnalyzerRequest = /** @class */ (function (_super) {
    __extends(CreateAnalyzerRequest, _super);
    function CreateAnalyzerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAnalyzerHeaders)
    ], CreateAnalyzerRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAnalyzerRequestBody)
    ], CreateAnalyzerRequest.prototype, "request", void 0);
    return CreateAnalyzerRequest;
}(SpeakeasyBase));
export { CreateAnalyzerRequest };
var CreateAnalyzerResponse = /** @class */ (function (_super) {
    __extends(CreateAnalyzerResponse, _super);
    function CreateAnalyzerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAnalyzerResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAnalyzerResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAnalyzerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateAnalyzerResponse)
    ], CreateAnalyzerResponse.prototype, "createAnalyzerResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAnalyzerResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAnalyzerResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAnalyzerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAnalyzerResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAnalyzerResponse.prototype, "validationException", void 0);
    return CreateAnalyzerResponse;
}(SpeakeasyBase));
export { CreateAnalyzerResponse };
