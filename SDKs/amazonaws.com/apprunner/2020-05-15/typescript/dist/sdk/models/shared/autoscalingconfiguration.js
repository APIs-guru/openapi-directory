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
import { AutoScalingConfigurationStatusEnum } from "./autoscalingconfigurationstatusenum";
// AutoScalingConfiguration
/**
 * <p>Describes an AWS App Runner automatic scaling configuration resource. Multiple revisions of a configuration have the same <code>AutoScalingConfigurationName</code> and different <code>AutoScalingConfigurationRevision</code> values.</p> <p>A higher <code>MinSize</code> increases the spread of your App Runner service over more Availability Zones in the AWS Region. The tradeoff is a higher minimal cost.</p> <p>A lower <code>MaxSize</code> controls your cost. The tradeoff is lower responsiveness during peak demand.</p>
**/
var AutoScalingConfiguration = /** @class */ (function (_super) {
    __extends(AutoScalingConfiguration, _super);
    function AutoScalingConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AutoScalingConfigurationArn" }),
        __metadata("design:type", String)
    ], AutoScalingConfiguration.prototype, "autoScalingConfigurationArn", void 0);
    __decorate([
        Metadata({ data: "json, name=AutoScalingConfigurationName" }),
        __metadata("design:type", String)
    ], AutoScalingConfiguration.prototype, "autoScalingConfigurationName", void 0);
    __decorate([
        Metadata({ data: "json, name=AutoScalingConfigurationRevision" }),
        __metadata("design:type", Number)
    ], AutoScalingConfiguration.prototype, "autoScalingConfigurationRevision", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], AutoScalingConfiguration.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=DeletedAt" }),
        __metadata("design:type", Date)
    ], AutoScalingConfiguration.prototype, "deletedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=Latest" }),
        __metadata("design:type", Boolean)
    ], AutoScalingConfiguration.prototype, "latest", void 0);
    __decorate([
        Metadata({ data: "json, name=MaxConcurrency" }),
        __metadata("design:type", Number)
    ], AutoScalingConfiguration.prototype, "maxConcurrency", void 0);
    __decorate([
        Metadata({ data: "json, name=MaxSize" }),
        __metadata("design:type", Number)
    ], AutoScalingConfiguration.prototype, "maxSize", void 0);
    __decorate([
        Metadata({ data: "json, name=MinSize" }),
        __metadata("design:type", Number)
    ], AutoScalingConfiguration.prototype, "minSize", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AutoScalingConfiguration.prototype, "status", void 0);
    return AutoScalingConfiguration;
}(SpeakeasyBase));
export { AutoScalingConfiguration };
