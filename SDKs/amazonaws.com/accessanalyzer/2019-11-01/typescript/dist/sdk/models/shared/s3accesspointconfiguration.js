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
import { NetworkOriginConfiguration } from "./networkoriginconfiguration";
import { S3PublicAccessBlockConfiguration } from "./s3publicaccessblockconfiguration";
// S3AccessPointConfiguration
/**
 * The configuration for an Amazon S3 access point or multi-region access point for the bucket. You can propose up to 10 access points or multi-region access points per bucket. If the proposed Amazon S3 access point configuration is for an existing bucket, the access preview uses the proposed access point configuration in place of the existing access points. To propose an access point without a policy, you can provide an empty string as the access point policy. For more information, see <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>. For more information about access point policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points-restrictions-limitations.html">Access points restrictions and limitations</a>.
**/
var S3AccessPointConfiguration = /** @class */ (function (_super) {
    __extends(S3AccessPointConfiguration, _super);
    function S3AccessPointConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPointPolicy" }),
        __metadata("design:type", String)
    ], S3AccessPointConfiguration.prototype, "accessPointPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkOrigin" }),
        __metadata("design:type", NetworkOriginConfiguration)
    ], S3AccessPointConfiguration.prototype, "networkOrigin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicAccessBlock" }),
        __metadata("design:type", S3PublicAccessBlockConfiguration)
    ], S3AccessPointConfiguration.prototype, "publicAccessBlock", void 0);
    return S3AccessPointConfiguration;
}(SpeakeasyBase));
export { S3AccessPointConfiguration };
