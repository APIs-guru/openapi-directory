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
import { AtimeEnum } from "./atimeenum";
import { GidEnum } from "./gidenum";
import { LogLevelEnum } from "./loglevelenum";
import { MtimeEnum } from "./mtimeenum";
import { OverwriteModeEnum } from "./overwritemodeenum";
import { PosixPermissionsEnum } from "./posixpermissionsenum";
import { PreserveDeletedFilesEnum } from "./preservedeletedfilesenum";
import { PreserveDevicesEnum } from "./preservedevicesenum";
import { SmbSecurityDescriptorCopyFlagsEnum } from "./smbsecuritydescriptorcopyflagsenum";
import { TaskQueueingEnum } from "./taskqueueingenum";
import { TransferModeEnum } from "./transfermodeenum";
import { UidEnum } from "./uidenum";
import { VerifyModeEnum } from "./verifymodeenum";
// Options
/**
 * <p>Represents the options that are available to control the behavior of a <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
**/
var Options = /** @class */ (function (_super) {
    __extends(Options, _super);
    function Options() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Atime" }),
        __metadata("design:type", String)
    ], Options.prototype, "atime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BytesPerSecond" }),
        __metadata("design:type", Number)
    ], Options.prototype, "bytesPerSecond", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Gid" }),
        __metadata("design:type", String)
    ], Options.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogLevel" }),
        __metadata("design:type", String)
    ], Options.prototype, "logLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mtime" }),
        __metadata("design:type", String)
    ], Options.prototype, "mtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverwriteMode" }),
        __metadata("design:type", String)
    ], Options.prototype, "overwriteMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PosixPermissions" }),
        __metadata("design:type", String)
    ], Options.prototype, "posixPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreserveDeletedFiles" }),
        __metadata("design:type", String)
    ], Options.prototype, "preserveDeletedFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreserveDevices" }),
        __metadata("design:type", String)
    ], Options.prototype, "preserveDevices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityDescriptorCopyFlags" }),
        __metadata("design:type", String)
    ], Options.prototype, "securityDescriptorCopyFlags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskQueueing" }),
        __metadata("design:type", String)
    ], Options.prototype, "taskQueueing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransferMode" }),
        __metadata("design:type", String)
    ], Options.prototype, "transferMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Uid" }),
        __metadata("design:type", String)
    ], Options.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerifyMode" }),
        __metadata("design:type", String)
    ], Options.prototype, "verifyMode", void 0);
    return Options;
}(SpeakeasyBase));
export { Options };
