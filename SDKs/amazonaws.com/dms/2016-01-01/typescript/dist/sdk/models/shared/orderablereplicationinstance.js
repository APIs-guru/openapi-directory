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
import { ReleaseStatusValuesEnum } from "./releasestatusvaluesenum";
// OrderableReplicationInstance
/**
 * In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage.
**/
var OrderableReplicationInstance = /** @class */ (function (_super) {
    __extends(OrderableReplicationInstance, _super);
    function OrderableReplicationInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AvailabilityZones" }),
        __metadata("design:type", Array)
    ], OrderableReplicationInstance.prototype, "availabilityZones", void 0);
    __decorate([
        Metadata({ data: "json, name=DefaultAllocatedStorage" }),
        __metadata("design:type", Number)
    ], OrderableReplicationInstance.prototype, "defaultAllocatedStorage", void 0);
    __decorate([
        Metadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], OrderableReplicationInstance.prototype, "engineVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=IncludedAllocatedStorage" }),
        __metadata("design:type", Number)
    ], OrderableReplicationInstance.prototype, "includedAllocatedStorage", void 0);
    __decorate([
        Metadata({ data: "json, name=MaxAllocatedStorage" }),
        __metadata("design:type", Number)
    ], OrderableReplicationInstance.prototype, "maxAllocatedStorage", void 0);
    __decorate([
        Metadata({ data: "json, name=MinAllocatedStorage" }),
        __metadata("design:type", Number)
    ], OrderableReplicationInstance.prototype, "minAllocatedStorage", void 0);
    __decorate([
        Metadata({ data: "json, name=ReleaseStatus" }),
        __metadata("design:type", String)
    ], OrderableReplicationInstance.prototype, "releaseStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=ReplicationInstanceClass" }),
        __metadata("design:type", String)
    ], OrderableReplicationInstance.prototype, "replicationInstanceClass", void 0);
    __decorate([
        Metadata({ data: "json, name=StorageType" }),
        __metadata("design:type", String)
    ], OrderableReplicationInstance.prototype, "storageType", void 0);
    return OrderableReplicationInstance;
}(SpeakeasyBase));
export { OrderableReplicationInstance };
