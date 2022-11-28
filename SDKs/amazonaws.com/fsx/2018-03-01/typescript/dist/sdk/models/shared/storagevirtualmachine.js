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
import { SvmActiveDirectoryConfiguration } from "./svmactivedirectoryconfiguration";
import { SvmEndpoints } from "./svmendpoints";
import { StorageVirtualMachineLifecycleEnum } from "./storagevirtualmachinelifecycleenum";
import { LifecycleTransitionReason } from "./lifecycletransitionreason";
import { StorageVirtualMachineRootVolumeSecurityStyleEnum } from "./storagevirtualmachinerootvolumesecuritystyleenum";
import { StorageVirtualMachineSubtypeEnum } from "./storagevirtualmachinesubtypeenum";
import { Tag } from "./tag";
// StorageVirtualMachine
/**
 * Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuraton.
**/
var StorageVirtualMachine = /** @class */ (function (_super) {
    __extends(StorageVirtualMachine, _super);
    function StorageVirtualMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveDirectoryConfiguration" }),
        __metadata("design:type", SvmActiveDirectoryConfiguration)
    ], StorageVirtualMachine.prototype, "activeDirectoryConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], StorageVirtualMachine.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Endpoints" }),
        __metadata("design:type", SvmEndpoints)
    ], StorageVirtualMachine.prototype, "endpoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemId" }),
        __metadata("design:type", String)
    ], StorageVirtualMachine.prototype, "fileSystemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Lifecycle" }),
        __metadata("design:type", String)
    ], StorageVirtualMachine.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LifecycleTransitionReason" }),
        __metadata("design:type", LifecycleTransitionReason)
    ], StorageVirtualMachine.prototype, "lifecycleTransitionReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], StorageVirtualMachine.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceARN" }),
        __metadata("design:type", String)
    ], StorageVirtualMachine.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RootVolumeSecurityStyle" }),
        __metadata("design:type", String)
    ], StorageVirtualMachine.prototype, "rootVolumeSecurityStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageVirtualMachineId" }),
        __metadata("design:type", String)
    ], StorageVirtualMachine.prototype, "storageVirtualMachineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subtype" }),
        __metadata("design:type", String)
    ], StorageVirtualMachine.prototype, "subtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], StorageVirtualMachine.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UUID" }),
        __metadata("design:type", String)
    ], StorageVirtualMachine.prototype, "uuid", void 0);
    return StorageVirtualMachine;
}(SpeakeasyBase));
export { StorageVirtualMachine };
