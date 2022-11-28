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
import { InstanceRoleTypeEnum } from "./instanceroletypeenum";
import { MarketTypeEnum } from "./markettypeenum";
import { InstanceGroupStateEnum } from "./instancegroupstateenum";
// InstanceGroupDetail
/**
 * Detailed information about an instance group.
**/
var InstanceGroupDetail = /** @class */ (function (_super) {
    __extends(InstanceGroupDetail, _super);
    function InstanceGroupDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BidPrice" }),
        __metadata("design:type", String)
    ], InstanceGroupDetail.prototype, "bidPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], InstanceGroupDetail.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomAmiId" }),
        __metadata("design:type", String)
    ], InstanceGroupDetail.prototype, "customAmiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDateTime" }),
        __metadata("design:type", Date)
    ], InstanceGroupDetail.prototype, "endDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceGroupId" }),
        __metadata("design:type", String)
    ], InstanceGroupDetail.prototype, "instanceGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceRequestCount" }),
        __metadata("design:type", Number)
    ], InstanceGroupDetail.prototype, "instanceRequestCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceRole" }),
        __metadata("design:type", String)
    ], InstanceGroupDetail.prototype, "instanceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceRunningCount" }),
        __metadata("design:type", Number)
    ], InstanceGroupDetail.prototype, "instanceRunningCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], InstanceGroupDetail.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastStateChangeReason" }),
        __metadata("design:type", String)
    ], InstanceGroupDetail.prototype, "lastStateChangeReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Market" }),
        __metadata("design:type", String)
    ], InstanceGroupDetail.prototype, "market", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], InstanceGroupDetail.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadyDateTime" }),
        __metadata("design:type", Date)
    ], InstanceGroupDetail.prototype, "readyDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDateTime" }),
        __metadata("design:type", Date)
    ], InstanceGroupDetail.prototype, "startDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], InstanceGroupDetail.prototype, "state", void 0);
    return InstanceGroupDetail;
}(SpeakeasyBase));
export { InstanceGroupDetail };
