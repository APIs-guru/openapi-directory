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
import { RadiusSettings } from "./radiussettings";
import { RadiusStatusEnum } from "./radiusstatusenum";
import { DirectoryVpcSettingsDescription } from "./directoryvpcsettingsdescription";
// OwnerDirectoryDescription
/**
 * Describes the directory owner account details that have been shared to the directory consumer account.
**/
var OwnerDirectoryDescription = /** @class */ (function (_super) {
    __extends(OwnerDirectoryDescription, _super);
    function OwnerDirectoryDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], OwnerDirectoryDescription.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectoryId" }),
        __metadata("design:type", String)
    ], OwnerDirectoryDescription.prototype, "directoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsIpAddrs" }),
        __metadata("design:type", Array)
    ], OwnerDirectoryDescription.prototype, "dnsIpAddrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RadiusSettings" }),
        __metadata("design:type", RadiusSettings)
    ], OwnerDirectoryDescription.prototype, "radiusSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RadiusStatus" }),
        __metadata("design:type", String)
    ], OwnerDirectoryDescription.prototype, "radiusStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcSettings" }),
        __metadata("design:type", DirectoryVpcSettingsDescription)
    ], OwnerDirectoryDescription.prototype, "vpcSettings", void 0);
    return OwnerDirectoryDescription;
}(SpeakeasyBase));
export { OwnerDirectoryDescription };
