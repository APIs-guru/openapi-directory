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
import { AuthorizerConfig } from "./authorizerconfig";
import { DomainConfigurationStatusEnum } from "./domainconfigurationstatusenum";
import { DomainTypeEnum } from "./domaintypeenum";
import { ServerCertificateSummary } from "./servercertificatesummary";
import { ServiceTypeEnum } from "./servicetypeenum";
var DescribeDomainConfigurationResponse = /** @class */ (function (_super) {
    __extends(DescribeDomainConfigurationResponse, _super);
    function DescribeDomainConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizerConfig" }),
        __metadata("design:type", AuthorizerConfig)
    ], DescribeDomainConfigurationResponse.prototype, "authorizerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainConfigurationArn" }),
        __metadata("design:type", String)
    ], DescribeDomainConfigurationResponse.prototype, "domainConfigurationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainConfigurationName" }),
        __metadata("design:type", String)
    ], DescribeDomainConfigurationResponse.prototype, "domainConfigurationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainConfigurationStatus" }),
        __metadata("design:type", String)
    ], DescribeDomainConfigurationResponse.prototype, "domainConfigurationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainName" }),
        __metadata("design:type", String)
    ], DescribeDomainConfigurationResponse.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainType" }),
        __metadata("design:type", String)
    ], DescribeDomainConfigurationResponse.prototype, "domainType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastStatusChangeDate" }),
        __metadata("design:type", Date)
    ], DescribeDomainConfigurationResponse.prototype, "lastStatusChangeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverCertificates", elemType: ServerCertificateSummary }),
        __metadata("design:type", Array)
    ], DescribeDomainConfigurationResponse.prototype, "serverCertificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceType" }),
        __metadata("design:type", String)
    ], DescribeDomainConfigurationResponse.prototype, "serviceType", void 0);
    return DescribeDomainConfigurationResponse;
}(SpeakeasyBase));
export { DescribeDomainConfigurationResponse };
