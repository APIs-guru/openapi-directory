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
var ListConnectorEntitiesHeaders = /** @class */ (function (_super) {
    __extends(ListConnectorEntitiesHeaders, _super);
    function ListConnectorEntitiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListConnectorEntitiesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListConnectorEntitiesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListConnectorEntitiesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListConnectorEntitiesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListConnectorEntitiesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListConnectorEntitiesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListConnectorEntitiesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListConnectorEntitiesHeaders;
}(SpeakeasyBase));
export { ListConnectorEntitiesHeaders };
export var ListConnectorEntitiesRequestBodyConnectorTypeEnum;
(function (ListConnectorEntitiesRequestBodyConnectorTypeEnum) {
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Salesforce"] = "Salesforce";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Singular"] = "Singular";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Slack"] = "Slack";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Redshift"] = "Redshift";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["S3"] = "S3";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Marketo"] = "Marketo";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Googleanalytics"] = "Googleanalytics";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Zendesk"] = "Zendesk";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Servicenow"] = "Servicenow";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Datadog"] = "Datadog";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Trendmicro"] = "Trendmicro";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Snowflake"] = "Snowflake";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Dynatrace"] = "Dynatrace";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Infornexus"] = "Infornexus";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Amplitude"] = "Amplitude";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Veeva"] = "Veeva";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["EventBridge"] = "EventBridge";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["LookoutMetrics"] = "LookoutMetrics";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Upsolver"] = "Upsolver";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["Honeycode"] = "Honeycode";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["CustomerProfiles"] = "CustomerProfiles";
    ListConnectorEntitiesRequestBodyConnectorTypeEnum["SapoData"] = "SAPOData";
})(ListConnectorEntitiesRequestBodyConnectorTypeEnum || (ListConnectorEntitiesRequestBodyConnectorTypeEnum = {}));
var ListConnectorEntitiesRequestBody = /** @class */ (function (_super) {
    __extends(ListConnectorEntitiesRequestBody, _super);
    function ListConnectorEntitiesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorProfileName" }),
        __metadata("design:type", String)
    ], ListConnectorEntitiesRequestBody.prototype, "connectorProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorType" }),
        __metadata("design:type", String)
    ], ListConnectorEntitiesRequestBody.prototype, "connectorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entitiesPath" }),
        __metadata("design:type", String)
    ], ListConnectorEntitiesRequestBody.prototype, "entitiesPath", void 0);
    return ListConnectorEntitiesRequestBody;
}(SpeakeasyBase));
export { ListConnectorEntitiesRequestBody };
var ListConnectorEntitiesRequest = /** @class */ (function (_super) {
    __extends(ListConnectorEntitiesRequest, _super);
    function ListConnectorEntitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConnectorEntitiesHeaders)
    ], ListConnectorEntitiesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListConnectorEntitiesRequestBody)
    ], ListConnectorEntitiesRequest.prototype, "request", void 0);
    return ListConnectorEntitiesRequest;
}(SpeakeasyBase));
export { ListConnectorEntitiesRequest };
var ListConnectorEntitiesResponse = /** @class */ (function (_super) {
    __extends(ListConnectorEntitiesResponse, _super);
    function ListConnectorEntitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListConnectorEntitiesResponse.prototype, "connectorAuthenticationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListConnectorEntitiesResponse.prototype, "connectorServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListConnectorEntitiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListConnectorEntitiesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListConnectorEntitiesResponse)
    ], ListConnectorEntitiesResponse.prototype, "listConnectorEntitiesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListConnectorEntitiesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListConnectorEntitiesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListConnectorEntitiesResponse.prototype, "validationException", void 0);
    return ListConnectorEntitiesResponse;
}(SpeakeasyBase));
export { ListConnectorEntitiesResponse };
