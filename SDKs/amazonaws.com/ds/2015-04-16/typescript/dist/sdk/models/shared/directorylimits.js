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
// DirectoryLimits
/**
 * Contains directory limit information for a Region.
**/
var DirectoryLimits = /** @class */ (function (_super) {
    __extends(DirectoryLimits, _super);
    function DirectoryLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudOnlyDirectoriesCurrentCount" }),
        __metadata("design:type", Number)
    ], DirectoryLimits.prototype, "cloudOnlyDirectoriesCurrentCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudOnlyDirectoriesLimit" }),
        __metadata("design:type", Number)
    ], DirectoryLimits.prototype, "cloudOnlyDirectoriesLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudOnlyDirectoriesLimitReached" }),
        __metadata("design:type", Boolean)
    ], DirectoryLimits.prototype, "cloudOnlyDirectoriesLimitReached", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudOnlyMicrosoftADCurrentCount" }),
        __metadata("design:type", Number)
    ], DirectoryLimits.prototype, "cloudOnlyMicrosoftAdCurrentCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudOnlyMicrosoftADLimit" }),
        __metadata("design:type", Number)
    ], DirectoryLimits.prototype, "cloudOnlyMicrosoftAdLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudOnlyMicrosoftADLimitReached" }),
        __metadata("design:type", Boolean)
    ], DirectoryLimits.prototype, "cloudOnlyMicrosoftAdLimitReached", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConnectedDirectoriesCurrentCount" }),
        __metadata("design:type", Number)
    ], DirectoryLimits.prototype, "connectedDirectoriesCurrentCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConnectedDirectoriesLimit" }),
        __metadata("design:type", Number)
    ], DirectoryLimits.prototype, "connectedDirectoriesLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConnectedDirectoriesLimitReached" }),
        __metadata("design:type", Boolean)
    ], DirectoryLimits.prototype, "connectedDirectoriesLimitReached", void 0);
    return DirectoryLimits;
}(SpeakeasyBase));
export { DirectoryLimits };
