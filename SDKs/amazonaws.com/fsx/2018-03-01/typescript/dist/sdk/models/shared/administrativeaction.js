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
import { AdministrativeActionTypeEnum } from "./administrativeactiontypeenum";
import { AdministrativeActionFailureDetails } from "./administrativeactionfailuredetails";
import { StatusEnum } from "./statusenum";
import { FileSystem } from "./filesystem";
import { Volume } from "./volume";
// AdministrativeAction
/**
 * Describes a specific Amazon FSx administrative action for the current Windows or Lustre file system.
**/
var AdministrativeAction = /** @class */ (function (_super) {
    __extends(AdministrativeAction, _super);
    function AdministrativeAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdministrativeActionType" }),
        __metadata("design:type", String)
    ], AdministrativeAction.prototype, "administrativeActionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureDetails" }),
        __metadata("design:type", AdministrativeActionFailureDetails)
    ], AdministrativeAction.prototype, "failureDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgressPercent" }),
        __metadata("design:type", Number)
    ], AdministrativeAction.prototype, "progressPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestTime" }),
        __metadata("design:type", Date)
    ], AdministrativeAction.prototype, "requestTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AdministrativeAction.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetFileSystemValues" }),
        __metadata("design:type", FileSystem)
    ], AdministrativeAction.prototype, "targetFileSystemValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetVolumeValues" }),
        __metadata("design:type", Volume)
    ], AdministrativeAction.prototype, "targetVolumeValues", void 0);
    return AdministrativeAction;
}(SpeakeasyBase));
export { AdministrativeAction };
