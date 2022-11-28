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
import { OperationStatusEnum } from "./operationstatusenum";
import { OperationTypeEnum } from "./operationtypeenum";
// OperationSummary
/**
 * Provides summary information for an operation that occurred on an AWS App Runner service.
**/
var OperationSummary = /** @class */ (function (_super) {
    __extends(OperationSummary, _super);
    function OperationSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndedAt" }),
        __metadata("design:type", Date)
    ], OperationSummary.prototype, "endedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], OperationSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartedAt" }),
        __metadata("design:type", Date)
    ], OperationSummary.prototype, "startedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], OperationSummary.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetArn" }),
        __metadata("design:type", String)
    ], OperationSummary.prototype, "targetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], OperationSummary.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedAt" }),
        __metadata("design:type", Date)
    ], OperationSummary.prototype, "updatedAt", void 0);
    return OperationSummary;
}(SpeakeasyBase));
export { OperationSummary };
