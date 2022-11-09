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
// CreateReplicationInstanceMessage
/**
 * <p/>
**/
var CreateReplicationInstanceMessage = /** @class */ (function (_super) {
    __extends(CreateReplicationInstanceMessage, _super);
    function CreateReplicationInstanceMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AllocatedStorage" }),
        __metadata("design:type", Number)
    ], CreateReplicationInstanceMessage.prototype, "allocatedStorage", void 0);
    __decorate([
        Metadata({ data: "json, name=AutoMinorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], CreateReplicationInstanceMessage.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        Metadata({ data: "json, name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceMessage.prototype, "availabilityZone", void 0);
    __decorate([
        Metadata({ data: "json, name=DnsNameServers" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceMessage.prototype, "dnsNameServers", void 0);
    __decorate([
        Metadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceMessage.prototype, "engineVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceMessage.prototype, "kmsKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=MultiAZ" }),
        __metadata("design:type", Boolean)
    ], CreateReplicationInstanceMessage.prototype, "multiAz", void 0);
    __decorate([
        Metadata({ data: "json, name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceMessage.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        Metadata({ data: "json, name=PubliclyAccessible" }),
        __metadata("design:type", Boolean)
    ], CreateReplicationInstanceMessage.prototype, "publiclyAccessible", void 0);
    __decorate([
        Metadata({ data: "json, name=ReplicationInstanceClass" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceMessage.prototype, "replicationInstanceClass", void 0);
    __decorate([
        Metadata({ data: "json, name=ReplicationInstanceIdentifier" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceMessage.prototype, "replicationInstanceIdentifier", void 0);
    __decorate([
        Metadata({ data: "json, name=ReplicationSubnetGroupIdentifier" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceMessage.prototype, "replicationSubnetGroupIdentifier", void 0);
    __decorate([
        Metadata({ data: "json, name=ResourceIdentifier" }),
        __metadata("design:type", String)
    ], CreateReplicationInstanceMessage.prototype, "resourceIdentifier", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateReplicationInstanceMessage.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=VpcSecurityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateReplicationInstanceMessage.prototype, "vpcSecurityGroupIds", void 0);
    return CreateReplicationInstanceMessage;
}(SpeakeasyBase));
export { CreateReplicationInstanceMessage };
