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
import { ServiceStatusEnum } from "./servicestatusenum";
// ServiceSummary
/**
 * <p>Provides summary information for an AWS App Runner service.</p> <p>This type contains limited information about a service. It doesn't include configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action. Complete service information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_Service.html">Service</a> type.</p>
**/
var ServiceSummary = /** @class */ (function (_super) {
    __extends(ServiceSummary, _super);
    function ServiceSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], ServiceSummary.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceArn" }),
        __metadata("design:type", String)
    ], ServiceSummary.prototype, "serviceArn", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceId" }),
        __metadata("design:type", String)
    ], ServiceSummary.prototype, "serviceId", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceName" }),
        __metadata("design:type", String)
    ], ServiceSummary.prototype, "serviceName", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceUrl" }),
        __metadata("design:type", String)
    ], ServiceSummary.prototype, "serviceUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ServiceSummary.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=UpdatedAt" }),
        __metadata("design:type", Date)
    ], ServiceSummary.prototype, "updatedAt", void 0);
    return ServiceSummary;
}(SpeakeasyBase));
export { ServiceSummary };
