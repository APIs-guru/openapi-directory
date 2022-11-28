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
import { InstanceCount } from "./instancecount";
import { PriceSchedule } from "./priceschedule";
import { ListingStatusEnum } from "./listingstatusenum";
import { Tag } from "./tag";
// ReservedInstancesListing
/**
 * Describes a Reserved Instance listing.
**/
var ReservedInstancesListing = /** @class */ (function (_super) {
    __extends(ReservedInstancesListing, _super);
    function ReservedInstancesListing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReservedInstancesListing.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], ReservedInstancesListing.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: InstanceCount }),
        __metadata("design:type", Array)
    ], ReservedInstancesListing.prototype, "instanceCounts", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PriceSchedule }),
        __metadata("design:type", Array)
    ], ReservedInstancesListing.prototype, "priceSchedules", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReservedInstancesListing.prototype, "reservedInstancesId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReservedInstancesListing.prototype, "reservedInstancesListingId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReservedInstancesListing.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReservedInstancesListing.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Tag }),
        __metadata("design:type", Array)
    ], ReservedInstancesListing.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], ReservedInstancesListing.prototype, "updateDate", void 0);
    return ReservedInstancesListing;
}(SpeakeasyBase));
export { ReservedInstancesListing };
