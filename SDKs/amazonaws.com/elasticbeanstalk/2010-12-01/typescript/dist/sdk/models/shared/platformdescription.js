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
import { CustomAmi } from "./customami";
import { PlatformFramework } from "./platformframework";
import { PlatformStatusEnum } from "./platformstatusenum";
import { PlatformProgrammingLanguage } from "./platformprogramminglanguage";
// PlatformDescription
/**
 * Detailed information about a platform version.
**/
var PlatformDescription = /** @class */ (function (_super) {
    __extends(PlatformDescription, _super);
    function PlatformDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: CustomAmi }),
        __metadata("design:type", Array)
    ], PlatformDescription.prototype, "customAmiList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], PlatformDescription.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], PlatformDescription.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PlatformFramework }),
        __metadata("design:type", Array)
    ], PlatformDescription.prototype, "frameworks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "maintainer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "operatingSystemName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "operatingSystemVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "platformArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "platformBranchLifecycleState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "platformBranchName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "platformCategory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "platformLifecycleState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "platformName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "platformOwner", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "platformStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "platformVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PlatformProgrammingLanguage }),
        __metadata("design:type", Array)
    ], PlatformDescription.prototype, "programmingLanguages", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlatformDescription.prototype, "solutionStackName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], PlatformDescription.prototype, "supportedAddonList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], PlatformDescription.prototype, "supportedTierList", void 0);
    return PlatformDescription;
}(SpeakeasyBase));
export { PlatformDescription };
