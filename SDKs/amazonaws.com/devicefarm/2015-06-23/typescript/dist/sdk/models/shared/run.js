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
import { BillingMethodEnum } from "./billingmethodenum";
import { Counters } from "./counters";
import { CustomerArtifactPaths } from "./customerartifactpaths";
import { DeviceMinutes } from "./deviceminutes";
import { DeviceSelectionResult } from "./deviceselectionresult";
import { Location } from "./location";
import { NetworkProfile } from "./networkprofile";
import { DevicePlatformEnum } from "./deviceplatformenum";
import { Radios } from "./radios";
import { ExecutionResultEnum } from "./executionresultenum";
import { ExecutionResultCodeEnum } from "./executionresultcodeenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { TestTypeEnum } from "./testtypeenum";
// Run
/**
 * Represents a test run on a set of devices with a given app package, test parameters, and so on.
**/
var Run = /** @class */ (function (_super) {
    __extends(Run, _super);
    function Run() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appUpload" }),
        __metadata("design:type", String)
    ], Run.prototype, "appUpload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Run.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingMethod" }),
        __metadata("design:type", String)
    ], Run.prototype, "billingMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completedJobs" }),
        __metadata("design:type", Number)
    ], Run.prototype, "completedJobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=counters" }),
        __metadata("design:type", Counters)
    ], Run.prototype, "counters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Run.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerArtifactPaths" }),
        __metadata("design:type", CustomerArtifactPaths)
    ], Run.prototype, "customerArtifactPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceMinutes" }),
        __metadata("design:type", DeviceMinutes)
    ], Run.prototype, "deviceMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicePoolArn" }),
        __metadata("design:type", String)
    ], Run.prototype, "devicePoolArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceSelectionResult" }),
        __metadata("design:type", DeviceSelectionResult)
    ], Run.prototype, "deviceSelectionResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventCount" }),
        __metadata("design:type", Number)
    ], Run.prototype, "eventCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobTimeoutMinutes" }),
        __metadata("design:type", Number)
    ], Run.prototype, "jobTimeoutMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], Run.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", Location)
    ], Run.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Run.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Run.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkProfile" }),
        __metadata("design:type", NetworkProfile)
    ], Run.prototype, "networkProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parsingResultUrl" }),
        __metadata("design:type", String)
    ], Run.prototype, "parsingResultUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], Run.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radios" }),
        __metadata("design:type", Radios)
    ], Run.prototype, "radios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], Run.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resultCode" }),
        __metadata("design:type", String)
    ], Run.prototype, "resultCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seed" }),
        __metadata("design:type", Number)
    ], Run.prototype, "seed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipAppResign" }),
        __metadata("design:type", Boolean)
    ], Run.prototype, "skipAppResign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", Date)
    ], Run.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Run.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stopped" }),
        __metadata("design:type", Date)
    ], Run.prototype, "stopped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testSpecArn" }),
        __metadata("design:type", String)
    ], Run.prototype, "testSpecArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalJobs" }),
        __metadata("design:type", Number)
    ], Run.prototype, "totalJobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Run.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webUrl" }),
        __metadata("design:type", String)
    ], Run.prototype, "webUrl", void 0);
    return Run;
}(SpeakeasyBase));
export { Run };
