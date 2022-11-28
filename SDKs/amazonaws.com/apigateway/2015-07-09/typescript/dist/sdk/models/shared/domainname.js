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
import { DomainNameStatusEnum } from "./domainnamestatusenum";
import { EndpointConfiguration } from "./endpointconfiguration";
import { MutualTlsAuthentication } from "./mutualtlsauthentication";
import { SecurityPolicyEnum } from "./securitypolicyenum";
// DomainName
/**
 * <p>Represents a custom domain name as a user-friendly host name of an API (<a>RestApi</a>).</p> <div class="Remarks"> <p>When you deploy an API, API Gateway creates a default host name for the API. This default API host name is of the <code>{restapi-id}.execute-api.{region}.amazonaws.com</code> format. With the default host name, you can access the API's root resource with the URL of <code>https://{restapi-id}.execute-api.{region}.amazonaws.com/{stage}/</code>. When you set up a custom domain name of <code>apis.example.com</code> for this API, you can then access the same resource using the URL of the <code>https://apis.examples.com/myApi</code>, where <code>myApi</code> is the base path mapping (<a>BasePathMapping</a>) of your API under the custom domain name. </p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Set a Custom Host Name for an API</a> </div>
**/
var DomainName = /** @class */ (function (_super) {
    __extends(DomainName, _super);
    function DomainName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateArn" }),
        __metadata("design:type", String)
    ], DomainName.prototype, "certificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateName" }),
        __metadata("design:type", String)
    ], DomainName.prototype, "certificateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateUploadDate" }),
        __metadata("design:type", Date)
    ], DomainName.prototype, "certificateUploadDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributionDomainName" }),
        __metadata("design:type", String)
    ], DomainName.prototype, "distributionDomainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distributionHostedZoneId" }),
        __metadata("design:type", String)
    ], DomainName.prototype, "distributionHostedZoneId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainName" }),
        __metadata("design:type", String)
    ], DomainName.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainNameStatus" }),
        __metadata("design:type", String)
    ], DomainName.prototype, "domainNameStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainNameStatusMessage" }),
        __metadata("design:type", String)
    ], DomainName.prototype, "domainNameStatusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointConfiguration" }),
        __metadata("design:type", EndpointConfiguration)
    ], DomainName.prototype, "endpointConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mutualTlsAuthentication" }),
        __metadata("design:type", MutualTlsAuthentication)
    ], DomainName.prototype, "mutualTlsAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownershipVerificationCertificateArn" }),
        __metadata("design:type", String)
    ], DomainName.prototype, "ownershipVerificationCertificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionalCertificateArn" }),
        __metadata("design:type", String)
    ], DomainName.prototype, "regionalCertificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionalCertificateName" }),
        __metadata("design:type", String)
    ], DomainName.prototype, "regionalCertificateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionalDomainName" }),
        __metadata("design:type", String)
    ], DomainName.prototype, "regionalDomainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionalHostedZoneId" }),
        __metadata("design:type", String)
    ], DomainName.prototype, "regionalHostedZoneId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityPolicy" }),
        __metadata("design:type", String)
    ], DomainName.prototype, "securityPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], DomainName.prototype, "tags", void 0);
    return DomainName;
}(SpeakeasyBase));
export { DomainName };
