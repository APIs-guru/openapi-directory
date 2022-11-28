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
import { CertificateSourceEnum } from "./certificatesourceenum";
import { MinimumProtocolVersionEnum } from "./minimumprotocolversionenum";
import { SslSupportMethodEnum } from "./sslsupportmethodenum";
// ViewerCertificate
/**
 * <p>A complex type that specifies the following:</p> <ul> <li> <p>Which SSL/TLS certificate to use when viewers request objects using HTTPS</p> </li> <li> <p>Whether you want CloudFront to use dedicated IP addresses or SNI when you're using alternate domain names in your object names</p> </li> <li> <p>The minimum protocol version that you want CloudFront to use when communicating with viewers</p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html">Using an HTTPS Connection to Access Your Objects</a> in the <i>Amazon Amazon CloudFront Developer Guide</i>.</p>
**/
var ViewerCertificate = /** @class */ (function (_super) {
    __extends(ViewerCertificate, _super);
    function ViewerCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ViewerCertificate.prototype, "acmCertificateArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ViewerCertificate.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ViewerCertificate.prototype, "certificateSource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ViewerCertificate.prototype, "cloudFrontDefaultCertificate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ViewerCertificate.prototype, "iamCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ViewerCertificate.prototype, "minimumProtocolVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ViewerCertificate.prototype, "sslSupportMethod", void 0);
    return ViewerCertificate;
}(SpeakeasyBase));
export { ViewerCertificate };
