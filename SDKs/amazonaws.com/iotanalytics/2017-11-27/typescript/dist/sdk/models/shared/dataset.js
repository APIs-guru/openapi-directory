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
import { RetentionPeriod } from "./retentionperiod";
import { DatasetStatusEnum } from "./datasetstatusenum";
import { VersioningConfiguration } from "./versioningconfiguration";
// Dataset
/**
 * Information about a dataset.
**/
var Dataset = /** @class */ (function (_super) {
    __extends(Dataset, _super);
    function Dataset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=actions", elemType: shared.DatasetAction }),
        __metadata("design:type", Array)
    ], Dataset.prototype, "actions", void 0);
    __decorate([
        Metadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=contentDeliveryRules", elemType: shared.DatasetContentDeliveryRule }),
        __metadata("design:type", Array)
    ], Dataset.prototype, "contentDeliveryRules", void 0);
    __decorate([
        Metadata({ data: "json, name=creationTime" }),
        __metadata("design:type", Date)
    ], Dataset.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=lastUpdateTime" }),
        __metadata("design:type", Date)
    ], Dataset.prototype, "lastUpdateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=lateDataRules", elemType: shared.LateDataRule }),
        __metadata("design:type", Array)
    ], Dataset.prototype, "lateDataRules", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=retentionPeriod" }),
        __metadata("design:type", RetentionPeriod)
    ], Dataset.prototype, "retentionPeriod", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=triggers", elemType: shared.DatasetTrigger }),
        __metadata("design:type", Array)
    ], Dataset.prototype, "triggers", void 0);
    __decorate([
        Metadata({ data: "json, name=versioningConfiguration" }),
        __metadata("design:type", VersioningConfiguration)
    ], Dataset.prototype, "versioningConfiguration", void 0);
    return Dataset;
}(SpeakeasyBase));
export { Dataset };
