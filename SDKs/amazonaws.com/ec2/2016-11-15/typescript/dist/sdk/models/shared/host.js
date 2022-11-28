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
import { AllowsMultipleInstanceTypesEnum } from "./allowsmultipleinstancetypesenum";
import { AutoPlacementEnum } from "./autoplacementenum";
import { AvailableCapacity } from "./availablecapacity";
import { HostProperties } from "./hostproperties";
import { HostRecoveryEnum } from "./hostrecoveryenum";
import { HostInstance } from "./hostinstance";
import { AllocationStateEnum } from "./allocationstateenum";
import { Tag } from "./tag";
// Host
/**
 * Describes the properties of the Dedicated Host.
**/
var Host = /** @class */ (function (_super) {
    __extends(Host, _super);
    function Host() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], Host.prototype, "allocationTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Host.prototype, "allowsMultipleInstanceTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Host.prototype, "autoPlacement", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Host.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Host.prototype, "availabilityZoneId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AvailableCapacity)
    ], Host.prototype, "availableCapacity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Host.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Host.prototype, "hostId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HostProperties)
    ], Host.prototype, "hostProperties", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Host.prototype, "hostRecovery", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Host.prototype, "hostReservationId", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: HostInstance }),
        __metadata("design:type", Array)
    ], Host.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], Host.prototype, "memberOfServiceLinkedResourceGroup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Host.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], Host.prototype, "releaseTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Host.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Tag }),
        __metadata("design:type", Array)
    ], Host.prototype, "tags", void 0);
    return Host;
}(SpeakeasyBase));
export { Host };
