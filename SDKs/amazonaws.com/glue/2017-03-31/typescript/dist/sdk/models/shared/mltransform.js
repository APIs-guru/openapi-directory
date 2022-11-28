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
import { EvaluationMetrics } from "./evaluationmetrics";
import { GlueTable } from "./gluetable";
import { TransformParameters } from "./transformparameters";
import { SchemaColumn } from "./schemacolumn";
import { TransformStatusTypeEnum } from "./transformstatustypeenum";
import { TransformEncryption } from "./transformencryption";
import { WorkerTypeEnum } from "./workertypeenum";
// MlTransform
/**
 * A structure for a machine learning transform.
**/
var MlTransform = /** @class */ (function (_super) {
    __extends(MlTransform, _super);
    function MlTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedOn" }),
        __metadata("design:type", Date)
    ], MlTransform.prototype, "createdOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], MlTransform.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EvaluationMetrics" }),
        __metadata("design:type", EvaluationMetrics)
    ], MlTransform.prototype, "evaluationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GlueVersion" }),
        __metadata("design:type", String)
    ], MlTransform.prototype, "glueVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputRecordTables", elemType: GlueTable }),
        __metadata("design:type", Array)
    ], MlTransform.prototype, "inputRecordTables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LabelCount" }),
        __metadata("design:type", Number)
    ], MlTransform.prototype, "labelCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedOn" }),
        __metadata("design:type", Date)
    ], MlTransform.prototype, "lastModifiedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxCapacity" }),
        __metadata("design:type", Number)
    ], MlTransform.prototype, "maxCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxRetries" }),
        __metadata("design:type", Number)
    ], MlTransform.prototype, "maxRetries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], MlTransform.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfWorkers" }),
        __metadata("design:type", Number)
    ], MlTransform.prototype, "numberOfWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", TransformParameters)
    ], MlTransform.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], MlTransform.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schema", elemType: SchemaColumn }),
        __metadata("design:type", Array)
    ], MlTransform.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], MlTransform.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timeout" }),
        __metadata("design:type", Number)
    ], MlTransform.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformEncryption" }),
        __metadata("design:type", TransformEncryption)
    ], MlTransform.prototype, "transformEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformId" }),
        __metadata("design:type", String)
    ], MlTransform.prototype, "transformId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkerType" }),
        __metadata("design:type", String)
    ], MlTransform.prototype, "workerType", void 0);
    return MlTransform;
}(SpeakeasyBase));
export { MlTransform };
