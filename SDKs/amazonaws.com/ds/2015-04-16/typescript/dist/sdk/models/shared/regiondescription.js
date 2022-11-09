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
import { RegionTypeEnum } from "./regiontypeenum";
import { DirectoryStageEnum } from "./directorystageenum";
import { DirectoryVpcSettings } from "./directoryvpcsettings";
// RegionDescription
/**
 * The replicated Region information for a directory.
**/
var RegionDescription = /** @class */ (function (_super) {
    __extends(RegionDescription, _super);
    function RegionDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DesiredNumberOfDomainControllers" }),
        __metadata("design:type", Number)
    ], RegionDescription.prototype, "desiredNumberOfDomainControllers", void 0);
    __decorate([
        Metadata({ data: "json, name=DirectoryId" }),
        __metadata("design:type", String)
    ], RegionDescription.prototype, "directoryId", void 0);
    __decorate([
        Metadata({ data: "json, name=LastUpdatedDateTime" }),
        __metadata("design:type", Date)
    ], RegionDescription.prototype, "lastUpdatedDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=LaunchTime" }),
        __metadata("design:type", Date)
    ], RegionDescription.prototype, "launchTime", void 0);
    __decorate([
        Metadata({ data: "json, name=RegionName" }),
        __metadata("design:type", String)
    ], RegionDescription.prototype, "regionName", void 0);
    __decorate([
        Metadata({ data: "json, name=RegionType" }),
        __metadata("design:type", String)
    ], RegionDescription.prototype, "regionType", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], RegionDescription.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=StatusLastUpdatedDateTime" }),
        __metadata("design:type", Date)
    ], RegionDescription.prototype, "statusLastUpdatedDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=VpcSettings" }),
        __metadata("design:type", DirectoryVpcSettings)
    ], RegionDescription.prototype, "vpcSettings", void 0);
    return RegionDescription;
}(SpeakeasyBase));
export { RegionDescription };
