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
import { AutoImportPolicyTypeEnum } from "./autoimportpolicytypeenum";
import { DataCompressionTypeEnum } from "./datacompressiontypeenum";
import { LustreDeploymentTypeEnum } from "./lustredeploymenttypeenum";
import { DriveCacheTypeEnum } from "./drivecachetypeenum";
// CreateFileSystemLustreConfiguration
/**
 * The Lustre configuration for the file system being created.
**/
var CreateFileSystemLustreConfiguration = /** @class */ (function (_super) {
    __extends(CreateFileSystemLustreConfiguration, _super);
    function CreateFileSystemLustreConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoImportPolicy" }),
        __metadata("design:type", String)
    ], CreateFileSystemLustreConfiguration.prototype, "autoImportPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutomaticBackupRetentionDays" }),
        __metadata("design:type", Number)
    ], CreateFileSystemLustreConfiguration.prototype, "automaticBackupRetentionDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CopyTagsToBackups" }),
        __metadata("design:type", Boolean)
    ], CreateFileSystemLustreConfiguration.prototype, "copyTagsToBackups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DailyAutomaticBackupStartTime" }),
        __metadata("design:type", String)
    ], CreateFileSystemLustreConfiguration.prototype, "dailyAutomaticBackupStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataCompressionType" }),
        __metadata("design:type", String)
    ], CreateFileSystemLustreConfiguration.prototype, "dataCompressionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeploymentType" }),
        __metadata("design:type", String)
    ], CreateFileSystemLustreConfiguration.prototype, "deploymentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DriveCacheType" }),
        __metadata("design:type", String)
    ], CreateFileSystemLustreConfiguration.prototype, "driveCacheType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExportPath" }),
        __metadata("design:type", String)
    ], CreateFileSystemLustreConfiguration.prototype, "exportPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportPath" }),
        __metadata("design:type", String)
    ], CreateFileSystemLustreConfiguration.prototype, "importPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportedFileChunkSize" }),
        __metadata("design:type", Number)
    ], CreateFileSystemLustreConfiguration.prototype, "importedFileChunkSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PerUnitStorageThroughput" }),
        __metadata("design:type", Number)
    ], CreateFileSystemLustreConfiguration.prototype, "perUnitStorageThroughput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceStartTime" }),
        __metadata("design:type", String)
    ], CreateFileSystemLustreConfiguration.prototype, "weeklyMaintenanceStartTime", void 0);
    return CreateFileSystemLustreConfiguration;
}(SpeakeasyBase));
export { CreateFileSystemLustreConfiguration };
