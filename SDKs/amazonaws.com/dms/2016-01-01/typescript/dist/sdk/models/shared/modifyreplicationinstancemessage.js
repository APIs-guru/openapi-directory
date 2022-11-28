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
// ModifyReplicationInstanceMessage
/**
 * <p/>
**/
var ModifyReplicationInstanceMessage = /** @class */ (function (_super) {
    __extends(ModifyReplicationInstanceMessage, _super);
    function ModifyReplicationInstanceMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllocatedStorage" }),
        __metadata("design:type", Number)
    ], ModifyReplicationInstanceMessage.prototype, "allocatedStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowMajorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], ModifyReplicationInstanceMessage.prototype, "allowMajorVersionUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplyImmediately" }),
        __metadata("design:type", Boolean)
    ], ModifyReplicationInstanceMessage.prototype, "applyImmediately", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoMinorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], ModifyReplicationInstanceMessage.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], ModifyReplicationInstanceMessage.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiAZ" }),
        __metadata("design:type", Boolean)
    ], ModifyReplicationInstanceMessage.prototype, "multiAz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], ModifyReplicationInstanceMessage.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" }),
        __metadata("design:type", String)
    ], ModifyReplicationInstanceMessage.prototype, "replicationInstanceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationInstanceClass" }),
        __metadata("design:type", String)
    ], ModifyReplicationInstanceMessage.prototype, "replicationInstanceClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationInstanceIdentifier" }),
        __metadata("design:type", String)
    ], ModifyReplicationInstanceMessage.prototype, "replicationInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcSecurityGroupIds" }),
        __metadata("design:type", Array)
    ], ModifyReplicationInstanceMessage.prototype, "vpcSecurityGroupIds", void 0);
    return ModifyReplicationInstanceMessage;
}(SpeakeasyBase));
export { ModifyReplicationInstanceMessage };
