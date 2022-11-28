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
import { LambdaFilesystemPermissionEnum } from "./lambdafilesystempermissionenum";
// LambdaVolumeMount
/**
 * Contains information about a volume that Linux processes in a container can access. When you define a volume, the IoT Greengrass Core software mounts the source files to the destination inside the container.
**/
var LambdaVolumeMount = /** @class */ (function (_super) {
    __extends(LambdaVolumeMount, _super);
    function LambdaVolumeMount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addGroupOwner" }),
        __metadata("design:type", Boolean)
    ], LambdaVolumeMount.prototype, "addGroupOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationPath" }),
        __metadata("design:type", String)
    ], LambdaVolumeMount.prototype, "destinationPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], LambdaVolumeMount.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourcePath" }),
        __metadata("design:type", String)
    ], LambdaVolumeMount.prototype, "sourcePath", void 0);
    return LambdaVolumeMount;
}(SpeakeasyBase));
export { LambdaVolumeMount };
