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
import { AggregateConformancePackCompliance } from "./aggregateconformancepackcompliance";
// AggregateComplianceByConformancePack
/**
 * <p>Provides aggregate compliance of the conformance pack. Indicates whether a conformance pack is compliant based on the name of the conformance pack, account ID, and region.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>
**/
var AggregateComplianceByConformancePack = /** @class */ (function (_super) {
    __extends(AggregateComplianceByConformancePack, _super);
    function AggregateComplianceByConformancePack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], AggregateComplianceByConformancePack.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsRegion" }),
        __metadata("design:type", String)
    ], AggregateComplianceByConformancePack.prototype, "awsRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Compliance" }),
        __metadata("design:type", AggregateConformancePackCompliance)
    ], AggregateComplianceByConformancePack.prototype, "compliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConformancePackName" }),
        __metadata("design:type", String)
    ], AggregateComplianceByConformancePack.prototype, "conformancePackName", void 0);
    return AggregateComplianceByConformancePack;
}(SpeakeasyBase));
export { AggregateComplianceByConformancePack };
