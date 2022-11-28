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
import { AdministrativeAction } from "./administrativeaction";
import { FileSystemFailureDetails } from "./filesystemfailuredetails";
import { FileSystemTypeEnum } from "./filesystemtypeenum";
import { FileSystemLifecycleEnum } from "./filesystemlifecycleenum";
import { LustreFileSystemConfiguration } from "./lustrefilesystemconfiguration";
import { OntapFileSystemConfiguration } from "./ontapfilesystemconfiguration";
import { StorageTypeEnum } from "./storagetypeenum";
import { Tag } from "./tag";
import { WindowsFileSystemConfiguration } from "./windowsfilesystemconfiguration";
// FileSystem
/**
 * A description of a specific Amazon FSx file system.
**/
var FileSystem = /** @class */ (function (_super) {
    __extends(FileSystem, _super);
    function FileSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdministrativeActions", elemType: AdministrativeAction }),
        __metadata("design:type", Array)
    ], FileSystem.prototype, "administrativeActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], FileSystem.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DNSName" }),
        __metadata("design:type", String)
    ], FileSystem.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureDetails" }),
        __metadata("design:type", FileSystemFailureDetails)
    ], FileSystem.prototype, "failureDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemId" }),
        __metadata("design:type", String)
    ], FileSystem.prototype, "fileSystemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemType" }),
        __metadata("design:type", String)
    ], FileSystem.prototype, "fileSystemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], FileSystem.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Lifecycle" }),
        __metadata("design:type", String)
    ], FileSystem.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LustreConfiguration" }),
        __metadata("design:type", LustreFileSystemConfiguration)
    ], FileSystem.prototype, "lustreConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkInterfaceIds" }),
        __metadata("design:type", Array)
    ], FileSystem.prototype, "networkInterfaceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OntapConfiguration" }),
        __metadata("design:type", OntapFileSystemConfiguration)
    ], FileSystem.prototype, "ontapConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerId" }),
        __metadata("design:type", String)
    ], FileSystem.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceARN" }),
        __metadata("design:type", String)
    ], FileSystem.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageCapacity" }),
        __metadata("design:type", Number)
    ], FileSystem.prototype, "storageCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageType" }),
        __metadata("design:type", String)
    ], FileSystem.prototype, "storageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetIds" }),
        __metadata("design:type", Array)
    ], FileSystem.prototype, "subnetIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], FileSystem.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], FileSystem.prototype, "vpcId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WindowsConfiguration" }),
        __metadata("design:type", WindowsFileSystemConfiguration)
    ], FileSystem.prototype, "windowsConfiguration", void 0);
    return FileSystem;
}(SpeakeasyBase));
export { FileSystem };
