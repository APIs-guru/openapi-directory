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
import { AmplitudeConnectorProfileCredentials } from "./amplitudeconnectorprofilecredentials";
import { DatadogConnectorProfileCredentials } from "./datadogconnectorprofilecredentials";
import { DynatraceConnectorProfileCredentials } from "./dynatraceconnectorprofilecredentials";
import { GoogleAnalyticsConnectorProfileCredentials } from "./googleanalyticsconnectorprofilecredentials";
import { HoneycodeConnectorProfileCredentials } from "./honeycodeconnectorprofilecredentials";
import { InforNexusConnectorProfileCredentials } from "./infornexusconnectorprofilecredentials";
import { MarketoConnectorProfileCredentials } from "./marketoconnectorprofilecredentials";
import { RedshiftConnectorProfileCredentials } from "./redshiftconnectorprofilecredentials";
import { SapoDataConnectorProfileCredentials } from "./sapodataconnectorprofilecredentials";
import { SalesforceConnectorProfileCredentials } from "./salesforceconnectorprofilecredentials";
import { ServiceNowConnectorProfileCredentials } from "./servicenowconnectorprofilecredentials";
import { SingularConnectorProfileCredentials } from "./singularconnectorprofilecredentials";
import { SlackConnectorProfileCredentials } from "./slackconnectorprofilecredentials";
import { SnowflakeConnectorProfileCredentials } from "./snowflakeconnectorprofilecredentials";
import { TrendmicroConnectorProfileCredentials } from "./trendmicroconnectorprofilecredentials";
import { VeevaConnectorProfileCredentials } from "./veevaconnectorprofilecredentials";
import { ZendeskConnectorProfileCredentials } from "./zendeskconnectorprofilecredentials";
// ConnectorProfileCredentials
/**
 *  The connector-specific credentials required by a connector.
**/
var ConnectorProfileCredentials = /** @class */ (function (_super) {
    __extends(ConnectorProfileCredentials, _super);
    function ConnectorProfileCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amplitude" }),
        __metadata("design:type", AmplitudeConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "amplitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Datadog" }),
        __metadata("design:type", DatadogConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "datadog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Dynatrace" }),
        __metadata("design:type", DynatraceConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "dynatrace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GoogleAnalytics" }),
        __metadata("design:type", GoogleAnalyticsConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "googleAnalytics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Honeycode" }),
        __metadata("design:type", HoneycodeConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "honeycode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InforNexus" }),
        __metadata("design:type", InforNexusConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "inforNexus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Marketo" }),
        __metadata("design:type", MarketoConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "marketo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Redshift" }),
        __metadata("design:type", RedshiftConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "redshift", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SAPOData" }),
        __metadata("design:type", SapoDataConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "sapoData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Salesforce" }),
        __metadata("design:type", SalesforceConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "salesforce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceNow" }),
        __metadata("design:type", ServiceNowConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "serviceNow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Singular" }),
        __metadata("design:type", SingularConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "singular", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Slack" }),
        __metadata("design:type", SlackConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "slack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Snowflake" }),
        __metadata("design:type", SnowflakeConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "snowflake", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Trendmicro" }),
        __metadata("design:type", TrendmicroConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "trendmicro", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Veeva" }),
        __metadata("design:type", VeevaConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "veeva", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Zendesk" }),
        __metadata("design:type", ZendeskConnectorProfileCredentials)
    ], ConnectorProfileCredentials.prototype, "zendesk", void 0);
    return ConnectorProfileCredentials;
}(SpeakeasyBase));
export { ConnectorProfileCredentials };
