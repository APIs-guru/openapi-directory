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
import { DirectoryConnectSettingsDescription } from "./directoryconnectsettingsdescription";
import { DirectoryEditionEnum } from "./directoryeditionenum";
import { OwnerDirectoryDescription } from "./ownerdirectorydescription";
import { RadiusSettings } from "./radiussettings";
import { RadiusStatusEnum } from "./radiusstatusenum";
import { RegionsInfo } from "./regionsinfo";
import { ShareMethodEnum } from "./sharemethodenum";
import { ShareStatusEnum } from "./sharestatusenum";
import { DirectorySizeEnum } from "./directorysizeenum";
import { DirectoryStageEnum } from "./directorystageenum";
import { DirectoryTypeEnum } from "./directorytypeenum";
import { DirectoryVpcSettingsDescription } from "./directoryvpcsettingsdescription";
// DirectoryDescription
/**
 * Contains information about an Directory Service directory.
**/
var DirectoryDescription = /** @class */ (function (_super) {
    __extends(DirectoryDescription, _super);
    function DirectoryDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AccessUrl" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "accessUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=Alias" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "alias", void 0);
    __decorate([
        Metadata({ data: "json, name=ConnectSettings" }),
        __metadata("design:type", DirectoryConnectSettingsDescription)
    ], DirectoryDescription.prototype, "connectSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=DesiredNumberOfDomainControllers" }),
        __metadata("design:type", Number)
    ], DirectoryDescription.prototype, "desiredNumberOfDomainControllers", void 0);
    __decorate([
        Metadata({ data: "json, name=DirectoryId" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "directoryId", void 0);
    __decorate([
        Metadata({ data: "json, name=DnsIpAddrs" }),
        __metadata("design:type", Array)
    ], DirectoryDescription.prototype, "dnsIpAddrs", void 0);
    __decorate([
        Metadata({ data: "json, name=Edition" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "edition", void 0);
    __decorate([
        Metadata({ data: "json, name=LaunchTime" }),
        __metadata("design:type", Date)
    ], DirectoryDescription.prototype, "launchTime", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=OwnerDirectoryDescription" }),
        __metadata("design:type", OwnerDirectoryDescription)
    ], DirectoryDescription.prototype, "ownerDirectoryDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=RadiusSettings" }),
        __metadata("design:type", RadiusSettings)
    ], DirectoryDescription.prototype, "radiusSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=RadiusStatus" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "radiusStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=RegionsInfo" }),
        __metadata("design:type", RegionsInfo)
    ], DirectoryDescription.prototype, "regionsInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=ShareMethod" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "shareMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=ShareNotes" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "shareNotes", void 0);
    __decorate([
        Metadata({ data: "json, name=ShareStatus" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "shareStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=ShortName" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "shortName", void 0);
    __decorate([
        Metadata({ data: "json, name=Size" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "size", void 0);
    __decorate([
        Metadata({ data: "json, name=SsoEnabled" }),
        __metadata("design:type", Boolean)
    ], DirectoryDescription.prototype, "ssoEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=Stage" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "stage", void 0);
    __decorate([
        Metadata({ data: "json, name=StageLastUpdatedDateTime" }),
        __metadata("design:type", Date)
    ], DirectoryDescription.prototype, "stageLastUpdatedDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=StageReason" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "stageReason", void 0);
    __decorate([
        Metadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], DirectoryDescription.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=VpcSettings" }),
        __metadata("design:type", DirectoryVpcSettingsDescription)
    ], DirectoryDescription.prototype, "vpcSettings", void 0);
    return DirectoryDescription;
}(SpeakeasyBase));
export { DirectoryDescription };
