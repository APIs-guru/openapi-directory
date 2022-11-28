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
import { DataRepositoryFailureDetails } from "./datarepositoryfailuredetails";
import { DataRepositoryLifecycleEnum } from "./datarepositorylifecycleenum";
// DataRepositoryConfiguration
/**
 * The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.
**/
var DataRepositoryConfiguration = /** @class */ (function (_super) {
    __extends(DataRepositoryConfiguration, _super);
    function DataRepositoryConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoImportPolicy" }),
        __metadata("design:type", String)
    ], DataRepositoryConfiguration.prototype, "autoImportPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExportPath" }),
        __metadata("design:type", String)
    ], DataRepositoryConfiguration.prototype, "exportPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureDetails" }),
        __metadata("design:type", DataRepositoryFailureDetails)
    ], DataRepositoryConfiguration.prototype, "failureDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportPath" }),
        __metadata("design:type", String)
    ], DataRepositoryConfiguration.prototype, "importPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportedFileChunkSize" }),
        __metadata("design:type", Number)
    ], DataRepositoryConfiguration.prototype, "importedFileChunkSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Lifecycle" }),
        __metadata("design:type", String)
    ], DataRepositoryConfiguration.prototype, "lifecycle", void 0);
    return DataRepositoryConfiguration;
}(SpeakeasyBase));
export { DataRepositoryConfiguration };
