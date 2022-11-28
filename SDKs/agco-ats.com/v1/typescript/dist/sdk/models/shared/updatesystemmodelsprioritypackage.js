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
var UpdateSystemModelsPriorityPackage = /** @class */ (function (_super) {
    __extends(UpdateSystemModelsPriorityPackage, _super);
    function UpdateSystemModelsPriorityPackage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Autorun, form, name=Autorun;" }),
        __metadata("design:type", Boolean)
    ], UpdateSystemModelsPriorityPackage.prototype, "autorun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CRC, form, name=CRC;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPriorityPackage.prototype, "crc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientID, form, name=ClientID;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPriorityPackage.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPriorityPackage.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes, form, name=Notes;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPriorityPackage.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PackageID, form, name=PackageID;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPriorityPackage.prototype, "packageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PackageTypeID, form, name=PackageTypeID;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPriorityPackage.prototype, "packageTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousVersion, form, name=PreviousVersion;" }),
        __metadata("design:type", Number)
    ], UpdateSystemModelsPriorityPackage.prototype, "previousVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PriorityPackageID, form, name=PriorityPackageID;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPriorityPackage.prototype, "priorityPackageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReleaseDate, form, name=ReleaseDate;" }),
        __metadata("design:type", Date)
    ], UpdateSystemModelsPriorityPackage.prototype, "releaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Released, form, name=Released;" }),
        __metadata("design:type", Boolean)
    ], UpdateSystemModelsPriorityPackage.prototype, "released", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoveOnSuccess, form, name=RemoveOnSuccess;" }),
        __metadata("design:type", Boolean)
    ], UpdateSystemModelsPriorityPackage.prototype, "removeOnSuccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Size, form, name=Size;" }),
        __metadata("design:type", Number)
    ], UpdateSystemModelsPriorityPackage.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Switches, form, name=Switches;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPriorityPackage.prototype, "switches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeStamp, form, name=TimeStamp;" }),
        __metadata("design:type", Date)
    ], UpdateSystemModelsPriorityPackage.prototype, "timeStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Url, form, name=Url;" }),
        __metadata("design:type", String)
    ], UpdateSystemModelsPriorityPackage.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version, form, name=Version;" }),
        __metadata("design:type", Number)
    ], UpdateSystemModelsPriorityPackage.prototype, "version", void 0);
    return UpdateSystemModelsPriorityPackage;
}(SpeakeasyBase));
export { UpdateSystemModelsPriorityPackage };
