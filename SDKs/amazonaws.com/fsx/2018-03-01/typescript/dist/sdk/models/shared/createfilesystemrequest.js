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
import { FileSystemTypeEnum } from "./filesystemtypeenum";
import { CreateFileSystemLustreConfiguration } from "./createfilesystemlustreconfiguration";
import { CreateFileSystemOntapConfiguration } from "./createfilesystemontapconfiguration";
import { StorageTypeEnum } from "./storagetypeenum";
import { Tag } from "./tag";
import { CreateFileSystemWindowsConfiguration } from "./createfilesystemwindowsconfiguration";
// CreateFileSystemRequest
/**
 * The request object used to create a new Amazon FSx file system.
**/
var CreateFileSystemRequest = /** @class */ (function (_super) {
    __extends(CreateFileSystemRequest, _super);
    function CreateFileSystemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientRequestToken" }),
        __metadata("design:type", String)
    ], CreateFileSystemRequest.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemType" }),
        __metadata("design:type", String)
    ], CreateFileSystemRequest.prototype, "fileSystemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], CreateFileSystemRequest.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LustreConfiguration" }),
        __metadata("design:type", CreateFileSystemLustreConfiguration)
    ], CreateFileSystemRequest.prototype, "lustreConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OntapConfiguration" }),
        __metadata("design:type", CreateFileSystemOntapConfiguration)
    ], CreateFileSystemRequest.prototype, "ontapConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateFileSystemRequest.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageCapacity" }),
        __metadata("design:type", Number)
    ], CreateFileSystemRequest.prototype, "storageCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageType" }),
        __metadata("design:type", String)
    ], CreateFileSystemRequest.prototype, "storageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetIds" }),
        __metadata("design:type", Array)
    ], CreateFileSystemRequest.prototype, "subnetIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateFileSystemRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WindowsConfiguration" }),
        __metadata("design:type", CreateFileSystemWindowsConfiguration)
    ], CreateFileSystemRequest.prototype, "windowsConfiguration", void 0);
    return CreateFileSystemRequest;
}(SpeakeasyBase));
export { CreateFileSystemRequest };
