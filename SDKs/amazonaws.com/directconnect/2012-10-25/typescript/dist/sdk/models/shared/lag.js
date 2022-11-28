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
import { Connection } from "./connection";
import { HasLogicalRedundancyEnum } from "./haslogicalredundancyenum";
import { LagStateEnum } from "./lagstateenum";
import { MacSecKey } from "./macseckey";
import { Tag } from "./tag";
// Lag
/**
 * Information about a link aggregation group (LAG).
**/
var Lag = /** @class */ (function (_super) {
    __extends(Lag, _super);
    function Lag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowsHostedConnections" }),
        __metadata("design:type", Boolean)
    ], Lag.prototype, "allowsHostedConnections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsDevice" }),
        __metadata("design:type", String)
    ], Lag.prototype, "awsDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsDeviceV2" }),
        __metadata("design:type", String)
    ], Lag.prototype, "awsDeviceV2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsLogicalDeviceId" }),
        __metadata("design:type", String)
    ], Lag.prototype, "awsLogicalDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection }),
        __metadata("design:type", Array)
    ], Lag.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionsBandwidth" }),
        __metadata("design:type", String)
    ], Lag.prototype, "connectionsBandwidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionMode" }),
        __metadata("design:type", String)
    ], Lag.prototype, "encryptionMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasLogicalRedundancy" }),
        __metadata("design:type", String)
    ], Lag.prototype, "hasLogicalRedundancy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jumboFrameCapable" }),
        __metadata("design:type", Boolean)
    ], Lag.prototype, "jumboFrameCapable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lagId" }),
        __metadata("design:type", String)
    ], Lag.prototype, "lagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lagName" }),
        __metadata("design:type", String)
    ], Lag.prototype, "lagName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lagState" }),
        __metadata("design:type", String)
    ], Lag.prototype, "lagState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Lag.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=macSecCapable" }),
        __metadata("design:type", Boolean)
    ], Lag.prototype, "macSecCapable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=macSecKeys", elemType: MacSecKey }),
        __metadata("design:type", Array)
    ], Lag.prototype, "macSecKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumLinks" }),
        __metadata("design:type", Number)
    ], Lag.prototype, "minimumLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfConnections" }),
        __metadata("design:type", Number)
    ], Lag.prototype, "numberOfConnections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerAccount" }),
        __metadata("design:type", String)
    ], Lag.prototype, "ownerAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerName" }),
        __metadata("design:type", String)
    ], Lag.prototype, "providerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], Lag.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Lag.prototype, "tags", void 0);
    return Lag;
}(SpeakeasyBase));
export { Lag };
