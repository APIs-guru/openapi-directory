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
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndex } from "./globalsecondaryindex";
import { LocalSecondaryIndex } from "./localsecondaryindex";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { SseSpecification } from "./ssespecification";
var RestoreTableFromBackupInput = /** @class */ (function (_super) {
    __extends(RestoreTableFromBackupInput, _super);
    function RestoreTableFromBackupInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackupArn" }),
        __metadata("design:type", String)
    ], RestoreTableFromBackupInput.prototype, "backupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingModeOverride" }),
        __metadata("design:type", String)
    ], RestoreTableFromBackupInput.prototype, "billingModeOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexOverride", elemType: GlobalSecondaryIndex }),
        __metadata("design:type", Array)
    ], RestoreTableFromBackupInput.prototype, "globalSecondaryIndexOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalSecondaryIndexOverride", elemType: LocalSecondaryIndex }),
        __metadata("design:type", Array)
    ], RestoreTableFromBackupInput.prototype, "localSecondaryIndexOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputOverride" }),
        __metadata("design:type", ProvisionedThroughput)
    ], RestoreTableFromBackupInput.prototype, "provisionedThroughputOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SSESpecificationOverride" }),
        __metadata("design:type", SseSpecification)
    ], RestoreTableFromBackupInput.prototype, "sseSpecificationOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetTableName" }),
        __metadata("design:type", String)
    ], RestoreTableFromBackupInput.prototype, "targetTableName", void 0);
    return RestoreTableFromBackupInput;
}(SpeakeasyBase));
export { RestoreTableFromBackupInput };
