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
import { ControlMappingSource } from "./controlmappingsource";
import { ControlTypeEnum } from "./controltypeenum";
// Control
/**
 *  A control in Audit Manager.
**/
var Control = /** @class */ (function (_super) {
    __extends(Control, _super);
    function Control() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionPlanInstructions" }),
        __metadata("design:type", String)
    ], Control.prototype, "actionPlanInstructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionPlanTitle" }),
        __metadata("design:type", String)
    ], Control.prototype, "actionPlanTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Control.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=controlMappingSources", elemType: ControlMappingSource }),
        __metadata("design:type", Array)
    ], Control.prototype, "controlMappingSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=controlSources" }),
        __metadata("design:type", String)
    ], Control.prototype, "controlSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Control.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], Control.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Control.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Control.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" }),
        __metadata("design:type", Date)
    ], Control.prototype, "lastUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedBy" }),
        __metadata("design:type", String)
    ], Control.prototype, "lastUpdatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Control.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], Control.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testingInformation" }),
        __metadata("design:type", String)
    ], Control.prototype, "testingInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Control.prototype, "type", void 0);
    return Control;
}(SpeakeasyBase));
export { Control };
