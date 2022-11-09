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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { ScalingActivityStatusCodeEnum } from "./scalingactivitystatuscodeenum";
// ScalingActivity
/**
 * Represents a scaling activity.
**/
var ScalingActivity = /** @class */ (function (_super) {
    __extends(ScalingActivity, _super);
    function ScalingActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ActivityId" }),
        __metadata("design:type", String)
    ], ScalingActivity.prototype, "activityId", void 0);
    __decorate([
        Metadata({ data: "json, name=Cause" }),
        __metadata("design:type", String)
    ], ScalingActivity.prototype, "cause", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ScalingActivity.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=Details" }),
        __metadata("design:type", String)
    ], ScalingActivity.prototype, "details", void 0);
    __decorate([
        Metadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], ScalingActivity.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=ResourceId" }),
        __metadata("design:type", String)
    ], ScalingActivity.prototype, "resourceId", void 0);
    __decorate([
        Metadata({ data: "json, name=ScalableDimension" }),
        __metadata("design:type", String)
    ], ScalingActivity.prototype, "scalableDimension", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceNamespace" }),
        __metadata("design:type", String)
    ], ScalingActivity.prototype, "serviceNamespace", void 0);
    __decorate([
        Metadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], ScalingActivity.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "json, name=StatusCode" }),
        __metadata("design:type", String)
    ], ScalingActivity.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], ScalingActivity.prototype, "statusMessage", void 0);
    return ScalingActivity;
}(SpeakeasyBase));
export { ScalingActivity };
