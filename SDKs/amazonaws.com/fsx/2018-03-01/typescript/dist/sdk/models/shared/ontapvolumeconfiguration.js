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
import { FlexCacheEndpointTypeEnum } from "./flexcacheendpointtypeenum";
import { OntapVolumeTypeEnum } from "./ontapvolumetypeenum";
import { SecurityStyleEnum } from "./securitystyleenum";
import { TieringPolicy } from "./tieringpolicy";
// OntapVolumeConfiguration
/**
 * The configuration of an Amazon FSx for NetApp ONTAP volume
**/
var OntapVolumeConfiguration = /** @class */ (function (_super) {
    __extends(OntapVolumeConfiguration, _super);
    function OntapVolumeConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FlexCacheEndpointType" }),
        __metadata("design:type", String)
    ], OntapVolumeConfiguration.prototype, "flexCacheEndpointType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JunctionPath" }),
        __metadata("design:type", String)
    ], OntapVolumeConfiguration.prototype, "junctionPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OntapVolumeType" }),
        __metadata("design:type", String)
    ], OntapVolumeConfiguration.prototype, "ontapVolumeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityStyle" }),
        __metadata("design:type", String)
    ], OntapVolumeConfiguration.prototype, "securityStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SizeInMegabytes" }),
        __metadata("design:type", Number)
    ], OntapVolumeConfiguration.prototype, "sizeInMegabytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageEfficiencyEnabled" }),
        __metadata("design:type", Boolean)
    ], OntapVolumeConfiguration.prototype, "storageEfficiencyEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageVirtualMachineId" }),
        __metadata("design:type", String)
    ], OntapVolumeConfiguration.prototype, "storageVirtualMachineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageVirtualMachineRoot" }),
        __metadata("design:type", Boolean)
    ], OntapVolumeConfiguration.prototype, "storageVirtualMachineRoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TieringPolicy" }),
        __metadata("design:type", TieringPolicy)
    ], OntapVolumeConfiguration.prototype, "tieringPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UUID" }),
        __metadata("design:type", String)
    ], OntapVolumeConfiguration.prototype, "uuid", void 0);
    return OntapVolumeConfiguration;
}(SpeakeasyBase));
export { OntapVolumeConfiguration };
