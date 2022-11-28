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
import { PolicyDetails } from "./policydetails";
import { GettablePolicyStateValuesEnum } from "./gettablepolicystatevaluesenum";
// LifecyclePolicy
/**
 * Detailed information about a lifecycle policy.
**/
var LifecyclePolicy = /** @class */ (function (_super) {
    __extends(LifecyclePolicy, _super);
    function LifecyclePolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateCreated" }),
        __metadata("design:type", Date)
    ], LifecyclePolicy.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateModified" }),
        __metadata("design:type", Date)
    ], LifecyclePolicy.prototype, "dateModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], LifecyclePolicy.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" }),
        __metadata("design:type", String)
    ], LifecyclePolicy.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyArn" }),
        __metadata("design:type", String)
    ], LifecyclePolicy.prototype, "policyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyDetails" }),
        __metadata("design:type", PolicyDetails)
    ], LifecyclePolicy.prototype, "policyDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyId" }),
        __metadata("design:type", String)
    ], LifecyclePolicy.prototype, "policyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], LifecyclePolicy.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], LifecyclePolicy.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], LifecyclePolicy.prototype, "tags", void 0);
    return LifecyclePolicy;
}(SpeakeasyBase));
export { LifecyclePolicy };
