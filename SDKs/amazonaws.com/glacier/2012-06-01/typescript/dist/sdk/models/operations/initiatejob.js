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
var InitiateJobPathParams = /** @class */ (function (_super) {
    __extends(InitiateJobPathParams, _super);
    function InitiateJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], InitiateJobPathParams.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=vaultName" }),
        __metadata("design:type", String)
    ], InitiateJobPathParams.prototype, "vaultName", void 0);
    return InitiateJobPathParams;
}(SpeakeasyBase));
export { InitiateJobPathParams };
var InitiateJobHeaders = /** @class */ (function (_super) {
    __extends(InitiateJobHeaders, _super);
    function InitiateJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return InitiateJobHeaders;
}(SpeakeasyBase));
export { InitiateJobHeaders };
// InitiateJobRequestBodyJobParameters
/**
 * Provides options for defining a job.
**/
var InitiateJobRequestBodyJobParameters = /** @class */ (function (_super) {
    __extends(InitiateJobRequestBodyJobParameters, _super);
    function InitiateJobRequestBodyJobParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ArchiveId" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "archiveId", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=Format" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=InventoryRetrievalParameters" }),
        __metadata("design:type", shared.InventoryRetrievalJobInput)
    ], InitiateJobRequestBodyJobParameters.prototype, "inventoryRetrievalParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=OutputLocation" }),
        __metadata("design:type", shared.OutputLocation)
    ], InitiateJobRequestBodyJobParameters.prototype, "outputLocation", void 0);
    __decorate([
        Metadata({ data: "json, name=RetrievalByteRange" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "retrievalByteRange", void 0);
    __decorate([
        Metadata({ data: "json, name=SNSTopic" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "snsTopic", void 0);
    __decorate([
        Metadata({ data: "json, name=SelectParameters" }),
        __metadata("design:type", shared.SelectParameters)
    ], InitiateJobRequestBodyJobParameters.prototype, "selectParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=Tier" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "tier", void 0);
    __decorate([
        Metadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "type", void 0);
    return InitiateJobRequestBodyJobParameters;
}(SpeakeasyBase));
export { InitiateJobRequestBodyJobParameters };
var InitiateJobRequestBody = /** @class */ (function (_super) {
    __extends(InitiateJobRequestBody, _super);
    function InitiateJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=jobParameters" }),
        __metadata("design:type", InitiateJobRequestBodyJobParameters)
    ], InitiateJobRequestBody.prototype, "jobParameters", void 0);
    return InitiateJobRequestBody;
}(SpeakeasyBase));
export { InitiateJobRequestBody };
var InitiateJobRequest = /** @class */ (function (_super) {
    __extends(InitiateJobRequest, _super);
    function InitiateJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", InitiateJobPathParams)
    ], InitiateJobRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", InitiateJobHeaders)
    ], InitiateJobRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", InitiateJobRequestBody)
    ], InitiateJobRequest.prototype, "request", void 0);
    return InitiateJobRequest;
}(SpeakeasyBase));
export { InitiateJobRequest };
var InitiateJobResponse = /** @class */ (function (_super) {
    __extends(InitiateJobResponse, _super);
    function InitiateJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], InitiateJobResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], InitiateJobResponse.prototype, "initiateJobOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InitiateJobResponse.prototype, "insufficientCapacityException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InitiateJobResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InitiateJobResponse.prototype, "missingParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InitiateJobResponse.prototype, "policyEnforcedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InitiateJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InitiateJobResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], InitiateJobResponse.prototype, "statusCode", void 0);
    return InitiateJobResponse;
}(SpeakeasyBase));
export { InitiateJobResponse };
