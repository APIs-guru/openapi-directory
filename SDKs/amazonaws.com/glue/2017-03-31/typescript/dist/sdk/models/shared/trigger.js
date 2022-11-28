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
import { EventBatchingCondition } from "./eventbatchingcondition";
import { Predicate } from "./predicate";
import { TriggerStateEnum } from "./triggerstateenum";
import { TriggerTypeEnum } from "./triggertypeenum";
// Trigger
/**
 * Information about a specific trigger.
**/
var Trigger = /** @class */ (function (_super) {
    __extends(Trigger, _super);
    function Trigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Actions", elemType: Action }),
        __metadata("design:type", Array)
    ], Trigger.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventBatchingCondition" }),
        __metadata("design:type", EventBatchingCondition)
    ], Trigger.prototype, "eventBatchingCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Predicate" }),
        __metadata("design:type", Predicate)
    ], Trigger.prototype, "predicate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkflowName" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "workflowName", void 0);
    return Trigger;
}(SpeakeasyBase));
export { Trigger };
