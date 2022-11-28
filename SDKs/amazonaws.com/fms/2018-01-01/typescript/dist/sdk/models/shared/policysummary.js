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
import { SecurityServiceTypeEnum } from "./securityservicetypeenum";
// PolicySummary
/**
 * Details of the Firewall Manager policy.
**/
var PolicySummary = /** @class */ (function (_super) {
    __extends(PolicySummary, _super);
    function PolicySummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeleteUnusedFMManagedResources" }),
        __metadata("design:type", Boolean)
    ], PolicySummary.prototype, "deleteUnusedFmManagedResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyArn" }),
        __metadata("design:type", String)
    ], PolicySummary.prototype, "policyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyId" }),
        __metadata("design:type", String)
    ], PolicySummary.prototype, "policyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyName" }),
        __metadata("design:type", String)
    ], PolicySummary.prototype, "policyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemediationEnabled" }),
        __metadata("design:type", Boolean)
    ], PolicySummary.prototype, "remediationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceType" }),
        __metadata("design:type", String)
    ], PolicySummary.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityServiceType" }),
        __metadata("design:type", String)
    ], PolicySummary.prototype, "securityServiceType", void 0);
    return PolicySummary;
}(SpeakeasyBase));
export { PolicySummary };
