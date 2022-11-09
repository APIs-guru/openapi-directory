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
import { QuantumTaskStatusEnum } from "./quantumtaskstatusenum";
// QuantumTaskSummary
/**
 * Includes information about a quantum task.
**/
var QuantumTaskSummary = /** @class */ (function (_super) {
    __extends(QuantumTaskSummary, _super);
    function QuantumTaskSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], QuantumTaskSummary.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceArn" }),
        __metadata("design:type", String)
    ], QuantumTaskSummary.prototype, "deviceArn", void 0);
    __decorate([
        Metadata({ data: "json, name=endedAt" }),
        __metadata("design:type", Date)
    ], QuantumTaskSummary.prototype, "endedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=outputS3Bucket" }),
        __metadata("design:type", String)
    ], QuantumTaskSummary.prototype, "outputS3Bucket", void 0);
    __decorate([
        Metadata({ data: "json, name=outputS3Directory" }),
        __metadata("design:type", String)
    ], QuantumTaskSummary.prototype, "outputS3Directory", void 0);
    __decorate([
        Metadata({ data: "json, name=quantumTaskArn" }),
        __metadata("design:type", String)
    ], QuantumTaskSummary.prototype, "quantumTaskArn", void 0);
    __decorate([
        Metadata({ data: "json, name=shots" }),
        __metadata("design:type", Number)
    ], QuantumTaskSummary.prototype, "shots", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], QuantumTaskSummary.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], QuantumTaskSummary.prototype, "tags", void 0);
    return QuantumTaskSummary;
}(SpeakeasyBase));
export { QuantumTaskSummary };
