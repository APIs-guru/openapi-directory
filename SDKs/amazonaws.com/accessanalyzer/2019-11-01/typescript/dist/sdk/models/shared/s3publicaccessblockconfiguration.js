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
// S3PublicAccessBlockConfiguration
/**
 * The <code>PublicAccessBlock</code> configuration to apply to this Amazon S3 bucket. If the proposed configuration is for an existing Amazon S3 bucket and the configuration is not specified, the access preview uses the existing setting. If the proposed configuration is for a new bucket and the configuration is not specified, the access preview uses <code>false</code>. If the proposed configuration is for a new access point or multi-region access point and the access point BPA configuration is not specified, the access preview uses <code>true</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html">PublicAccessBlockConfiguration</a>.
**/
var S3PublicAccessBlockConfiguration = /** @class */ (function (_super) {
    __extends(S3PublicAccessBlockConfiguration, _super);
    function S3PublicAccessBlockConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignorePublicAcls" }),
        __metadata("design:type", Boolean)
    ], S3PublicAccessBlockConfiguration.prototype, "ignorePublicAcls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictPublicBuckets" }),
        __metadata("design:type", Boolean)
    ], S3PublicAccessBlockConfiguration.prototype, "restrictPublicBuckets", void 0);
    return S3PublicAccessBlockConfiguration;
}(SpeakeasyBase));
export { S3PublicAccessBlockConfiguration };
