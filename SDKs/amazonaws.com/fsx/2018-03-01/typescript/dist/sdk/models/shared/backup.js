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
import { ActiveDirectoryBackupAttributes } from "./activedirectorybackupattributes";
import { BackupFailureDetails } from "./backupfailuredetails";
import { FileSystem } from "./filesystem";
import { BackupLifecycleEnum } from "./backuplifecycleenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
import { BackupTypeEnum } from "./backuptypeenum";
import { Volume } from "./volume";
// Backup
/**
 * A backup of an Amazon FSx for Windows File Server or Amazon FSx for Lustre file system, or of an Amazon FSx for NetApp ONTAP volume.
**/
var Backup = /** @class */ (function (_super) {
    __extends(Backup, _super);
    function Backup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackupId" }),
        __metadata("design:type", String)
    ], Backup.prototype, "backupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], Backup.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectoryInformation" }),
        __metadata("design:type", ActiveDirectoryBackupAttributes)
    ], Backup.prototype, "directoryInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureDetails" }),
        __metadata("design:type", BackupFailureDetails)
    ], Backup.prototype, "failureDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystem" }),
        __metadata("design:type", FileSystem)
    ], Backup.prototype, "fileSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], Backup.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Lifecycle" }),
        __metadata("design:type", String)
    ], Backup.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerId" }),
        __metadata("design:type", String)
    ], Backup.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgressPercent" }),
        __metadata("design:type", Number)
    ], Backup.prototype, "progressPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceARN" }),
        __metadata("design:type", String)
    ], Backup.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceType" }),
        __metadata("design:type", String)
    ], Backup.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceBackupId" }),
        __metadata("design:type", String)
    ], Backup.prototype, "sourceBackupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceBackupRegion" }),
        __metadata("design:type", String)
    ], Backup.prototype, "sourceBackupRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Backup.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], Backup.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Volume" }),
        __metadata("design:type", Volume)
    ], Backup.prototype, "volume", void 0);
    return Backup;
}(SpeakeasyBase));
export { Backup };
