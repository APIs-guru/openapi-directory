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
import { HasLogicalRedundancyEnum } from "./haslogicalredundancyenum";
import { InterconnectStateEnum } from "./interconnectstateenum";
import { Tag } from "./tag";
// Interconnect
/**
 * Information about an interconnect.
**/
var Interconnect = /** @class */ (function (_super) {
    __extends(Interconnect, _super);
    function Interconnect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsDevice" }),
        __metadata("design:type", String)
    ], Interconnect.prototype, "awsDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsDeviceV2" }),
        __metadata("design:type", String)
    ], Interconnect.prototype, "awsDeviceV2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsLogicalDeviceId" }),
        __metadata("design:type", String)
    ], Interconnect.prototype, "awsLogicalDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidth" }),
        __metadata("design:type", String)
    ], Interconnect.prototype, "bandwidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasLogicalRedundancy" }),
        __metadata("design:type", String)
    ], Interconnect.prototype, "hasLogicalRedundancy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interconnectId" }),
        __metadata("design:type", String)
    ], Interconnect.prototype, "interconnectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interconnectName" }),
        __metadata("design:type", String)
    ], Interconnect.prototype, "interconnectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interconnectState" }),
        __metadata("design:type", String)
    ], Interconnect.prototype, "interconnectState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jumboFrameCapable" }),
        __metadata("design:type", Boolean)
    ], Interconnect.prototype, "jumboFrameCapable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lagId" }),
        __metadata("design:type", String)
    ], Interconnect.prototype, "lagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loaIssueTime" }),
        __metadata("design:type", Date)
    ], Interconnect.prototype, "loaIssueTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Interconnect.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerName" }),
        __metadata("design:type", String)
    ], Interconnect.prototype, "providerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], Interconnect.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Interconnect.prototype, "tags", void 0);
    return Interconnect;
}(SpeakeasyBase));
export { Interconnect };
