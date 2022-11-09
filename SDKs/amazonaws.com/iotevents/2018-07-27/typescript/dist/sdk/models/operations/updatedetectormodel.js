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
var UpdateDetectorModelPathParams = /** @class */ (function (_super) {
    __extends(UpdateDetectorModelPathParams, _super);
    function UpdateDetectorModelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=detectorModelName" }),
        __metadata("design:type", String)
    ], UpdateDetectorModelPathParams.prototype, "detectorModelName", void 0);
    return UpdateDetectorModelPathParams;
}(SpeakeasyBase));
export { UpdateDetectorModelPathParams };
var UpdateDetectorModelHeaders = /** @class */ (function (_super) {
    __extends(UpdateDetectorModelHeaders, _super);
    function UpdateDetectorModelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDetectorModelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDetectorModelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDetectorModelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDetectorModelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDetectorModelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDetectorModelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDetectorModelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDetectorModelHeaders;
}(SpeakeasyBase));
export { UpdateDetectorModelHeaders };
// UpdateDetectorModelRequestBodyDetectorModelDefinition
/**
 * Information that defines how a detector operates.
**/
var UpdateDetectorModelRequestBodyDetectorModelDefinition = /** @class */ (function (_super) {
    __extends(UpdateDetectorModelRequestBodyDetectorModelDefinition, _super);
    function UpdateDetectorModelRequestBodyDetectorModelDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=initialStateName" }),
        __metadata("design:type", String)
    ], UpdateDetectorModelRequestBodyDetectorModelDefinition.prototype, "initialStateName", void 0);
    __decorate([
        Metadata({ data: "json, name=states", elemType: shared.State }),
        __metadata("design:type", Array)
    ], UpdateDetectorModelRequestBodyDetectorModelDefinition.prototype, "states", void 0);
    return UpdateDetectorModelRequestBodyDetectorModelDefinition;
}(SpeakeasyBase));
export { UpdateDetectorModelRequestBodyDetectorModelDefinition };
export var UpdateDetectorModelRequestBodyEvaluationMethodEnum;
(function (UpdateDetectorModelRequestBodyEvaluationMethodEnum) {
    UpdateDetectorModelRequestBodyEvaluationMethodEnum["Batch"] = "BATCH";
    UpdateDetectorModelRequestBodyEvaluationMethodEnum["Serial"] = "SERIAL";
})(UpdateDetectorModelRequestBodyEvaluationMethodEnum || (UpdateDetectorModelRequestBodyEvaluationMethodEnum = {}));
var UpdateDetectorModelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDetectorModelRequestBody, _super);
    function UpdateDetectorModelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=detectorModelDefinition" }),
        __metadata("design:type", UpdateDetectorModelRequestBodyDetectorModelDefinition)
    ], UpdateDetectorModelRequestBody.prototype, "detectorModelDefinition", void 0);
    __decorate([
        Metadata({ data: "json, name=detectorModelDescription" }),
        __metadata("design:type", String)
    ], UpdateDetectorModelRequestBody.prototype, "detectorModelDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=evaluationMethod" }),
        __metadata("design:type", String)
    ], UpdateDetectorModelRequestBody.prototype, "evaluationMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], UpdateDetectorModelRequestBody.prototype, "roleArn", void 0);
    return UpdateDetectorModelRequestBody;
}(SpeakeasyBase));
export { UpdateDetectorModelRequestBody };
var UpdateDetectorModelRequest = /** @class */ (function (_super) {
    __extends(UpdateDetectorModelRequest, _super);
    function UpdateDetectorModelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDetectorModelPathParams)
    ], UpdateDetectorModelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDetectorModelHeaders)
    ], UpdateDetectorModelRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDetectorModelRequestBody)
    ], UpdateDetectorModelRequest.prototype, "request", void 0);
    return UpdateDetectorModelRequest;
}(SpeakeasyBase));
export { UpdateDetectorModelRequest };
var UpdateDetectorModelResponse = /** @class */ (function (_super) {
    __extends(UpdateDetectorModelResponse, _super);
    function UpdateDetectorModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDetectorModelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDetectorModelResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDetectorModelResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDetectorModelResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDetectorModelResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDetectorModelResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDetectorModelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDetectorModelResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateDetectorModelResponse)
    ], UpdateDetectorModelResponse.prototype, "updateDetectorModelResponse", void 0);
    return UpdateDetectorModelResponse;
}(SpeakeasyBase));
export { UpdateDetectorModelResponse };
