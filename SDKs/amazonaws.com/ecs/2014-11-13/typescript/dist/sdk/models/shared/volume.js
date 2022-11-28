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
import { DockerVolumeConfiguration } from "./dockervolumeconfiguration";
import { EfsVolumeConfiguration } from "./efsvolumeconfiguration";
import { FSxWindowsFileServerVolumeConfiguration } from "./fsxwindowsfileservervolumeconfiguration";
import { HostVolumeProperties } from "./hostvolumeproperties";
// Volume
/**
 * A data volume used in a task definition. For tasks that use the Amazon Elastic File System (Amazon EFS), specify an <code>efsVolumeConfiguration</code>. For Windows tasks that use Amazon FSx for Windows File Server file system, specify a <code>fsxWindowsFileServerVolumeConfiguration</code>. For tasks that use a Docker volume, specify a <code>DockerVolumeConfiguration</code>. For tasks that use a bind mount host volume, specify a <code>host</code> and optional <code>sourcePath</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using Data Volumes in Tasks</a>.
**/
var Volume = /** @class */ (function (_super) {
    __extends(Volume, _super);
    function Volume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerVolumeConfiguration" }),
        __metadata("design:type", DockerVolumeConfiguration)
    ], Volume.prototype, "dockerVolumeConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=efsVolumeConfiguration" }),
        __metadata("design:type", EfsVolumeConfiguration)
    ], Volume.prototype, "efsVolumeConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fsxWindowsFileServerVolumeConfiguration" }),
        __metadata("design:type", FSxWindowsFileServerVolumeConfiguration)
    ], Volume.prototype, "fsxWindowsFileServerVolumeConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", HostVolumeProperties)
    ], Volume.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Volume.prototype, "name", void 0);
    return Volume;
}(SpeakeasyBase));
export { Volume };
