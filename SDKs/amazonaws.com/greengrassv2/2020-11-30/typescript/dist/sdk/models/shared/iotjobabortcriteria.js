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
import { IoTJobAbortActionEnum } from "./iotjobabortactionenum";
import { IoTJobExecutionFailureTypeEnum } from "./iotjobexecutionfailuretypeenum";
// IoTJobAbortCriteria
/**
 * <p>Contains criteria that define when and how to cancel a job.</p> <p>The deployment stops if the following conditions are true:</p> <ol> <li> <p>The number of things that receive the deployment exceeds the <code>minNumberOfExecutedThings</code>.</p> </li> <li> <p>The percentage of failures with type <code>failureType</code> exceeds the <code>thresholdPercentage</code>.</p> </li> </ol>
**/
var IoTJobAbortCriteria = /** @class */ (function (_super) {
    __extends(IoTJobAbortCriteria, _super);
    function IoTJobAbortCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], IoTJobAbortCriteria.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureType" }),
        __metadata("design:type", String)
    ], IoTJobAbortCriteria.prototype, "failureType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minNumberOfExecutedThings" }),
        __metadata("design:type", Number)
    ], IoTJobAbortCriteria.prototype, "minNumberOfExecutedThings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholdPercentage" }),
        __metadata("design:type", Number)
    ], IoTJobAbortCriteria.prototype, "thresholdPercentage", void 0);
    return IoTJobAbortCriteria;
}(SpeakeasyBase));
export { IoTJobAbortCriteria };
