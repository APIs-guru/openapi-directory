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
import { DatadogConnectorProfileProperties } from "./datadogconnectorprofileproperties";
import { DynatraceConnectorProfileProperties } from "./dynatraceconnectorprofileproperties";
import { InforNexusConnectorProfileProperties } from "./infornexusconnectorprofileproperties";
import { MarketoConnectorProfileProperties } from "./marketoconnectorprofileproperties";
import { RedshiftConnectorProfileProperties } from "./redshiftconnectorprofileproperties";
import { SapoDataConnectorProfileProperties } from "./sapodataconnectorprofileproperties";
import { SalesforceConnectorProfileProperties } from "./salesforceconnectorprofileproperties";
import { ServiceNowConnectorProfileProperties } from "./servicenowconnectorprofileproperties";
import { SlackConnectorProfileProperties } from "./slackconnectorprofileproperties";
import { SnowflakeConnectorProfileProperties } from "./snowflakeconnectorprofileproperties";
import { VeevaConnectorProfileProperties } from "./veevaconnectorprofileproperties";
import { ZendeskConnectorProfileProperties } from "./zendeskconnectorprofileproperties";
// ConnectorProfileProperties
/**
 *  The connector-specific profile properties required by each connector.
**/
var ConnectorProfileProperties = /** @class */ (function (_super) {
    __extends(ConnectorProfileProperties, _super);
    function ConnectorProfileProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amplitude" }),
        __metadata("design:type", Map)
    ], ConnectorProfileProperties.prototype, "amplitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Datadog" }),
        __metadata("design:type", DatadogConnectorProfileProperties)
    ], ConnectorProfileProperties.prototype, "datadog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Dynatrace" }),
        __metadata("design:type", DynatraceConnectorProfileProperties)
    ], ConnectorProfileProperties.prototype, "dynatrace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GoogleAnalytics" }),
        __metadata("design:type", Map)
    ], ConnectorProfileProperties.prototype, "googleAnalytics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Honeycode" }),
        __metadata("design:type", Map)
    ], ConnectorProfileProperties.prototype, "honeycode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InforNexus" }),
        __metadata("design:type", InforNexusConnectorProfileProperties)
    ], ConnectorProfileProperties.prototype, "inforNexus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Marketo" }),
        __metadata("design:type", MarketoConnectorProfileProperties)
    ], ConnectorProfileProperties.prototype, "marketo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Redshift" }),
        __metadata("design:type", RedshiftConnectorProfileProperties)
    ], ConnectorProfileProperties.prototype, "redshift", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SAPOData" }),
        __metadata("design:type", SapoDataConnectorProfileProperties)
    ], ConnectorProfileProperties.prototype, "sapoData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Salesforce" }),
        __metadata("design:type", SalesforceConnectorProfileProperties)
    ], ConnectorProfileProperties.prototype, "salesforce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceNow" }),
        __metadata("design:type", ServiceNowConnectorProfileProperties)
    ], ConnectorProfileProperties.prototype, "serviceNow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Singular" }),
        __metadata("design:type", Map)
    ], ConnectorProfileProperties.prototype, "singular", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Slack" }),
        __metadata("design:type", SlackConnectorProfileProperties)
    ], ConnectorProfileProperties.prototype, "slack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Snowflake" }),
        __metadata("design:type", SnowflakeConnectorProfileProperties)
    ], ConnectorProfileProperties.prototype, "snowflake", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Trendmicro" }),
        __metadata("design:type", Map)
    ], ConnectorProfileProperties.prototype, "trendmicro", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Veeva" }),
        __metadata("design:type", VeevaConnectorProfileProperties)
    ], ConnectorProfileProperties.prototype, "veeva", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Zendesk" }),
        __metadata("design:type", ZendeskConnectorProfileProperties)
    ], ConnectorProfileProperties.prototype, "zendesk", void 0);
    return ConnectorProfileProperties;
}(SpeakeasyBase));
export { ConnectorProfileProperties };
