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
import { AmplitudeSourceProperties } from "./amplitudesourceproperties";
import { DatadogSourceProperties } from "./datadogsourceproperties";
import { DynatraceSourceProperties } from "./dynatracesourceproperties";
import { GoogleAnalyticsSourceProperties } from "./googleanalyticssourceproperties";
import { InforNexusSourceProperties } from "./infornexussourceproperties";
import { MarketoSourceProperties } from "./marketosourceproperties";
import { S3SourceProperties } from "./s3sourceproperties";
import { SapoDataSourceProperties } from "./sapodatasourceproperties";
import { SalesforceSourceProperties } from "./salesforcesourceproperties";
import { ServiceNowSourceProperties } from "./servicenowsourceproperties";
import { SingularSourceProperties } from "./singularsourceproperties";
import { SlackSourceProperties } from "./slacksourceproperties";
import { TrendmicroSourceProperties } from "./trendmicrosourceproperties";
import { VeevaSourceProperties } from "./veevasourceproperties";
import { ZendeskSourceProperties } from "./zendesksourceproperties";
// SourceConnectorProperties
/**
 *  Specifies the information that is required to query a particular connector.
**/
var SourceConnectorProperties = /** @class */ (function (_super) {
    __extends(SourceConnectorProperties, _super);
    function SourceConnectorProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amplitude" }),
        __metadata("design:type", AmplitudeSourceProperties)
    ], SourceConnectorProperties.prototype, "amplitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Datadog" }),
        __metadata("design:type", DatadogSourceProperties)
    ], SourceConnectorProperties.prototype, "datadog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Dynatrace" }),
        __metadata("design:type", DynatraceSourceProperties)
    ], SourceConnectorProperties.prototype, "dynatrace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GoogleAnalytics" }),
        __metadata("design:type", GoogleAnalyticsSourceProperties)
    ], SourceConnectorProperties.prototype, "googleAnalytics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InforNexus" }),
        __metadata("design:type", InforNexusSourceProperties)
    ], SourceConnectorProperties.prototype, "inforNexus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Marketo" }),
        __metadata("design:type", MarketoSourceProperties)
    ], SourceConnectorProperties.prototype, "marketo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3" }),
        __metadata("design:type", S3SourceProperties)
    ], SourceConnectorProperties.prototype, "s3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SAPOData" }),
        __metadata("design:type", SapoDataSourceProperties)
    ], SourceConnectorProperties.prototype, "sapoData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Salesforce" }),
        __metadata("design:type", SalesforceSourceProperties)
    ], SourceConnectorProperties.prototype, "salesforce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceNow" }),
        __metadata("design:type", ServiceNowSourceProperties)
    ], SourceConnectorProperties.prototype, "serviceNow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Singular" }),
        __metadata("design:type", SingularSourceProperties)
    ], SourceConnectorProperties.prototype, "singular", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Slack" }),
        __metadata("design:type", SlackSourceProperties)
    ], SourceConnectorProperties.prototype, "slack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Trendmicro" }),
        __metadata("design:type", TrendmicroSourceProperties)
    ], SourceConnectorProperties.prototype, "trendmicro", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Veeva" }),
        __metadata("design:type", VeevaSourceProperties)
    ], SourceConnectorProperties.prototype, "veeva", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Zendesk" }),
        __metadata("design:type", ZendeskSourceProperties)
    ], SourceConnectorProperties.prototype, "zendesk", void 0);
    return SourceConnectorProperties;
}(SpeakeasyBase));
export { SourceConnectorProperties };
