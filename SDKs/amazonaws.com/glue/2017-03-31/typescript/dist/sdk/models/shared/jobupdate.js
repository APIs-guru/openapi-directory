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
import { JobCommand } from "./jobcommand";
import { ConnectionsList } from "./connectionslist";
import { ExecutionProperty } from "./executionproperty";
import { NotificationProperty } from "./notificationproperty";
import { WorkerTypeEnum } from "./workertypeenum";
// JobUpdate
/**
 * Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information.
**/
var JobUpdate = /** @class */ (function (_super) {
    __extends(JobUpdate, _super);
    function JobUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllocatedCapacity" }),
        __metadata("design:type", Number)
    ], JobUpdate.prototype, "allocatedCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Command" }),
        __metadata("design:type", JobCommand)
    ], JobUpdate.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Connections" }),
        __metadata("design:type", ConnectionsList)
    ], JobUpdate.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultArguments" }),
        __metadata("design:type", Map)
    ], JobUpdate.prototype, "defaultArguments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], JobUpdate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionProperty" }),
        __metadata("design:type", ExecutionProperty)
    ], JobUpdate.prototype, "executionProperty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GlueVersion" }),
        __metadata("design:type", String)
    ], JobUpdate.prototype, "glueVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogUri" }),
        __metadata("design:type", String)
    ], JobUpdate.prototype, "logUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxCapacity" }),
        __metadata("design:type", Number)
    ], JobUpdate.prototype, "maxCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxRetries" }),
        __metadata("design:type", Number)
    ], JobUpdate.prototype, "maxRetries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonOverridableArguments" }),
        __metadata("design:type", Map)
    ], JobUpdate.prototype, "nonOverridableArguments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationProperty" }),
        __metadata("design:type", NotificationProperty)
    ], JobUpdate.prototype, "notificationProperty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfWorkers" }),
        __metadata("design:type", Number)
    ], JobUpdate.prototype, "numberOfWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], JobUpdate.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" }),
        __metadata("design:type", String)
    ], JobUpdate.prototype, "securityConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timeout" }),
        __metadata("design:type", Number)
    ], JobUpdate.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkerType" }),
        __metadata("design:type", String)
    ], JobUpdate.prototype, "workerType", void 0);
    return JobUpdate;
}(SpeakeasyBase));
export { JobUpdate };
