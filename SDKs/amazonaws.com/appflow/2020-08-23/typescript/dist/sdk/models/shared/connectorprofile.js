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
import { ConnectionModeEnum } from "./connectionmodeenum";
import { ConnectorProfileProperties } from "./connectorprofileproperties";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { PrivateConnectionProvisioningState } from "./privateconnectionprovisioningstate";
// ConnectorProfile
/**
 *  Describes an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. To keep the API intuitive and extensible, the fields that are common to all types of connector profiles are explicitly specified at the top level. The rest of the connector-specific properties are available via the <code>connectorProfileProperties</code> field.
**/
var ConnectorProfile = /** @class */ (function (_super) {
    __extends(ConnectorProfile, _super);
    function ConnectorProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionMode" }),
        __metadata("design:type", String)
    ], ConnectorProfile.prototype, "connectionMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorProfileArn" }),
        __metadata("design:type", String)
    ], ConnectorProfile.prototype, "connectorProfileArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorProfileName" }),
        __metadata("design:type", String)
    ], ConnectorProfile.prototype, "connectorProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorProfileProperties" }),
        __metadata("design:type", ConnectorProfileProperties)
    ], ConnectorProfile.prototype, "connectorProfileProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorType" }),
        __metadata("design:type", String)
    ], ConnectorProfile.prototype, "connectorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], ConnectorProfile.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentialsArn" }),
        __metadata("design:type", String)
    ], ConnectorProfile.prototype, "credentialsArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" }),
        __metadata("design:type", Date)
    ], ConnectorProfile.prototype, "lastUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateConnectionProvisioningState" }),
        __metadata("design:type", PrivateConnectionProvisioningState)
    ], ConnectorProfile.prototype, "privateConnectionProvisioningState", void 0);
    return ConnectorProfile;
}(SpeakeasyBase));
export { ConnectorProfile };
