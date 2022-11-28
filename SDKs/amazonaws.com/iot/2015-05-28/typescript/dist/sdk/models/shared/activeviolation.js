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
import { Behavior } from "./behavior";
import { MetricValue } from "./metricvalue";
import { ViolationEventAdditionalInfo } from "./violationeventadditionalinfo";
// ActiveViolation
/**
 * Information about an active Device Defender security profile behavior violation.
**/
var ActiveViolation = /** @class */ (function (_super) {
    __extends(ActiveViolation, _super);
    function ActiveViolation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=behavior" }),
        __metadata("design:type", Behavior)
    ], ActiveViolation.prototype, "behavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastViolationTime" }),
        __metadata("design:type", Date)
    ], ActiveViolation.prototype, "lastViolationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastViolationValue" }),
        __metadata("design:type", MetricValue)
    ], ActiveViolation.prototype, "lastViolationValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityProfileName" }),
        __metadata("design:type", String)
    ], ActiveViolation.prototype, "securityProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingName" }),
        __metadata("design:type", String)
    ], ActiveViolation.prototype, "thingName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=violationEventAdditionalInfo" }),
        __metadata("design:type", ViolationEventAdditionalInfo)
    ], ActiveViolation.prototype, "violationEventAdditionalInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=violationId" }),
        __metadata("design:type", String)
    ], ActiveViolation.prototype, "violationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=violationStartTime" }),
        __metadata("design:type", Date)
    ], ActiveViolation.prototype, "violationStartTime", void 0);
    return ActiveViolation;
}(SpeakeasyBase));
export { ActiveViolation };
