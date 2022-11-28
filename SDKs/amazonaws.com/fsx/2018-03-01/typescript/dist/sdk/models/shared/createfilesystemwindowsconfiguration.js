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
import { WindowsAuditLogCreateConfiguration } from "./windowsauditlogcreateconfiguration";
import { WindowsDeploymentTypeEnum } from "./windowsdeploymenttypeenum";
import { SelfManagedActiveDirectoryConfiguration } from "./selfmanagedactivedirectoryconfiguration";
// CreateFileSystemWindowsConfiguration
/**
 * The configuration object for the Microsoft Windows file system used in <code>CreateFileSystem</code> and <code>CreateFileSystemFromBackup</code> operations.
**/
var CreateFileSystemWindowsConfiguration = /** @class */ (function (_super) {
    __extends(CreateFileSystemWindowsConfiguration, _super);
    function CreateFileSystemWindowsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveDirectoryId" }),
        __metadata("design:type", String)
    ], CreateFileSystemWindowsConfiguration.prototype, "activeDirectoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Aliases" }),
        __metadata("design:type", Array)
    ], CreateFileSystemWindowsConfiguration.prototype, "aliases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuditLogConfiguration" }),
        __metadata("design:type", WindowsAuditLogCreateConfiguration)
    ], CreateFileSystemWindowsConfiguration.prototype, "auditLogConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutomaticBackupRetentionDays" }),
        __metadata("design:type", Number)
    ], CreateFileSystemWindowsConfiguration.prototype, "automaticBackupRetentionDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CopyTagsToBackups" }),
        __metadata("design:type", Boolean)
    ], CreateFileSystemWindowsConfiguration.prototype, "copyTagsToBackups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DailyAutomaticBackupStartTime" }),
        __metadata("design:type", String)
    ], CreateFileSystemWindowsConfiguration.prototype, "dailyAutomaticBackupStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeploymentType" }),
        __metadata("design:type", String)
    ], CreateFileSystemWindowsConfiguration.prototype, "deploymentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredSubnetId" }),
        __metadata("design:type", String)
    ], CreateFileSystemWindowsConfiguration.prototype, "preferredSubnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SelfManagedActiveDirectoryConfiguration" }),
        __metadata("design:type", SelfManagedActiveDirectoryConfiguration)
    ], CreateFileSystemWindowsConfiguration.prototype, "selfManagedActiveDirectoryConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThroughputCapacity" }),
        __metadata("design:type", Number)
    ], CreateFileSystemWindowsConfiguration.prototype, "throughputCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceStartTime" }),
        __metadata("design:type", String)
    ], CreateFileSystemWindowsConfiguration.prototype, "weeklyMaintenanceStartTime", void 0);
    return CreateFileSystemWindowsConfiguration;
}(SpeakeasyBase));
export { CreateFileSystemWindowsConfiguration };
