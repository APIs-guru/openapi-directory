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
var PutIntegrationPathParams = /** @class */ (function (_super) {
    __extends(PutIntegrationPathParams, _super);
    function PutIntegrationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" }),
        __metadata("design:type", String)
    ], PutIntegrationPathParams.prototype, "domainName", void 0);
    return PutIntegrationPathParams;
}(SpeakeasyBase));
export { PutIntegrationPathParams };
var PutIntegrationHeaders = /** @class */ (function (_super) {
    __extends(PutIntegrationHeaders, _super);
    function PutIntegrationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutIntegrationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutIntegrationHeaders;
}(SpeakeasyBase));
export { PutIntegrationHeaders };
// PutIntegrationRequestBodyFlowDefinition
/**
 * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
**/
var PutIntegrationRequestBodyFlowDefinition = /** @class */ (function (_super) {
    __extends(PutIntegrationRequestBodyFlowDefinition, _super);
    function PutIntegrationRequestBodyFlowDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBodyFlowDefinition.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FlowName" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBodyFlowDefinition.prototype, "flowName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsArn" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBodyFlowDefinition.prototype, "kmsArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceFlowConfig" }),
        __metadata("design:type", shared.SourceFlowConfig)
    ], PutIntegrationRequestBodyFlowDefinition.prototype, "sourceFlowConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tasks", elemType: shared.Task }),
        __metadata("design:type", Array)
    ], PutIntegrationRequestBodyFlowDefinition.prototype, "tasks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TriggerConfig" }),
        __metadata("design:type", shared.TriggerConfig)
    ], PutIntegrationRequestBodyFlowDefinition.prototype, "triggerConfig", void 0);
    return PutIntegrationRequestBodyFlowDefinition;
}(SpeakeasyBase));
export { PutIntegrationRequestBodyFlowDefinition };
var PutIntegrationRequestBody = /** @class */ (function (_super) {
    __extends(PutIntegrationRequestBody, _super);
    function PutIntegrationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FlowDefinition" }),
        __metadata("design:type", PutIntegrationRequestBodyFlowDefinition)
    ], PutIntegrationRequestBody.prototype, "flowDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectTypeName" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBody.prototype, "objectTypeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], PutIntegrationRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Uri" }),
        __metadata("design:type", String)
    ], PutIntegrationRequestBody.prototype, "uri", void 0);
    return PutIntegrationRequestBody;
}(SpeakeasyBase));
export { PutIntegrationRequestBody };
var PutIntegrationRequest = /** @class */ (function (_super) {
    __extends(PutIntegrationRequest, _super);
    function PutIntegrationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutIntegrationPathParams)
    ], PutIntegrationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutIntegrationHeaders)
    ], PutIntegrationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutIntegrationRequestBody)
    ], PutIntegrationRequest.prototype, "request", void 0);
    return PutIntegrationRequest;
}(SpeakeasyBase));
export { PutIntegrationRequest };
var PutIntegrationResponse = /** @class */ (function (_super) {
    __extends(PutIntegrationResponse, _super);
    function PutIntegrationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutIntegrationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutIntegrationResponse)
    ], PutIntegrationResponse.prototype, "putIntegrationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutIntegrationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponse.prototype, "throttlingException", void 0);
    return PutIntegrationResponse;
}(SpeakeasyBase));
export { PutIntegrationResponse };
