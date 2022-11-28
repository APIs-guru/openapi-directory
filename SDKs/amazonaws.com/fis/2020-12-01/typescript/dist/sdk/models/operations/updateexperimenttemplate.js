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
var UpdateExperimentTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdateExperimentTemplatePathParams, _super);
    function UpdateExperimentTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateExperimentTemplatePathParams.prototype, "id", void 0);
    return UpdateExperimentTemplatePathParams;
}(SpeakeasyBase));
export { UpdateExperimentTemplatePathParams };
var UpdateExperimentTemplateHeaders = /** @class */ (function (_super) {
    __extends(UpdateExperimentTemplateHeaders, _super);
    function UpdateExperimentTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateExperimentTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateExperimentTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateExperimentTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateExperimentTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateExperimentTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateExperimentTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateExperimentTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateExperimentTemplateHeaders;
}(SpeakeasyBase));
export { UpdateExperimentTemplateHeaders };
var UpdateExperimentTemplateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateExperimentTemplateRequestBody, _super);
    function UpdateExperimentTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.UpdateExperimentTemplateActionInputItem }),
        __metadata("design:type", Map)
    ], UpdateExperimentTemplateRequestBody.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateExperimentTemplateRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], UpdateExperimentTemplateRequestBody.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stopConditions", elemType: shared.UpdateExperimentTemplateStopConditionInput }),
        __metadata("design:type", Array)
    ], UpdateExperimentTemplateRequestBody.prototype, "stopConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets", elemType: shared.UpdateExperimentTemplateTargetInput }),
        __metadata("design:type", Map)
    ], UpdateExperimentTemplateRequestBody.prototype, "targets", void 0);
    return UpdateExperimentTemplateRequestBody;
}(SpeakeasyBase));
export { UpdateExperimentTemplateRequestBody };
var UpdateExperimentTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateExperimentTemplateRequest, _super);
    function UpdateExperimentTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateExperimentTemplatePathParams)
    ], UpdateExperimentTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateExperimentTemplateHeaders)
    ], UpdateExperimentTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateExperimentTemplateRequestBody)
    ], UpdateExperimentTemplateRequest.prototype, "request", void 0);
    return UpdateExperimentTemplateRequest;
}(SpeakeasyBase));
export { UpdateExperimentTemplateRequest };
var UpdateExperimentTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateExperimentTemplateResponse, _super);
    function UpdateExperimentTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateExperimentTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateExperimentTemplateResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateExperimentTemplateResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateExperimentTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateExperimentTemplateResponse)
    ], UpdateExperimentTemplateResponse.prototype, "updateExperimentTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateExperimentTemplateResponse.prototype, "validationException", void 0);
    return UpdateExperimentTemplateResponse;
}(SpeakeasyBase));
export { UpdateExperimentTemplateResponse };
