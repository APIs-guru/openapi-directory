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
import { ExperimentState } from "./experimentstate";
// Experiment
/**
 * Describes an experiment.
**/
var Experiment = /** @class */ (function (_super) {
    __extends(Experiment, _super);
    function Experiment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=actions", elemType: shared.ExperimentAction }),
        __metadata("design:type", Map)
    ], Experiment.prototype, "actions", void 0);
    __decorate([
        Metadata({ data: "json, name=creationTime" }),
        __metadata("design:type", Date)
    ], Experiment.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], Experiment.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=experimentTemplateId" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "experimentTemplateId", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], Experiment.prototype, "roleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], Experiment.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", ExperimentState)
    ], Experiment.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=stopConditions", elemType: shared.ExperimentStopCondition }),
        __metadata("design:type", Array)
    ], Experiment.prototype, "stopConditions", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], Experiment.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=targets", elemType: shared.ExperimentTarget }),
        __metadata("design:type", Map)
    ], Experiment.prototype, "targets", void 0);
    return Experiment;
}(SpeakeasyBase));
export { Experiment };
