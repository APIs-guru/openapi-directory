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
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { SessionConnectionStateEnum } from "./sessionconnectionstateenum";
import { NetworkAccessConfiguration } from "./networkaccessconfiguration";
import { SessionStateEnum } from "./sessionstateenum";
// Session
/**
 * Describes a streaming session.
**/
var Session = /** @class */ (function (_super) {
    __extends(Session, _super);
    function Session() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthenticationType" }),
        __metadata("design:type", String)
    ], Session.prototype, "authenticationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConnectionState" }),
        __metadata("design:type", String)
    ], Session.prototype, "connectionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetName" }),
        __metadata("design:type", String)
    ], Session.prototype, "fleetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], Session.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxExpirationTime" }),
        __metadata("design:type", Date)
    ], Session.prototype, "maxExpirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkAccessConfiguration" }),
        __metadata("design:type", NetworkAccessConfiguration)
    ], Session.prototype, "networkAccessConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StackName" }),
        __metadata("design:type", String)
    ], Session.prototype, "stackName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], Session.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], Session.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId" }),
        __metadata("design:type", String)
    ], Session.prototype, "userId", void 0);
    return Session;
}(SpeakeasyBase));
export { Session };
