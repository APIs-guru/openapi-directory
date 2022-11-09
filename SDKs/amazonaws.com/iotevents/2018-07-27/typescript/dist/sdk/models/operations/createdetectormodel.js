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
var CreateDetectorModelHeaders = /** @class */ (function (_super) {
    __extends(CreateDetectorModelHeaders, _super);
    function CreateDetectorModelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDetectorModelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDetectorModelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDetectorModelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDetectorModelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDetectorModelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDetectorModelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDetectorModelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDetectorModelHeaders;
}(SpeakeasyBase));
export { CreateDetectorModelHeaders };
// CreateDetectorModelRequestBodyDetectorModelDefinition
/**
 * Information that defines how a detector operates.
**/
var CreateDetectorModelRequestBodyDetectorModelDefinition = /** @class */ (function (_super) {
    __extends(CreateDetectorModelRequestBodyDetectorModelDefinition, _super);
    function CreateDetectorModelRequestBodyDetectorModelDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=initialStateName" }),
        __metadata("design:type", String)
    ], CreateDetectorModelRequestBodyDetectorModelDefinition.prototype, "initialStateName", void 0);
    __decorate([
        Metadata({ data: "json, name=states", elemType: shared.State }),
        __metadata("design:type", Array)
    ], CreateDetectorModelRequestBodyDetectorModelDefinition.prototype, "states", void 0);
    return CreateDetectorModelRequestBodyDetectorModelDefinition;
}(SpeakeasyBase));
export { CreateDetectorModelRequestBodyDetectorModelDefinition };
export var CreateDetectorModelRequestBodyEvaluationMethodEnum;
(function (CreateDetectorModelRequestBodyEvaluationMethodEnum) {
    CreateDetectorModelRequestBodyEvaluationMethodEnum["Batch"] = "BATCH";
    CreateDetectorModelRequestBodyEvaluationMethodEnum["Serial"] = "SERIAL";
})(CreateDetectorModelRequestBodyEvaluationMethodEnum || (CreateDetectorModelRequestBodyEvaluationMethodEnum = {}));
var CreateDetectorModelRequestBody = /** @class */ (function (_super) {
    __extends(CreateDetectorModelRequestBody, _super);
    function CreateDetectorModelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=detectorModelDefinition" }),
        __metadata("design:type", CreateDetectorModelRequestBodyDetectorModelDefinition)
    ], CreateDetectorModelRequestBody.prototype, "detectorModelDefinition", void 0);
    __decorate([
        Metadata({ data: "json, name=detectorModelDescription" }),
        __metadata("design:type", String)
    ], CreateDetectorModelRequestBody.prototype, "detectorModelDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=detectorModelName" }),
        __metadata("design:type", String)
    ], CreateDetectorModelRequestBody.prototype, "detectorModelName", void 0);
    __decorate([
        Metadata({ data: "json, name=evaluationMethod" }),
        __metadata("design:type", String)
    ], CreateDetectorModelRequestBody.prototype, "evaluationMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], CreateDetectorModelRequestBody.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], CreateDetectorModelRequestBody.prototype, "roleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateDetectorModelRequestBody.prototype, "tags", void 0);
    return CreateDetectorModelRequestBody;
}(SpeakeasyBase));
export { CreateDetectorModelRequestBody };
var CreateDetectorModelRequest = /** @class */ (function (_super) {
    __extends(CreateDetectorModelRequest, _super);
    function CreateDetectorModelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDetectorModelHeaders)
    ], CreateDetectorModelRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDetectorModelRequestBody)
    ], CreateDetectorModelRequest.prototype, "request", void 0);
    return CreateDetectorModelRequest;
}(SpeakeasyBase));
export { CreateDetectorModelRequest };
var CreateDetectorModelResponse = /** @class */ (function (_super) {
    __extends(CreateDetectorModelResponse, _super);
    function CreateDetectorModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDetectorModelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateDetectorModelResponse)
    ], CreateDetectorModelResponse.prototype, "createDetectorModelResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDetectorModelResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDetectorModelResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDetectorModelResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDetectorModelResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDetectorModelResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDetectorModelResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateDetectorModelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDetectorModelResponse.prototype, "throttlingException", void 0);
    return CreateDetectorModelResponse;
}(SpeakeasyBase));
export { CreateDetectorModelResponse };
