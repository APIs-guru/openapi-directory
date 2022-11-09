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
import * as shared from "../shared";
import { AssessmentReportsDestination } from "./assessmentreportsdestination";
import { Scope } from "./scope";
import { AssessmentStatusEnum } from "./assessmentstatusenum";
// AssessmentMetadata
/**
 *  The metadata associated with the specified assessment.
**/
var AssessmentMetadata = /** @class */ (function (_super) {
    __extends(AssessmentMetadata, _super);
    function AssessmentMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=assessmentReportsDestination" }),
        __metadata("design:type", AssessmentReportsDestination)
    ], AssessmentMetadata.prototype, "assessmentReportsDestination", void 0);
    __decorate([
        Metadata({ data: "json, name=complianceType" }),
        __metadata("design:type", String)
    ], AssessmentMetadata.prototype, "complianceType", void 0);
    __decorate([
        Metadata({ data: "json, name=creationTime" }),
        __metadata("design:type", Date)
    ], AssessmentMetadata.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=delegations", elemType: shared.Delegation }),
        __metadata("design:type", Array)
    ], AssessmentMetadata.prototype, "delegations", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AssessmentMetadata.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssessmentMetadata.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], AssessmentMetadata.prototype, "lastUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AssessmentMetadata.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=roles", elemType: shared.Role }),
        __metadata("design:type", Array)
    ], AssessmentMetadata.prototype, "roles", void 0);
    __decorate([
        Metadata({ data: "json, name=scope" }),
        __metadata("design:type", Scope)
    ], AssessmentMetadata.prototype, "scope", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AssessmentMetadata.prototype, "status", void 0);
    return AssessmentMetadata;
}(SpeakeasyBase));
export { AssessmentMetadata };
