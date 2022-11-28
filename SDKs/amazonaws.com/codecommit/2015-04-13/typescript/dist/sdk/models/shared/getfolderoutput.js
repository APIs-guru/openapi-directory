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
import { File } from "./file";
import { Folder } from "./folder";
import { SubModule } from "./submodule";
import { SymbolicLink } from "./symboliclink";
var GetFolderOutput = /** @class */ (function (_super) {
    __extends(GetFolderOutput, _super);
    function GetFolderOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commitId" }),
        __metadata("design:type", String)
    ], GetFolderOutput.prototype, "commitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: File }),
        __metadata("design:type", Array)
    ], GetFolderOutput.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folderPath" }),
        __metadata("design:type", String)
    ], GetFolderOutput.prototype, "folderPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subFolders", elemType: Folder }),
        __metadata("design:type", Array)
    ], GetFolderOutput.prototype, "subFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subModules", elemType: SubModule }),
        __metadata("design:type", Array)
    ], GetFolderOutput.prototype, "subModules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=symbolicLinks", elemType: SymbolicLink }),
        __metadata("design:type", Array)
    ], GetFolderOutput.prototype, "symbolicLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treeId" }),
        __metadata("design:type", String)
    ], GetFolderOutput.prototype, "treeId", void 0);
    return GetFolderOutput;
}(SpeakeasyBase));
export { GetFolderOutput };
