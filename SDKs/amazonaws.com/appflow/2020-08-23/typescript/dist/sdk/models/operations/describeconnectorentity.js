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
var DescribeConnectorEntityHeaders = /** @class */ (function (_super) {
    __extends(DescribeConnectorEntityHeaders, _super);
    function DescribeConnectorEntityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeConnectorEntityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeConnectorEntityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeConnectorEntityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeConnectorEntityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeConnectorEntityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeConnectorEntityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeConnectorEntityHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeConnectorEntityHeaders;
}(SpeakeasyBase));
export { DescribeConnectorEntityHeaders };
export var DescribeConnectorEntityRequestBodyConnectorTypeEnum;
(function (DescribeConnectorEntityRequestBodyConnectorTypeEnum) {
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Salesforce"] = "Salesforce";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Singular"] = "Singular";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Slack"] = "Slack";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Redshift"] = "Redshift";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["S3"] = "S3";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Marketo"] = "Marketo";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Googleanalytics"] = "Googleanalytics";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Zendesk"] = "Zendesk";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Servicenow"] = "Servicenow";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Datadog"] = "Datadog";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Trendmicro"] = "Trendmicro";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Snowflake"] = "Snowflake";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Dynatrace"] = "Dynatrace";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Infornexus"] = "Infornexus";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Amplitude"] = "Amplitude";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Veeva"] = "Veeva";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["EventBridge"] = "EventBridge";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["LookoutMetrics"] = "LookoutMetrics";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Upsolver"] = "Upsolver";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["Honeycode"] = "Honeycode";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["CustomerProfiles"] = "CustomerProfiles";
    DescribeConnectorEntityRequestBodyConnectorTypeEnum["SapoData"] = "SAPOData";
})(DescribeConnectorEntityRequestBodyConnectorTypeEnum || (DescribeConnectorEntityRequestBodyConnectorTypeEnum = {}));
var DescribeConnectorEntityRequestBody = /** @class */ (function (_super) {
    __extends(DescribeConnectorEntityRequestBody, _super);
    function DescribeConnectorEntityRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorEntityName" }),
        __metadata("design:type", String)
    ], DescribeConnectorEntityRequestBody.prototype, "connectorEntityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorProfileName" }),
        __metadata("design:type", String)
    ], DescribeConnectorEntityRequestBody.prototype, "connectorProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorType" }),
        __metadata("design:type", String)
    ], DescribeConnectorEntityRequestBody.prototype, "connectorType", void 0);
    return DescribeConnectorEntityRequestBody;
}(SpeakeasyBase));
export { DescribeConnectorEntityRequestBody };
var DescribeConnectorEntityRequest = /** @class */ (function (_super) {
    __extends(DescribeConnectorEntityRequest, _super);
    function DescribeConnectorEntityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeConnectorEntityHeaders)
    ], DescribeConnectorEntityRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeConnectorEntityRequestBody)
    ], DescribeConnectorEntityRequest.prototype, "request", void 0);
    return DescribeConnectorEntityRequest;
}(SpeakeasyBase));
export { DescribeConnectorEntityRequest };
var DescribeConnectorEntityResponse = /** @class */ (function (_super) {
    __extends(DescribeConnectorEntityResponse, _super);
    function DescribeConnectorEntityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeConnectorEntityResponse.prototype, "connectorAuthenticationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeConnectorEntityResponse.prototype, "connectorServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeConnectorEntityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeConnectorEntityResponse)
    ], DescribeConnectorEntityResponse.prototype, "describeConnectorEntityResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeConnectorEntityResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeConnectorEntityResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeConnectorEntityResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeConnectorEntityResponse.prototype, "validationException", void 0);
    return DescribeConnectorEntityResponse;
}(SpeakeasyBase));
export { DescribeConnectorEntityResponse };
