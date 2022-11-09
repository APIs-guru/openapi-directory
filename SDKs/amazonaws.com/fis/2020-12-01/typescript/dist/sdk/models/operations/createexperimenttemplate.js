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
var CreateExperimentTemplateHeaders = /** @class */ (function (_super) {
    __extends(CreateExperimentTemplateHeaders, _super);
    function CreateExperimentTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateExperimentTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateExperimentTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateExperimentTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateExperimentTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateExperimentTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateExperimentTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateExperimentTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateExperimentTemplateHeaders;
}(SpeakeasyBase));
export { CreateExperimentTemplateHeaders };
var CreateExperimentTemplateRequestBody = /** @class */ (function (_super) {
    __extends(CreateExperimentTemplateRequestBody, _super);
    function CreateExperimentTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=actions", elemType: shared.CreateExperimentTemplateActionInput }),
        __metadata("design:type", Map)
    ], CreateExperimentTemplateRequestBody.prototype, "actions", void 0);
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateExperimentTemplateRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateExperimentTemplateRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], CreateExperimentTemplateRequestBody.prototype, "roleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=stopConditions", elemType: shared.CreateExperimentTemplateStopConditionInput }),
        __metadata("design:type", Array)
    ], CreateExperimentTemplateRequestBody.prototype, "stopConditions", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateExperimentTemplateRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=targets", elemType: shared.CreateExperimentTemplateTargetInput }),
        __metadata("design:type", Map)
    ], CreateExperimentTemplateRequestBody.prototype, "targets", void 0);
    return CreateExperimentTemplateRequestBody;
}(SpeakeasyBase));
export { CreateExperimentTemplateRequestBody };
var CreateExperimentTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateExperimentTemplateRequest, _super);
    function CreateExperimentTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateExperimentTemplateHeaders)
    ], CreateExperimentTemplateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateExperimentTemplateRequestBody)
    ], CreateExperimentTemplateRequest.prototype, "request", void 0);
    return CreateExperimentTemplateRequest;
}(SpeakeasyBase));
export { CreateExperimentTemplateRequest };
var CreateExperimentTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateExperimentTemplateResponse, _super);
    function CreateExperimentTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateExperimentTemplateResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateExperimentTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateExperimentTemplateResponse)
    ], CreateExperimentTemplateResponse.prototype, "createExperimentTemplateResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateExperimentTemplateResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateExperimentTemplateResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateExperimentTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateExperimentTemplateResponse.prototype, "validationException", void 0);
    return CreateExperimentTemplateResponse;
}(SpeakeasyBase));
export { CreateExperimentTemplateResponse };
