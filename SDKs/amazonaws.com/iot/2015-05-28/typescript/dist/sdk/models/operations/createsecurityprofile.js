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
var CreateSecurityProfilePathParams = /** @class */ (function (_super) {
    __extends(CreateSecurityProfilePathParams, _super);
    function CreateSecurityProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=securityProfileName" }),
        __metadata("design:type", String)
    ], CreateSecurityProfilePathParams.prototype, "securityProfileName", void 0);
    return CreateSecurityProfilePathParams;
}(SpeakeasyBase));
export { CreateSecurityProfilePathParams };
var CreateSecurityProfileHeaders = /** @class */ (function (_super) {
    __extends(CreateSecurityProfileHeaders, _super);
    function CreateSecurityProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSecurityProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSecurityProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSecurityProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSecurityProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSecurityProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSecurityProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSecurityProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateSecurityProfileHeaders;
}(SpeakeasyBase));
export { CreateSecurityProfileHeaders };
var CreateSecurityProfileRequestBody = /** @class */ (function (_super) {
    __extends(CreateSecurityProfileRequestBody, _super);
    function CreateSecurityProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalMetricsToRetain" }),
        __metadata("design:type", Array)
    ], CreateSecurityProfileRequestBody.prototype, "additionalMetricsToRetain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalMetricsToRetainV2", elemType: shared.MetricToRetain }),
        __metadata("design:type", Array)
    ], CreateSecurityProfileRequestBody.prototype, "additionalMetricsToRetainV2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertTargets", elemType: shared.AlertTarget }),
        __metadata("design:type", Map)
    ], CreateSecurityProfileRequestBody.prototype, "alertTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=behaviors", elemType: shared.Behavior }),
        __metadata("design:type", Array)
    ], CreateSecurityProfileRequestBody.prototype, "behaviors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityProfileDescription" }),
        __metadata("design:type", String)
    ], CreateSecurityProfileRequestBody.prototype, "securityProfileDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateSecurityProfileRequestBody.prototype, "tags", void 0);
    return CreateSecurityProfileRequestBody;
}(SpeakeasyBase));
export { CreateSecurityProfileRequestBody };
var CreateSecurityProfileRequest = /** @class */ (function (_super) {
    __extends(CreateSecurityProfileRequest, _super);
    function CreateSecurityProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSecurityProfilePathParams)
    ], CreateSecurityProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSecurityProfileHeaders)
    ], CreateSecurityProfileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSecurityProfileRequestBody)
    ], CreateSecurityProfileRequest.prototype, "request", void 0);
    return CreateSecurityProfileRequest;
}(SpeakeasyBase));
export { CreateSecurityProfileRequest };
var CreateSecurityProfileResponse = /** @class */ (function (_super) {
    __extends(CreateSecurityProfileResponse, _super);
    function CreateSecurityProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSecurityProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateSecurityProfileResponse)
    ], CreateSecurityProfileResponse.prototype, "createSecurityProfileResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSecurityProfileResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSecurityProfileResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSecurityProfileResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSecurityProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSecurityProfileResponse.prototype, "throttlingException", void 0);
    return CreateSecurityProfileResponse;
}(SpeakeasyBase));
export { CreateSecurityProfileResponse };
