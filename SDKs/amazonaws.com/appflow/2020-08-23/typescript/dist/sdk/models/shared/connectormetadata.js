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
import { GoogleAnalyticsMetadata } from "./googleanalyticsmetadata";
import { HoneycodeMetadata } from "./honeycodemetadata";
import { SalesforceMetadata } from "./salesforcemetadata";
import { SlackMetadata } from "./slackmetadata";
import { SnowflakeMetadata } from "./snowflakemetadata";
import { ZendeskMetadata } from "./zendeskmetadata";
// ConnectorMetadata
/**
 *  A structure to specify connector-specific metadata such as <code>oAuthScopes</code>, <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on.
**/
var ConnectorMetadata = /** @class */ (function (_super) {
    __extends(ConnectorMetadata, _super);
    function ConnectorMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amplitude" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "amplitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerProfiles" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "customerProfiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Datadog" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "datadog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Dynatrace" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "dynatrace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventBridge" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "eventBridge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GoogleAnalytics" }),
        __metadata("design:type", GoogleAnalyticsMetadata)
    ], ConnectorMetadata.prototype, "googleAnalytics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Honeycode" }),
        __metadata("design:type", HoneycodeMetadata)
    ], ConnectorMetadata.prototype, "honeycode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InforNexus" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "inforNexus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Marketo" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "marketo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Redshift" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "redshift", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "s3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SAPOData" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "sapoData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Salesforce" }),
        __metadata("design:type", SalesforceMetadata)
    ], ConnectorMetadata.prototype, "salesforce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceNow" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "serviceNow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Singular" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "singular", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Slack" }),
        __metadata("design:type", SlackMetadata)
    ], ConnectorMetadata.prototype, "slack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Snowflake" }),
        __metadata("design:type", SnowflakeMetadata)
    ], ConnectorMetadata.prototype, "snowflake", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Trendmicro" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "trendmicro", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Upsolver" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "upsolver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Veeva" }),
        __metadata("design:type", Map)
    ], ConnectorMetadata.prototype, "veeva", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Zendesk" }),
        __metadata("design:type", ZendeskMetadata)
    ], ConnectorMetadata.prototype, "zendesk", void 0);
    return ConnectorMetadata;
}(SpeakeasyBase));
export { ConnectorMetadata };
