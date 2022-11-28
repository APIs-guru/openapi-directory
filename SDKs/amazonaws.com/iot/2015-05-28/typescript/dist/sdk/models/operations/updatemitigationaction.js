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
var UpdateMitigationActionPathParams = /** @class */ (function (_super) {
    __extends(UpdateMitigationActionPathParams, _super);
    function UpdateMitigationActionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionName" }),
        __metadata("design:type", String)
    ], UpdateMitigationActionPathParams.prototype, "actionName", void 0);
    return UpdateMitigationActionPathParams;
}(SpeakeasyBase));
export { UpdateMitigationActionPathParams };
var UpdateMitigationActionHeaders = /** @class */ (function (_super) {
    __extends(UpdateMitigationActionHeaders, _super);
    function UpdateMitigationActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateMitigationActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateMitigationActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateMitigationActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateMitigationActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateMitigationActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateMitigationActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateMitigationActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateMitigationActionHeaders;
}(SpeakeasyBase));
export { UpdateMitigationActionHeaders };
// UpdateMitigationActionRequestBodyActionParams
/**
 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
**/
var UpdateMitigationActionRequestBodyActionParams = /** @class */ (function (_super) {
    __extends(UpdateMitigationActionRequestBodyActionParams, _super);
    function UpdateMitigationActionRequestBodyActionParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addThingsToThingGroupParams" }),
        __metadata("design:type", shared.AddThingsToThingGroupParams)
    ], UpdateMitigationActionRequestBodyActionParams.prototype, "addThingsToThingGroupParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableIoTLoggingParams" }),
        __metadata("design:type", shared.EnableIoTLoggingParams)
    ], UpdateMitigationActionRequestBodyActionParams.prototype, "enableIoTLoggingParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishFindingToSnsParams" }),
        __metadata("design:type", shared.PublishFindingToSnsParams)
    ], UpdateMitigationActionRequestBodyActionParams.prototype, "publishFindingToSnsParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceDefaultPolicyVersionParams" }),
        __metadata("design:type", shared.ReplaceDefaultPolicyVersionParams)
    ], UpdateMitigationActionRequestBodyActionParams.prototype, "replaceDefaultPolicyVersionParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateCACertificateParams" }),
        __metadata("design:type", shared.UpdateCaCertificateParams)
    ], UpdateMitigationActionRequestBodyActionParams.prototype, "updateCaCertificateParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDeviceCertificateParams" }),
        __metadata("design:type", shared.UpdateDeviceCertificateParams)
    ], UpdateMitigationActionRequestBodyActionParams.prototype, "updateDeviceCertificateParams", void 0);
    return UpdateMitigationActionRequestBodyActionParams;
}(SpeakeasyBase));
export { UpdateMitigationActionRequestBodyActionParams };
var UpdateMitigationActionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateMitigationActionRequestBody, _super);
    function UpdateMitigationActionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionParams" }),
        __metadata("design:type", UpdateMitigationActionRequestBodyActionParams)
    ], UpdateMitigationActionRequestBody.prototype, "actionParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], UpdateMitigationActionRequestBody.prototype, "roleArn", void 0);
    return UpdateMitigationActionRequestBody;
}(SpeakeasyBase));
export { UpdateMitigationActionRequestBody };
var UpdateMitigationActionRequest = /** @class */ (function (_super) {
    __extends(UpdateMitigationActionRequest, _super);
    function UpdateMitigationActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMitigationActionPathParams)
    ], UpdateMitigationActionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMitigationActionHeaders)
    ], UpdateMitigationActionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateMitigationActionRequestBody)
    ], UpdateMitigationActionRequest.prototype, "request", void 0);
    return UpdateMitigationActionRequest;
}(SpeakeasyBase));
export { UpdateMitigationActionRequest };
var UpdateMitigationActionResponse = /** @class */ (function (_super) {
    __extends(UpdateMitigationActionResponse, _super);
    function UpdateMitigationActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateMitigationActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMitigationActionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMitigationActionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMitigationActionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateMitigationActionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMitigationActionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateMitigationActionResponse)
    ], UpdateMitigationActionResponse.prototype, "updateMitigationActionResponse", void 0);
    return UpdateMitigationActionResponse;
}(SpeakeasyBase));
export { UpdateMitigationActionResponse };
