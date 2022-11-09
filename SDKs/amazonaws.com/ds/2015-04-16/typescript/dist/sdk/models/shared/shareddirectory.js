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
import { ShareMethodEnum } from "./sharemethodenum";
import { ShareStatusEnum } from "./sharestatusenum";
// SharedDirectory
/**
 * Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted.
**/
var SharedDirectory = /** @class */ (function (_super) {
    __extends(SharedDirectory, _super);
    function SharedDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CreatedDateTime" }),
        __metadata("design:type", Date)
    ], SharedDirectory.prototype, "createdDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=LastUpdatedDateTime" }),
        __metadata("design:type", Date)
    ], SharedDirectory.prototype, "lastUpdatedDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=OwnerAccountId" }),
        __metadata("design:type", String)
    ], SharedDirectory.prototype, "ownerAccountId", void 0);
    __decorate([
        Metadata({ data: "json, name=OwnerDirectoryId" }),
        __metadata("design:type", String)
    ], SharedDirectory.prototype, "ownerDirectoryId", void 0);
    __decorate([
        Metadata({ data: "json, name=ShareMethod" }),
        __metadata("design:type", String)
    ], SharedDirectory.prototype, "shareMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=ShareNotes" }),
        __metadata("design:type", String)
    ], SharedDirectory.prototype, "shareNotes", void 0);
    __decorate([
        Metadata({ data: "json, name=ShareStatus" }),
        __metadata("design:type", String)
    ], SharedDirectory.prototype, "shareStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=SharedAccountId" }),
        __metadata("design:type", String)
    ], SharedDirectory.prototype, "sharedAccountId", void 0);
    __decorate([
        Metadata({ data: "json, name=SharedDirectoryId" }),
        __metadata("design:type", String)
    ], SharedDirectory.prototype, "sharedDirectoryId", void 0);
    return SharedDirectory;
}(SpeakeasyBase));
export { SharedDirectory };
