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
import { ContainerProperties } from "./containerproperties";
import { NodeProperties } from "./nodeproperties";
import { RetryStrategy } from "./retrystrategy";
import { JobTimeout } from "./jobtimeout";
// JobDefinition
/**
 * An object representing an Batch job definition.
**/
var JobDefinition = /** @class */ (function (_super) {
    __extends(JobDefinition, _super);
    function JobDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=containerProperties" }),
        __metadata("design:type", ContainerProperties)
    ], JobDefinition.prototype, "containerProperties", void 0);
    __decorate([
        Metadata({ data: "json, name=jobDefinitionArn" }),
        __metadata("design:type", String)
    ], JobDefinition.prototype, "jobDefinitionArn", void 0);
    __decorate([
        Metadata({ data: "json, name=jobDefinitionName" }),
        __metadata("design:type", String)
    ], JobDefinition.prototype, "jobDefinitionName", void 0);
    __decorate([
        Metadata({ data: "json, name=nodeProperties" }),
        __metadata("design:type", NodeProperties)
    ], JobDefinition.prototype, "nodeProperties", void 0);
    __decorate([
        Metadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], JobDefinition.prototype, "parameters", void 0);
    __decorate([
        Metadata({ data: "json, name=platformCapabilities" }),
        __metadata("design:type", Array)
    ], JobDefinition.prototype, "platformCapabilities", void 0);
    __decorate([
        Metadata({ data: "json, name=propagateTags" }),
        __metadata("design:type", Boolean)
    ], JobDefinition.prototype, "propagateTags", void 0);
    __decorate([
        Metadata({ data: "json, name=retryStrategy" }),
        __metadata("design:type", RetryStrategy)
    ], JobDefinition.prototype, "retryStrategy", void 0);
    __decorate([
        Metadata({ data: "json, name=revision" }),
        __metadata("design:type", Number)
    ], JobDefinition.prototype, "revision", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], JobDefinition.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], JobDefinition.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=timeout" }),
        __metadata("design:type", JobTimeout)
    ], JobDefinition.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], JobDefinition.prototype, "type", void 0);
    return JobDefinition;
}(SpeakeasyBase));
export { JobDefinition };
