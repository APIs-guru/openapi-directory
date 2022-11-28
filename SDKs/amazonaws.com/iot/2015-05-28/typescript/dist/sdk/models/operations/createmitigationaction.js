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
var CreateMitigationActionPathParams = /** @class */ (function (_super) {
    __extends(CreateMitigationActionPathParams, _super);
    function CreateMitigationActionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionName" }),
        __metadata("design:type", String)
    ], CreateMitigationActionPathParams.prototype, "actionName", void 0);
    return CreateMitigationActionPathParams;
}(SpeakeasyBase));
export { CreateMitigationActionPathParams };
var CreateMitigationActionHeaders = /** @class */ (function (_super) {
    __extends(CreateMitigationActionHeaders, _super);
    function CreateMitigationActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateMitigationActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateMitigationActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateMitigationActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateMitigationActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateMitigationActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateMitigationActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateMitigationActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateMitigationActionHeaders;
}(SpeakeasyBase));
export { CreateMitigationActionHeaders };
// CreateMitigationActionRequestBodyActionParams
/**
 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
**/
var CreateMitigationActionRequestBodyActionParams = /** @class */ (function (_super) {
    __extends(CreateMitigationActionRequestBodyActionParams, _super);
    function CreateMitigationActionRequestBodyActionParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addThingsToThingGroupParams" }),
        __metadata("design:type", shared.AddThingsToThingGroupParams)
    ], CreateMitigationActionRequestBodyActionParams.prototype, "addThingsToThingGroupParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableIoTLoggingParams" }),
        __metadata("design:type", shared.EnableIoTLoggingParams)
    ], CreateMitigationActionRequestBodyActionParams.prototype, "enableIoTLoggingParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishFindingToSnsParams" }),
        __metadata("design:type", shared.PublishFindingToSnsParams)
    ], CreateMitigationActionRequestBodyActionParams.prototype, "publishFindingToSnsParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceDefaultPolicyVersionParams" }),
        __metadata("design:type", shared.ReplaceDefaultPolicyVersionParams)
    ], CreateMitigationActionRequestBodyActionParams.prototype, "replaceDefaultPolicyVersionParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateCACertificateParams" }),
        __metadata("design:type", shared.UpdateCaCertificateParams)
    ], CreateMitigationActionRequestBodyActionParams.prototype, "updateCaCertificateParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDeviceCertificateParams" }),
        __metadata("design:type", shared.UpdateDeviceCertificateParams)
    ], CreateMitigationActionRequestBodyActionParams.prototype, "updateDeviceCertificateParams", void 0);
    return CreateMitigationActionRequestBodyActionParams;
}(SpeakeasyBase));
export { CreateMitigationActionRequestBodyActionParams };
var CreateMitigationActionRequestBody = /** @class */ (function (_super) {
    __extends(CreateMitigationActionRequestBody, _super);
    function CreateMitigationActionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionParams" }),
        __metadata("design:type", CreateMitigationActionRequestBodyActionParams)
    ], CreateMitigationActionRequestBody.prototype, "actionParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], CreateMitigationActionRequestBody.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateMitigationActionRequestBody.prototype, "tags", void 0);
    return CreateMitigationActionRequestBody;
}(SpeakeasyBase));
export { CreateMitigationActionRequestBody };
var CreateMitigationActionRequest = /** @class */ (function (_super) {
    __extends(CreateMitigationActionRequest, _super);
    function CreateMitigationActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMitigationActionPathParams)
    ], CreateMitigationActionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMitigationActionHeaders)
    ], CreateMitigationActionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateMitigationActionRequestBody)
    ], CreateMitigationActionRequest.prototype, "request", void 0);
    return CreateMitigationActionRequest;
}(SpeakeasyBase));
export { CreateMitigationActionRequest };
var CreateMitigationActionResponse = /** @class */ (function (_super) {
    __extends(CreateMitigationActionResponse, _super);
    function CreateMitigationActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateMitigationActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateMitigationActionResponse)
    ], CreateMitigationActionResponse.prototype, "createMitigationActionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMitigationActionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMitigationActionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMitigationActionResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMitigationActionResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateMitigationActionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMitigationActionResponse.prototype, "throttlingException", void 0);
    return CreateMitigationActionResponse;
}(SpeakeasyBase));
export { CreateMitigationActionResponse };
