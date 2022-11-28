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
import { TriggerTypeEnum } from "./triggertypeenum";
var CreateTriggerRequest = /** @class */ (function (_super) {
    __extends(CreateTriggerRequest, _super);
    function CreateTriggerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Actions", elemType: Action }),
        __metadata("design:type", Array)
    ], CreateTriggerRequest.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateTriggerRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventBatchingCondition" }),
        __metadata("design:type", EventBatchingCondition)
    ], CreateTriggerRequest.prototype, "eventBatchingCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateTriggerRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Predicate" }),
        __metadata("design:type", Predicate)
    ], CreateTriggerRequest.prototype, "predicate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", String)
    ], CreateTriggerRequest.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartOnCreation" }),
        __metadata("design:type", Boolean)
    ], CreateTriggerRequest.prototype, "startOnCreation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreateTriggerRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], CreateTriggerRequest.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkflowName" }),
        __metadata("design:type", String)
    ], CreateTriggerRequest.prototype, "workflowName", void 0);
    return CreateTriggerRequest;
}(SpeakeasyBase));
export { CreateTriggerRequest };
