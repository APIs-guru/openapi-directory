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
import { NonCompliantResource } from "./noncompliantresource";
import { RelatedResource } from "./relatedresource";
import { AuditFindingSeverityEnum } from "./auditfindingseverityenum";
// AuditFinding
/**
 * The findings (results) of the audit.
**/
var AuditFinding = /** @class */ (function (_super) {
    __extends(AuditFinding, _super);
    function AuditFinding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkName" }),
        __metadata("design:type", String)
    ], AuditFinding.prototype, "checkName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findingId" }),
        __metadata("design:type", String)
    ], AuditFinding.prototype, "findingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findingTime" }),
        __metadata("design:type", Date)
    ], AuditFinding.prototype, "findingTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSuppressed" }),
        __metadata("design:type", Boolean)
    ], AuditFinding.prototype, "isSuppressed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonCompliantResource" }),
        __metadata("design:type", NonCompliantResource)
    ], AuditFinding.prototype, "nonCompliantResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reasonForNonCompliance" }),
        __metadata("design:type", String)
    ], AuditFinding.prototype, "reasonForNonCompliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reasonForNonComplianceCode" }),
        __metadata("design:type", String)
    ], AuditFinding.prototype, "reasonForNonComplianceCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedResources", elemType: RelatedResource }),
        __metadata("design:type", Array)
    ], AuditFinding.prototype, "relatedResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], AuditFinding.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskId" }),
        __metadata("design:type", String)
    ], AuditFinding.prototype, "taskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskStartTime" }),
        __metadata("design:type", Date)
    ], AuditFinding.prototype, "taskStartTime", void 0);
    return AuditFinding;
}(SpeakeasyBase));
export { AuditFinding };
