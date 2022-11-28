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
import { CustomerProfilesDestinationProperties } from "./customerprofilesdestinationproperties";
import { EventBridgeDestinationProperties } from "./eventbridgedestinationproperties";
import { HoneycodeDestinationProperties } from "./honeycodedestinationproperties";
import { RedshiftDestinationProperties } from "./redshiftdestinationproperties";
import { S3DestinationProperties } from "./s3destinationproperties";
import { SalesforceDestinationProperties } from "./salesforcedestinationproperties";
import { SnowflakeDestinationProperties } from "./snowflakedestinationproperties";
import { UpsolverDestinationProperties } from "./upsolverdestinationproperties";
import { ZendeskDestinationProperties } from "./zendeskdestinationproperties";
// DestinationConnectorProperties
/**
 *  This stores the information that is required to query a particular connector.
**/
var DestinationConnectorProperties = /** @class */ (function (_super) {
    __extends(DestinationConnectorProperties, _super);
    function DestinationConnectorProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerProfiles" }),
        __metadata("design:type", CustomerProfilesDestinationProperties)
    ], DestinationConnectorProperties.prototype, "customerProfiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventBridge" }),
        __metadata("design:type", EventBridgeDestinationProperties)
    ], DestinationConnectorProperties.prototype, "eventBridge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Honeycode" }),
        __metadata("design:type", HoneycodeDestinationProperties)
    ], DestinationConnectorProperties.prototype, "honeycode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LookoutMetrics" }),
        __metadata("design:type", Map)
    ], DestinationConnectorProperties.prototype, "lookoutMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Redshift" }),
        __metadata("design:type", RedshiftDestinationProperties)
    ], DestinationConnectorProperties.prototype, "redshift", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3" }),
        __metadata("design:type", S3DestinationProperties)
    ], DestinationConnectorProperties.prototype, "s3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Salesforce" }),
        __metadata("design:type", SalesforceDestinationProperties)
    ], DestinationConnectorProperties.prototype, "salesforce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Snowflake" }),
        __metadata("design:type", SnowflakeDestinationProperties)
    ], DestinationConnectorProperties.prototype, "snowflake", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Upsolver" }),
        __metadata("design:type", UpsolverDestinationProperties)
    ], DestinationConnectorProperties.prototype, "upsolver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Zendesk" }),
        __metadata("design:type", ZendeskDestinationProperties)
    ], DestinationConnectorProperties.prototype, "zendesk", void 0);
    return DestinationConnectorProperties;
}(SpeakeasyBase));
export { DestinationConnectorProperties };
