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
import { ExecutionControls } from "./executioncontrols";
import { RemediationParameterValue } from "./remediationparametervalue";
import { RemediationTargetTypeEnum } from "./remediationtargettypeenum";
// RemediationConfiguration
/**
 * An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.
**/
var RemediationConfiguration = /** @class */ (function (_super) {
    __extends(RemediationConfiguration, _super);
    function RemediationConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], RemediationConfiguration.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Automatic" }),
        __metadata("design:type", Boolean)
    ], RemediationConfiguration.prototype, "automatic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigRuleName" }),
        __metadata("design:type", String)
    ], RemediationConfiguration.prototype, "configRuleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedByService" }),
        __metadata("design:type", String)
    ], RemediationConfiguration.prototype, "createdByService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionControls" }),
        __metadata("design:type", ExecutionControls)
    ], RemediationConfiguration.prototype, "executionControls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumAutomaticAttempts" }),
        __metadata("design:type", Number)
    ], RemediationConfiguration.prototype, "maximumAutomaticAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters", elemType: RemediationParameterValue }),
        __metadata("design:type", Map)
    ], RemediationConfiguration.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceType" }),
        __metadata("design:type", String)
    ], RemediationConfiguration.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetryAttemptSeconds" }),
        __metadata("design:type", Number)
    ], RemediationConfiguration.prototype, "retryAttemptSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetId" }),
        __metadata("design:type", String)
    ], RemediationConfiguration.prototype, "targetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetType" }),
        __metadata("design:type", String)
    ], RemediationConfiguration.prototype, "targetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetVersion" }),
        __metadata("design:type", String)
    ], RemediationConfiguration.prototype, "targetVersion", void 0);
    return RemediationConfiguration;
}(SpeakeasyBase));
export { RemediationConfiguration };
