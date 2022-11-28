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
var CreateConnectorProfileHeaders = /** @class */ (function (_super) {
    __extends(CreateConnectorProfileHeaders, _super);
    function CreateConnectorProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateConnectorProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateConnectorProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateConnectorProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateConnectorProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateConnectorProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateConnectorProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateConnectorProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateConnectorProfileHeaders;
}(SpeakeasyBase));
export { CreateConnectorProfileHeaders };
export var CreateConnectorProfileRequestBodyConnectionModeEnum;
(function (CreateConnectorProfileRequestBodyConnectionModeEnum) {
    CreateConnectorProfileRequestBodyConnectionModeEnum["Public"] = "Public";
    CreateConnectorProfileRequestBodyConnectionModeEnum["Private"] = "Private";
})(CreateConnectorProfileRequestBodyConnectionModeEnum || (CreateConnectorProfileRequestBodyConnectionModeEnum = {}));
// CreateConnectorProfileRequestBodyConnectorProfileConfig
/**
 *  Defines the connector-specific configuration and credentials for the connector profile.
**/
var CreateConnectorProfileRequestBodyConnectorProfileConfig = /** @class */ (function (_super) {
    __extends(CreateConnectorProfileRequestBodyConnectorProfileConfig, _super);
    function CreateConnectorProfileRequestBodyConnectorProfileConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorProfileCredentials" }),
        __metadata("design:type", shared.ConnectorProfileCredentials)
    ], CreateConnectorProfileRequestBodyConnectorProfileConfig.prototype, "connectorProfileCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorProfileProperties" }),
        __metadata("design:type", shared.ConnectorProfileProperties)
    ], CreateConnectorProfileRequestBodyConnectorProfileConfig.prototype, "connectorProfileProperties", void 0);
    return CreateConnectorProfileRequestBodyConnectorProfileConfig;
}(SpeakeasyBase));
export { CreateConnectorProfileRequestBodyConnectorProfileConfig };
export var CreateConnectorProfileRequestBodyConnectorTypeEnum;
(function (CreateConnectorProfileRequestBodyConnectorTypeEnum) {
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Salesforce"] = "Salesforce";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Singular"] = "Singular";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Slack"] = "Slack";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Redshift"] = "Redshift";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["S3"] = "S3";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Marketo"] = "Marketo";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Googleanalytics"] = "Googleanalytics";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Zendesk"] = "Zendesk";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Servicenow"] = "Servicenow";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Datadog"] = "Datadog";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Trendmicro"] = "Trendmicro";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Snowflake"] = "Snowflake";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Dynatrace"] = "Dynatrace";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Infornexus"] = "Infornexus";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Amplitude"] = "Amplitude";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Veeva"] = "Veeva";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["EventBridge"] = "EventBridge";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["LookoutMetrics"] = "LookoutMetrics";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Upsolver"] = "Upsolver";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["Honeycode"] = "Honeycode";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["CustomerProfiles"] = "CustomerProfiles";
    CreateConnectorProfileRequestBodyConnectorTypeEnum["SapoData"] = "SAPOData";
})(CreateConnectorProfileRequestBodyConnectorTypeEnum || (CreateConnectorProfileRequestBodyConnectorTypeEnum = {}));
var CreateConnectorProfileRequestBody = /** @class */ (function (_super) {
    __extends(CreateConnectorProfileRequestBody, _super);
    function CreateConnectorProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionMode" }),
        __metadata("design:type", String)
    ], CreateConnectorProfileRequestBody.prototype, "connectionMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorProfileConfig" }),
        __metadata("design:type", CreateConnectorProfileRequestBodyConnectorProfileConfig)
    ], CreateConnectorProfileRequestBody.prototype, "connectorProfileConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorProfileName" }),
        __metadata("design:type", String)
    ], CreateConnectorProfileRequestBody.prototype, "connectorProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorType" }),
        __metadata("design:type", String)
    ], CreateConnectorProfileRequestBody.prototype, "connectorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsArn" }),
        __metadata("design:type", String)
    ], CreateConnectorProfileRequestBody.prototype, "kmsArn", void 0);
    return CreateConnectorProfileRequestBody;
}(SpeakeasyBase));
export { CreateConnectorProfileRequestBody };
var CreateConnectorProfileRequest = /** @class */ (function (_super) {
    __extends(CreateConnectorProfileRequest, _super);
    function CreateConnectorProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateConnectorProfileHeaders)
    ], CreateConnectorProfileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateConnectorProfileRequestBody)
    ], CreateConnectorProfileRequest.prototype, "request", void 0);
    return CreateConnectorProfileRequest;
}(SpeakeasyBase));
export { CreateConnectorProfileRequest };
var CreateConnectorProfileResponse = /** @class */ (function (_super) {
    __extends(CreateConnectorProfileResponse, _super);
    function CreateConnectorProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorProfileResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorProfileResponse.prototype, "connectorAuthenticationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateConnectorProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateConnectorProfileResponse)
    ], CreateConnectorProfileResponse.prototype, "createConnectorProfileResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorProfileResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorProfileResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateConnectorProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorProfileResponse.prototype, "validationException", void 0);
    return CreateConnectorProfileResponse;
}(SpeakeasyBase));
export { CreateConnectorProfileResponse };
