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
import { ConnectionStateEnum } from "./connectionstateenum";
import { HasLogicalRedundancyEnum } from "./haslogicalredundancyenum";
import { MacSecKey } from "./macseckey";
import { Tag } from "./tag";
// Connection
/**
 * Information about an Direct Connect connection.
**/
var Connection = /** @class */ (function (_super) {
    __extends(Connection, _super);
    function Connection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsDevice" }),
        __metadata("design:type", String)
    ], Connection.prototype, "awsDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsDeviceV2" }),
        __metadata("design:type", String)
    ], Connection.prototype, "awsDeviceV2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsLogicalDeviceId" }),
        __metadata("design:type", String)
    ], Connection.prototype, "awsLogicalDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidth" }),
        __metadata("design:type", String)
    ], Connection.prototype, "bandwidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionId" }),
        __metadata("design:type", String)
    ], Connection.prototype, "connectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionName" }),
        __metadata("design:type", String)
    ], Connection.prototype, "connectionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionState" }),
        __metadata("design:type", String)
    ], Connection.prototype, "connectionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionMode" }),
        __metadata("design:type", String)
    ], Connection.prototype, "encryptionMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasLogicalRedundancy" }),
        __metadata("design:type", String)
    ], Connection.prototype, "hasLogicalRedundancy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jumboFrameCapable" }),
        __metadata("design:type", Boolean)
    ], Connection.prototype, "jumboFrameCapable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lagId" }),
        __metadata("design:type", String)
    ], Connection.prototype, "lagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loaIssueTime" }),
        __metadata("design:type", Date)
    ], Connection.prototype, "loaIssueTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Connection.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=macSecCapable" }),
        __metadata("design:type", Boolean)
    ], Connection.prototype, "macSecCapable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=macSecKeys", elemType: MacSecKey }),
        __metadata("design:type", Array)
    ], Connection.prototype, "macSecKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerAccount" }),
        __metadata("design:type", String)
    ], Connection.prototype, "ownerAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerName" }),
        __metadata("design:type", String)
    ], Connection.prototype, "partnerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portEncryptionStatus" }),
        __metadata("design:type", String)
    ], Connection.prototype, "portEncryptionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerName" }),
        __metadata("design:type", String)
    ], Connection.prototype, "providerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], Connection.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Connection.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], Connection.prototype, "vlan", void 0);
    return Connection;
}(SpeakeasyBase));
export { Connection };
