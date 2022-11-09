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
import { ReplicationTaskAssessmentRunProgress } from "./replicationtaskassessmentrunprogress";
// ReplicationTaskAssessmentRun
/**
 * <p>Provides information that describes a premigration assessment run that you have started using the <code>StartReplicationTaskAssessmentRun</code> operation.</p> <p>Some of the information appears based on other operations that can return the <code>ReplicationTaskAssessmentRun</code> object.</p>
**/
var ReplicationTaskAssessmentRun = /** @class */ (function (_super) {
    __extends(ReplicationTaskAssessmentRun, _super);
    function ReplicationTaskAssessmentRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AssessmentProgress" }),
        __metadata("design:type", ReplicationTaskAssessmentRunProgress)
    ], ReplicationTaskAssessmentRun.prototype, "assessmentProgress", void 0);
    __decorate([
        Metadata({ data: "json, name=AssessmentRunName" }),
        __metadata("design:type", String)
    ], ReplicationTaskAssessmentRun.prototype, "assessmentRunName", void 0);
    __decorate([
        Metadata({ data: "json, name=LastFailureMessage" }),
        __metadata("design:type", String)
    ], ReplicationTaskAssessmentRun.prototype, "lastFailureMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=ReplicationTaskArn" }),
        __metadata("design:type", String)
    ], ReplicationTaskAssessmentRun.prototype, "replicationTaskArn", void 0);
    __decorate([
        Metadata({ data: "json, name=ReplicationTaskAssessmentRunArn" }),
        __metadata("design:type", String)
    ], ReplicationTaskAssessmentRun.prototype, "replicationTaskAssessmentRunArn", void 0);
    __decorate([
        Metadata({ data: "json, name=ReplicationTaskAssessmentRunCreationDate" }),
        __metadata("design:type", Date)
    ], ReplicationTaskAssessmentRun.prototype, "replicationTaskAssessmentRunCreationDate", void 0);
    __decorate([
        Metadata({ data: "json, name=ResultEncryptionMode" }),
        __metadata("design:type", String)
    ], ReplicationTaskAssessmentRun.prototype, "resultEncryptionMode", void 0);
    __decorate([
        Metadata({ data: "json, name=ResultKmsKeyArn" }),
        __metadata("design:type", String)
    ], ReplicationTaskAssessmentRun.prototype, "resultKmsKeyArn", void 0);
    __decorate([
        Metadata({ data: "json, name=ResultLocationBucket" }),
        __metadata("design:type", String)
    ], ReplicationTaskAssessmentRun.prototype, "resultLocationBucket", void 0);
    __decorate([
        Metadata({ data: "json, name=ResultLocationFolder" }),
        __metadata("design:type", String)
    ], ReplicationTaskAssessmentRun.prototype, "resultLocationFolder", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceAccessRoleArn" }),
        __metadata("design:type", String)
    ], ReplicationTaskAssessmentRun.prototype, "serviceAccessRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ReplicationTaskAssessmentRun.prototype, "status", void 0);
    return ReplicationTaskAssessmentRun;
}(SpeakeasyBase));
export { ReplicationTaskAssessmentRun };
