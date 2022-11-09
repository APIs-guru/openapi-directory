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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackupStateEnum } from "./backupstateenum";
// Backup
/**
 * Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter.
**/
var Backup = /** @class */ (function (_super) {
    __extends(Backup, _super);
    function Backup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=BackupId" }),
        __metadata("design:type", String)
    ], Backup.prototype, "backupId", void 0);
    __decorate([
        Metadata({ data: "json, name=BackupState" }),
        __metadata("design:type", String)
    ], Backup.prototype, "backupState", void 0);
    __decorate([
        Metadata({ data: "json, name=ClusterId" }),
        __metadata("design:type", String)
    ], Backup.prototype, "clusterId", void 0);
    __decorate([
        Metadata({ data: "json, name=CopyTimestamp" }),
        __metadata("design:type", Date)
    ], Backup.prototype, "copyTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=CreateTimestamp" }),
        __metadata("design:type", Date)
    ], Backup.prototype, "createTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=DeleteTimestamp" }),
        __metadata("design:type", Date)
    ], Backup.prototype, "deleteTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=NeverExpires" }),
        __metadata("design:type", Boolean)
    ], Backup.prototype, "neverExpires", void 0);
    __decorate([
        Metadata({ data: "json, name=SourceBackup" }),
        __metadata("design:type", String)
    ], Backup.prototype, "sourceBackup", void 0);
    __decorate([
        Metadata({ data: "json, name=SourceCluster" }),
        __metadata("design:type", String)
    ], Backup.prototype, "sourceCluster", void 0);
    __decorate([
        Metadata({ data: "json, name=SourceRegion" }),
        __metadata("design:type", String)
    ], Backup.prototype, "sourceRegion", void 0);
    __decorate([
        Metadata({ data: "json, name=TagList", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], Backup.prototype, "tagList", void 0);
    return Backup;
}(SpeakeasyBase));
export { Backup };
