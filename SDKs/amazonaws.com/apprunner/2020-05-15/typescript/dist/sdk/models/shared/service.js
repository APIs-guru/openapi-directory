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
import { AutoScalingConfigurationSummary } from "./autoscalingconfigurationsummary";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { HealthCheckConfiguration } from "./healthcheckconfiguration";
import { InstanceConfiguration } from "./instanceconfiguration";
import { SourceConfiguration } from "./sourceconfiguration";
import { ServiceStatusEnum } from "./servicestatusenum";
// Service
/**
 * <p>Describes an AWS App Runner service. It can describe a service in any state, including deleted services.</p> <p>This type contains the full information about a service, including configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions. A subset of this information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html">ServiceSummary</a> type.</p>
**/
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AutoScalingConfigurationSummary" }),
        __metadata("design:type", AutoScalingConfigurationSummary)
    ], Service.prototype, "autoScalingConfigurationSummary", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], Service.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=DeletedAt" }),
        __metadata("design:type", Date)
    ], Service.prototype, "deletedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=EncryptionConfiguration" }),
        __metadata("design:type", EncryptionConfiguration)
    ], Service.prototype, "encryptionConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=HealthCheckConfiguration" }),
        __metadata("design:type", HealthCheckConfiguration)
    ], Service.prototype, "healthCheckConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=InstanceConfiguration" }),
        __metadata("design:type", InstanceConfiguration)
    ], Service.prototype, "instanceConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceArn" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceArn", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceId" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceId", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceName" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceName", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceUrl" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=SourceConfiguration" }),
        __metadata("design:type", SourceConfiguration)
    ], Service.prototype, "sourceConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Service.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=UpdatedAt" }),
        __metadata("design:type", Date)
    ], Service.prototype, "updatedAt", void 0);
    return Service;
}(SpeakeasyBase));
export { Service };
