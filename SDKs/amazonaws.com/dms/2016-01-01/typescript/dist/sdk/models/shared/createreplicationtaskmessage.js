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
import { MigrationTypeValueEnum } from "./migrationtypevalueenum";
// CreateReplicationTaskMessage
/**
 * <p/>
**/
var CreateReplicationTaskMessage = /** @class */ (function (_super) {
    __extends(CreateReplicationTaskMessage, _super);
    function CreateReplicationTaskMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CdcStartPosition" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskMessage.prototype, "cdcStartPosition", void 0);
    __decorate([
        Metadata({ data: "json, name=CdcStartTime" }),
        __metadata("design:type", Date)
    ], CreateReplicationTaskMessage.prototype, "cdcStartTime", void 0);
    __decorate([
        Metadata({ data: "json, name=CdcStopPosition" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskMessage.prototype, "cdcStopPosition", void 0);
    __decorate([
        Metadata({ data: "json, name=MigrationType" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskMessage.prototype, "migrationType", void 0);
    __decorate([
        Metadata({ data: "json, name=ReplicationInstanceArn" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskMessage.prototype, "replicationInstanceArn", void 0);
    __decorate([
        Metadata({ data: "json, name=ReplicationTaskIdentifier" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskMessage.prototype, "replicationTaskIdentifier", void 0);
    __decorate([
        Metadata({ data: "json, name=ReplicationTaskSettings" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskMessage.prototype, "replicationTaskSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=ResourceIdentifier" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskMessage.prototype, "resourceIdentifier", void 0);
    __decorate([
        Metadata({ data: "json, name=SourceEndpointArn" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskMessage.prototype, "sourceEndpointArn", void 0);
    __decorate([
        Metadata({ data: "json, name=TableMappings" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskMessage.prototype, "tableMappings", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateReplicationTaskMessage.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=TargetEndpointArn" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskMessage.prototype, "targetEndpointArn", void 0);
    __decorate([
        Metadata({ data: "json, name=TaskData" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskMessage.prototype, "taskData", void 0);
    return CreateReplicationTaskMessage;
}(SpeakeasyBase));
export { CreateReplicationTaskMessage };
