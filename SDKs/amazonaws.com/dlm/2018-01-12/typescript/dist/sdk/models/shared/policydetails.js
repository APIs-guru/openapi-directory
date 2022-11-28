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
import { Action } from "./action";
import { EventSource } from "./eventsource";
import { Parameters } from "./parameters";
import { PolicyTypeValuesEnum } from "./policytypevaluesenum";
import { Schedule } from "./schedule";
import { Tag } from "./tag";
// PolicyDetails
/**
 * Specifies the configuration of a lifecycle policy.
**/
var PolicyDetails = /** @class */ (function (_super) {
    __extends(PolicyDetails, _super);
    function PolicyDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Actions", elemType: Action }),
        __metadata("design:type", Array)
    ], PolicyDetails.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventSource" }),
        __metadata("design:type", EventSource)
    ], PolicyDetails.prototype, "eventSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", Parameters)
    ], PolicyDetails.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyType" }),
        __metadata("design:type", String)
    ], PolicyDetails.prototype, "policyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceLocations" }),
        __metadata("design:type", Array)
    ], PolicyDetails.prototype, "resourceLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceTypes" }),
        __metadata("design:type", Array)
    ], PolicyDetails.prototype, "resourceTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedules", elemType: Schedule }),
        __metadata("design:type", Array)
    ], PolicyDetails.prototype, "schedules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetTags", elemType: Tag }),
        __metadata("design:type", Array)
    ], PolicyDetails.prototype, "targetTags", void 0);
    return PolicyDetails;
}(SpeakeasyBase));
export { PolicyDetails };
