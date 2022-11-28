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
import { InstanceFleetTypeEnum } from "./instancefleettypeenum";
// ListInstancesInput
/**
 * This input determines which instances to list.
**/
var ListInstancesInput = /** @class */ (function (_super) {
    __extends(ListInstancesInput, _super);
    function ListInstancesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterId" }),
        __metadata("design:type", String)
    ], ListInstancesInput.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceFleetId" }),
        __metadata("design:type", String)
    ], ListInstancesInput.prototype, "instanceFleetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceFleetType" }),
        __metadata("design:type", String)
    ], ListInstancesInput.prototype, "instanceFleetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceGroupId" }),
        __metadata("design:type", String)
    ], ListInstancesInput.prototype, "instanceGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceGroupTypes" }),
        __metadata("design:type", Array)
    ], ListInstancesInput.prototype, "instanceGroupTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceStates" }),
        __metadata("design:type", Array)
    ], ListInstancesInput.prototype, "instanceStates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Marker" }),
        __metadata("design:type", String)
    ], ListInstancesInput.prototype, "marker", void 0);
    return ListInstancesInput;
}(SpeakeasyBase));
export { ListInstancesInput };
