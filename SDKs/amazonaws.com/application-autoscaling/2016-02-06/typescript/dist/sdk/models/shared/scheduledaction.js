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
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ScalableTargetAction } from "./scalabletargetaction";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
// ScheduledAction
/**
 * Represents a scheduled action.
**/
var ScheduledAction = /** @class */ (function (_super) {
    __extends(ScheduledAction, _super);
    function ScheduledAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], ScheduledAction.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], ScheduledAction.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceId" }),
        __metadata("design:type", String)
    ], ScheduledAction.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalableDimension" }),
        __metadata("design:type", String)
    ], ScheduledAction.prototype, "scalableDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalableTargetAction" }),
        __metadata("design:type", ScalableTargetAction)
    ], ScheduledAction.prototype, "scalableTargetAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", String)
    ], ScheduledAction.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduledActionARN" }),
        __metadata("design:type", String)
    ], ScheduledAction.prototype, "scheduledActionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduledActionName" }),
        __metadata("design:type", String)
    ], ScheduledAction.prototype, "scheduledActionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceNamespace" }),
        __metadata("design:type", String)
    ], ScheduledAction.prototype, "serviceNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], ScheduledAction.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timezone" }),
        __metadata("design:type", String)
    ], ScheduledAction.prototype, "timezone", void 0);
    return ScheduledAction;
}(SpeakeasyBase));
export { ScheduledAction };
