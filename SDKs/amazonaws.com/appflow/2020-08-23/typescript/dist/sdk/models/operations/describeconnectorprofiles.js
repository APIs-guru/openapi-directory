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
var DescribeConnectorProfilesQueryParams = /** @class */ (function (_super) {
    __extends(DescribeConnectorProfilesQueryParams, _super);
    function DescribeConnectorProfilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], DescribeConnectorProfilesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeConnectorProfilesQueryParams.prototype, "nextToken", void 0);
    return DescribeConnectorProfilesQueryParams;
}(SpeakeasyBase));
export { DescribeConnectorProfilesQueryParams };
var DescribeConnectorProfilesHeaders = /** @class */ (function (_super) {
    __extends(DescribeConnectorProfilesHeaders, _super);
    function DescribeConnectorProfilesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeConnectorProfilesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeConnectorProfilesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeConnectorProfilesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeConnectorProfilesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeConnectorProfilesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeConnectorProfilesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeConnectorProfilesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeConnectorProfilesHeaders;
}(SpeakeasyBase));
export { DescribeConnectorProfilesHeaders };
export var DescribeConnectorProfilesRequestBodyConnectorTypeEnum;
(function (DescribeConnectorProfilesRequestBodyConnectorTypeEnum) {
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Salesforce"] = "Salesforce";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Singular"] = "Singular";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Slack"] = "Slack";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Redshift"] = "Redshift";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["S3"] = "S3";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Marketo"] = "Marketo";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Googleanalytics"] = "Googleanalytics";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Zendesk"] = "Zendesk";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Servicenow"] = "Servicenow";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Datadog"] = "Datadog";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Trendmicro"] = "Trendmicro";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Snowflake"] = "Snowflake";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Dynatrace"] = "Dynatrace";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Infornexus"] = "Infornexus";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Amplitude"] = "Amplitude";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Veeva"] = "Veeva";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["EventBridge"] = "EventBridge";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["LookoutMetrics"] = "LookoutMetrics";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Upsolver"] = "Upsolver";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["Honeycode"] = "Honeycode";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["CustomerProfiles"] = "CustomerProfiles";
    DescribeConnectorProfilesRequestBodyConnectorTypeEnum["SapoData"] = "SAPOData";
})(DescribeConnectorProfilesRequestBodyConnectorTypeEnum || (DescribeConnectorProfilesRequestBodyConnectorTypeEnum = {}));
var DescribeConnectorProfilesRequestBody = /** @class */ (function (_super) {
    __extends(DescribeConnectorProfilesRequestBody, _super);
    function DescribeConnectorProfilesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorProfileNames" }),
        __metadata("design:type", Array)
    ], DescribeConnectorProfilesRequestBody.prototype, "connectorProfileNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorType" }),
        __metadata("design:type", String)
    ], DescribeConnectorProfilesRequestBody.prototype, "connectorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], DescribeConnectorProfilesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeConnectorProfilesRequestBody.prototype, "nextToken", void 0);
    return DescribeConnectorProfilesRequestBody;
}(SpeakeasyBase));
export { DescribeConnectorProfilesRequestBody };
var DescribeConnectorProfilesRequest = /** @class */ (function (_super) {
    __extends(DescribeConnectorProfilesRequest, _super);
    function DescribeConnectorProfilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeConnectorProfilesQueryParams)
    ], DescribeConnectorProfilesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeConnectorProfilesHeaders)
    ], DescribeConnectorProfilesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeConnectorProfilesRequestBody)
    ], DescribeConnectorProfilesRequest.prototype, "request", void 0);
    return DescribeConnectorProfilesRequest;
}(SpeakeasyBase));
export { DescribeConnectorProfilesRequest };
var DescribeConnectorProfilesResponse = /** @class */ (function (_super) {
    __extends(DescribeConnectorProfilesResponse, _super);
    function DescribeConnectorProfilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeConnectorProfilesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeConnectorProfilesResponse)
    ], DescribeConnectorProfilesResponse.prototype, "describeConnectorProfilesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeConnectorProfilesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeConnectorProfilesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeConnectorProfilesResponse.prototype, "validationException", void 0);
    return DescribeConnectorProfilesResponse;
}(SpeakeasyBase));
export { DescribeConnectorProfilesResponse };
