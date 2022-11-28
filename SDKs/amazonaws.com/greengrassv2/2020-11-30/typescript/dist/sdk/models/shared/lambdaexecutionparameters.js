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
import { LambdaEventSource } from "./lambdaeventsource";
import { LambdaInputPayloadEncodingTypeEnum } from "./lambdainputpayloadencodingtypeenum";
import { LambdaLinuxProcessParams } from "./lambdalinuxprocessparams";
// LambdaExecutionParameters
/**
 * Contains parameters for a Lambda function that runs on IoT Greengrass.
**/
var LambdaExecutionParameters = /** @class */ (function (_super) {
    __extends(LambdaExecutionParameters, _super);
    function LambdaExecutionParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], LambdaExecutionParameters.prototype, "environmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventSources", elemType: LambdaEventSource }),
        __metadata("design:type", Array)
    ], LambdaExecutionParameters.prototype, "eventSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=execArgs" }),
        __metadata("design:type", Array)
    ], LambdaExecutionParameters.prototype, "execArgs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputPayloadEncodingType" }),
        __metadata("design:type", String)
    ], LambdaExecutionParameters.prototype, "inputPayloadEncodingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linuxProcessParams" }),
        __metadata("design:type", LambdaLinuxProcessParams)
    ], LambdaExecutionParameters.prototype, "linuxProcessParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxIdleTimeInSeconds" }),
        __metadata("design:type", Number)
    ], LambdaExecutionParameters.prototype, "maxIdleTimeInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxInstancesCount" }),
        __metadata("design:type", Number)
    ], LambdaExecutionParameters.prototype, "maxInstancesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxQueueSize" }),
        __metadata("design:type", Number)
    ], LambdaExecutionParameters.prototype, "maxQueueSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinned" }),
        __metadata("design:type", Boolean)
    ], LambdaExecutionParameters.prototype, "pinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusTimeoutInSeconds" }),
        __metadata("design:type", Number)
    ], LambdaExecutionParameters.prototype, "statusTimeoutInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" }),
        __metadata("design:type", Number)
    ], LambdaExecutionParameters.prototype, "timeoutInSeconds", void 0);
    return LambdaExecutionParameters;
}(SpeakeasyBase));
export { LambdaExecutionParameters };
