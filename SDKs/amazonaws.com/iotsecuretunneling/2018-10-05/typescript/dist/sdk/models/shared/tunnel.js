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
import { DestinationConfig } from "./destinationconfig";
import { ConnectionState } from "./connectionstate";
import { TunnelStatusEnum } from "./tunnelstatusenum";
import { Tag } from "./tag";
import { TimeoutConfig } from "./timeoutconfig";
// Tunnel
/**
 * A connection between a source computer and a destination device.
**/
var Tunnel = /** @class */ (function (_super) {
    __extends(Tunnel, _super);
    function Tunnel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Tunnel.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Tunnel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationConfig" }),
        __metadata("design:type", DestinationConfig)
    ], Tunnel.prototype, "destinationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationConnectionState" }),
        __metadata("design:type", ConnectionState)
    ], Tunnel.prototype, "destinationConnectionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" }),
        __metadata("design:type", Date)
    ], Tunnel.prototype, "lastUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceConnectionState" }),
        __metadata("design:type", ConnectionState)
    ], Tunnel.prototype, "sourceConnectionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Tunnel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Tunnel.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutConfig" }),
        __metadata("design:type", TimeoutConfig)
    ], Tunnel.prototype, "timeoutConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tunnelArn" }),
        __metadata("design:type", String)
    ], Tunnel.prototype, "tunnelArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tunnelId" }),
        __metadata("design:type", String)
    ], Tunnel.prototype, "tunnelId", void 0);
    return Tunnel;
}(SpeakeasyBase));
export { Tunnel };
