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
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";
import { ReplicationTaskStats } from "./replicationtaskstats";
// ReplicationTask
/**
 * Provides information that describes a replication task created by the <code>CreateReplicationTask</code> operation.
**/
var ReplicationTask = /** @class */ (function (_super) {
    __extends(ReplicationTask, _super);
    function ReplicationTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CdcStartPosition" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "cdcStartPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CdcStopPosition" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "cdcStopPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastFailureMessage" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "lastFailureMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MigrationType" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "migrationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecoveryCheckpoint" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "recoveryCheckpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "replicationInstanceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "replicationTaskArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationTaskCreationDate" }),
        __metadata("design:type", Date)
    ], ReplicationTask.prototype, "replicationTaskCreationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationTaskIdentifier" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "replicationTaskIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationTaskSettings" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "replicationTaskSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationTaskStartDate" }),
        __metadata("design:type", Date)
    ], ReplicationTask.prototype, "replicationTaskStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationTaskStats" }),
        __metadata("design:type", ReplicationTaskStats)
    ], ReplicationTask.prototype, "replicationTaskStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceEndpointArn" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "sourceEndpointArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopReason" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "stopReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableMappings" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "tableMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetEndpointArn" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "targetEndpointArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetReplicationInstanceArn" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "targetReplicationInstanceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskData" }),
        __metadata("design:type", String)
    ], ReplicationTask.prototype, "taskData", void 0);
    return ReplicationTask;
}(SpeakeasyBase));
export { ReplicationTask };
