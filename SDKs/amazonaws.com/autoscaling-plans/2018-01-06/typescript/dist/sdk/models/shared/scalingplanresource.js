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
import { ScalingPolicy } from "./scalingpolicy";
import { ScalingStatusCodeEnum } from "./scalingstatuscodeenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
// ScalingPlanResource
/**
 * Represents a scalable resource.
**/
var ScalingPlanResource = /** @class */ (function (_super) {
    __extends(ScalingPlanResource, _super);
    function ScalingPlanResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceId" }),
        __metadata("design:type", String)
    ], ScalingPlanResource.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalableDimension" }),
        __metadata("design:type", String)
    ], ScalingPlanResource.prototype, "scalableDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalingPlanName" }),
        __metadata("design:type", String)
    ], ScalingPlanResource.prototype, "scalingPlanName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalingPlanVersion" }),
        __metadata("design:type", Number)
    ], ScalingPlanResource.prototype, "scalingPlanVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalingPolicies", elemType: ScalingPolicy }),
        __metadata("design:type", Array)
    ], ScalingPlanResource.prototype, "scalingPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalingStatusCode" }),
        __metadata("design:type", String)
    ], ScalingPlanResource.prototype, "scalingStatusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalingStatusMessage" }),
        __metadata("design:type", String)
    ], ScalingPlanResource.prototype, "scalingStatusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceNamespace" }),
        __metadata("design:type", String)
    ], ScalingPlanResource.prototype, "serviceNamespace", void 0);
    return ScalingPlanResource;
}(SpeakeasyBase));
export { ScalingPlanResource };
