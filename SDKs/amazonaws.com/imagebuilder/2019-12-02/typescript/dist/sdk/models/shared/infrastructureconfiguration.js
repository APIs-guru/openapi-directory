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
import { Logging } from "./logging";
// InfrastructureConfiguration
/**
 * Details of the infrastructure configuration.
**/
var InfrastructureConfiguration = /** @class */ (function (_super) {
    __extends(InfrastructureConfiguration, _super);
    function InfrastructureConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], InfrastructureConfiguration.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", String)
    ], InfrastructureConfiguration.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateUpdated" }),
        __metadata("design:type", String)
    ], InfrastructureConfiguration.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InfrastructureConfiguration.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceProfileName" }),
        __metadata("design:type", String)
    ], InfrastructureConfiguration.prototype, "instanceProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceTypes" }),
        __metadata("design:type", Array)
    ], InfrastructureConfiguration.prototype, "instanceTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyPair" }),
        __metadata("design:type", String)
    ], InfrastructureConfiguration.prototype, "keyPair", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logging" }),
        __metadata("design:type", Logging)
    ], InfrastructureConfiguration.prototype, "logging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InfrastructureConfiguration.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceTags" }),
        __metadata("design:type", Map)
    ], InfrastructureConfiguration.prototype, "resourceTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityGroupIds" }),
        __metadata("design:type", Array)
    ], InfrastructureConfiguration.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snsTopicArn" }),
        __metadata("design:type", String)
    ], InfrastructureConfiguration.prototype, "snsTopicArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetId" }),
        __metadata("design:type", String)
    ], InfrastructureConfiguration.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], InfrastructureConfiguration.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terminateInstanceOnFailure" }),
        __metadata("design:type", Boolean)
    ], InfrastructureConfiguration.prototype, "terminateInstanceOnFailure", void 0);
    return InfrastructureConfiguration;
}(SpeakeasyBase));
export { InfrastructureConfiguration };
