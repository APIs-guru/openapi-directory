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
var UpdateSecurityProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateSecurityProfilePathParams, _super);
    function UpdateSecurityProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=securityProfileName" }),
        __metadata("design:type", String)
    ], UpdateSecurityProfilePathParams.prototype, "securityProfileName", void 0);
    return UpdateSecurityProfilePathParams;
}(SpeakeasyBase));
export { UpdateSecurityProfilePathParams };
var UpdateSecurityProfileQueryParams = /** @class */ (function (_super) {
    __extends(UpdateSecurityProfileQueryParams, _super);
    function UpdateSecurityProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expectedVersion" }),
        __metadata("design:type", Number)
    ], UpdateSecurityProfileQueryParams.prototype, "expectedVersion", void 0);
    return UpdateSecurityProfileQueryParams;
}(SpeakeasyBase));
export { UpdateSecurityProfileQueryParams };
var UpdateSecurityProfileHeaders = /** @class */ (function (_super) {
    __extends(UpdateSecurityProfileHeaders, _super);
    function UpdateSecurityProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateSecurityProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateSecurityProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateSecurityProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateSecurityProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateSecurityProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateSecurityProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateSecurityProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateSecurityProfileHeaders;
}(SpeakeasyBase));
export { UpdateSecurityProfileHeaders };
var UpdateSecurityProfileRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSecurityProfileRequestBody, _super);
    function UpdateSecurityProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalMetricsToRetain" }),
        __metadata("design:type", Array)
    ], UpdateSecurityProfileRequestBody.prototype, "additionalMetricsToRetain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalMetricsToRetainV2", elemType: shared.MetricToRetain }),
        __metadata("design:type", Array)
    ], UpdateSecurityProfileRequestBody.prototype, "additionalMetricsToRetainV2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertTargets", elemType: shared.AlertTarget }),
        __metadata("design:type", Map)
    ], UpdateSecurityProfileRequestBody.prototype, "alertTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=behaviors", elemType: shared.Behavior }),
        __metadata("design:type", Array)
    ], UpdateSecurityProfileRequestBody.prototype, "behaviors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteAdditionalMetricsToRetain" }),
        __metadata("design:type", Boolean)
    ], UpdateSecurityProfileRequestBody.prototype, "deleteAdditionalMetricsToRetain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteAlertTargets" }),
        __metadata("design:type", Boolean)
    ], UpdateSecurityProfileRequestBody.prototype, "deleteAlertTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteBehaviors" }),
        __metadata("design:type", Boolean)
    ], UpdateSecurityProfileRequestBody.prototype, "deleteBehaviors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityProfileDescription" }),
        __metadata("design:type", String)
    ], UpdateSecurityProfileRequestBody.prototype, "securityProfileDescription", void 0);
    return UpdateSecurityProfileRequestBody;
}(SpeakeasyBase));
export { UpdateSecurityProfileRequestBody };
var UpdateSecurityProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateSecurityProfileRequest, _super);
    function UpdateSecurityProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSecurityProfilePathParams)
    ], UpdateSecurityProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSecurityProfileQueryParams)
    ], UpdateSecurityProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSecurityProfileHeaders)
    ], UpdateSecurityProfileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSecurityProfileRequestBody)
    ], UpdateSecurityProfileRequest.prototype, "request", void 0);
    return UpdateSecurityProfileRequest;
}(SpeakeasyBase));
export { UpdateSecurityProfileRequest };
var UpdateSecurityProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateSecurityProfileResponse, _super);
    function UpdateSecurityProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSecurityProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSecurityProfileResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSecurityProfileResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSecurityProfileResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSecurityProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSecurityProfileResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateSecurityProfileResponse)
    ], UpdateSecurityProfileResponse.prototype, "updateSecurityProfileResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSecurityProfileResponse.prototype, "versionConflictException", void 0);
    return UpdateSecurityProfileResponse;
}(SpeakeasyBase));
export { UpdateSecurityProfileResponse };
