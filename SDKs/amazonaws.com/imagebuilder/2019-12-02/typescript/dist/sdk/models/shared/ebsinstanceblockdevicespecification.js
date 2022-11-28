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
import { EbsVolumeTypeEnum } from "./ebsvolumetypeenum";
// EbsInstanceBlockDeviceSpecification
/**
 * Amazon EBS-specific block device mapping specifications.
**/
var EbsInstanceBlockDeviceSpecification = /** @class */ (function (_super) {
    __extends(EbsInstanceBlockDeviceSpecification, _super);
    function EbsInstanceBlockDeviceSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteOnTermination" }),
        __metadata("design:type", Boolean)
    ], EbsInstanceBlockDeviceSpecification.prototype, "deleteOnTermination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encrypted" }),
        __metadata("design:type", Boolean)
    ], EbsInstanceBlockDeviceSpecification.prototype, "encrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iops" }),
        __metadata("design:type", Number)
    ], EbsInstanceBlockDeviceSpecification.prototype, "iops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKeyId" }),
        __metadata("design:type", String)
    ], EbsInstanceBlockDeviceSpecification.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotId" }),
        __metadata("design:type", String)
    ], EbsInstanceBlockDeviceSpecification.prototype, "snapshotId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeSize" }),
        __metadata("design:type", Number)
    ], EbsInstanceBlockDeviceSpecification.prototype, "volumeSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeType" }),
        __metadata("design:type", String)
    ], EbsInstanceBlockDeviceSpecification.prototype, "volumeType", void 0);
    return EbsInstanceBlockDeviceSpecification;
}(SpeakeasyBase));
export { EbsInstanceBlockDeviceSpecification };
