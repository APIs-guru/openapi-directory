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
import { VolumeLifecycleEnum } from "./volumelifecycleenum";
import { LifecycleTransitionReason } from "./lifecycletransitionreason";
import { OntapVolumeConfiguration } from "./ontapvolumeconfiguration";
import { Tag } from "./tag";
import { VolumeTypeEnum } from "./volumetypeenum";
// Volume
/**
 * Describes an Amazon FSx for NetApp ONTAP volume.
**/
var Volume = /** @class */ (function (_super) {
    __extends(Volume, _super);
    function Volume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], Volume.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemId" }),
        __metadata("design:type", String)
    ], Volume.prototype, "fileSystemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Lifecycle" }),
        __metadata("design:type", String)
    ], Volume.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LifecycleTransitionReason" }),
        __metadata("design:type", LifecycleTransitionReason)
    ], Volume.prototype, "lifecycleTransitionReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Volume.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OntapConfiguration" }),
        __metadata("design:type", OntapVolumeConfiguration)
    ], Volume.prototype, "ontapConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceARN" }),
        __metadata("design:type", String)
    ], Volume.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Volume.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeId" }),
        __metadata("design:type", String)
    ], Volume.prototype, "volumeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeType" }),
        __metadata("design:type", String)
    ], Volume.prototype, "volumeType", void 0);
    return Volume;
}(SpeakeasyBase));
export { Volume };
