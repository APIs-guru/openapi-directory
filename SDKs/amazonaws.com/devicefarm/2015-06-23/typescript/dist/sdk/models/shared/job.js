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
import { Counters } from "./counters";
import { Device } from "./device";
import { DeviceMinutes } from "./deviceminutes";
import { ExecutionResultEnum } from "./executionresultenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { TestTypeEnum } from "./testtypeenum";
// Job
/**
 * Represents a device.
**/
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Job.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=counters" }),
        __metadata("design:type", Counters)
    ], Job.prototype, "counters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Job.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", Device)
    ], Job.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceMinutes" }),
        __metadata("design:type", DeviceMinutes)
    ], Job.prototype, "deviceMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceArn" }),
        __metadata("design:type", String)
    ], Job.prototype, "instanceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Job.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Job.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], Job.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", Date)
    ], Job.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Job.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stopped" }),
        __metadata("design:type", Date)
    ], Job.prototype, "stopped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Job.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoCapture" }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "videoCapture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoEndpoint" }),
        __metadata("design:type", String)
    ], Job.prototype, "videoEndpoint", void 0);
    return Job;
}(SpeakeasyBase));
export { Job };
