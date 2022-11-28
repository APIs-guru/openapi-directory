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
import { LifeCycleStateEnum } from "./lifecyclestateenum";
import { PerformanceModeEnum } from "./performancemodeenum";
import { FileSystemSize } from "./filesystemsize";
import { Tag } from "./tag";
import { ThroughputModeEnum } from "./throughputmodeenum";
// FileSystemDescription
/**
 * A description of the file system.
**/
var FileSystemDescription = /** @class */ (function (_super) {
    __extends(FileSystemDescription, _super);
    function FileSystemDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZoneId" }),
        __metadata("design:type", String)
    ], FileSystemDescription.prototype, "availabilityZoneId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZoneName" }),
        __metadata("design:type", String)
    ], FileSystemDescription.prototype, "availabilityZoneName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], FileSystemDescription.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationToken" }),
        __metadata("design:type", String)
    ], FileSystemDescription.prototype, "creationToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Encrypted" }),
        __metadata("design:type", Boolean)
    ], FileSystemDescription.prototype, "encrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemArn" }),
        __metadata("design:type", String)
    ], FileSystemDescription.prototype, "fileSystemArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemId" }),
        __metadata("design:type", String)
    ], FileSystemDescription.prototype, "fileSystemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], FileSystemDescription.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LifeCycleState" }),
        __metadata("design:type", String)
    ], FileSystemDescription.prototype, "lifeCycleState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], FileSystemDescription.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfMountTargets" }),
        __metadata("design:type", Number)
    ], FileSystemDescription.prototype, "numberOfMountTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerId" }),
        __metadata("design:type", String)
    ], FileSystemDescription.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PerformanceMode" }),
        __metadata("design:type", String)
    ], FileSystemDescription.prototype, "performanceMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputInMibps" }),
        __metadata("design:type", Number)
    ], FileSystemDescription.prototype, "provisionedThroughputInMibps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SizeInBytes" }),
        __metadata("design:type", FileSystemSize)
    ], FileSystemDescription.prototype, "sizeInBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], FileSystemDescription.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThroughputMode" }),
        __metadata("design:type", String)
    ], FileSystemDescription.prototype, "throughputMode", void 0);
    return FileSystemDescription;
}(SpeakeasyBase));
export { FileSystemDescription };
