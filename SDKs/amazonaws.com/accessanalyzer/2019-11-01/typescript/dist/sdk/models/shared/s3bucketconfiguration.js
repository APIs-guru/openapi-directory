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
import { S3AccessPointConfiguration } from "./s3accesspointconfiguration";
import { S3BucketAclGrantConfiguration } from "./s3bucketaclgrantconfiguration";
import { S3PublicAccessBlockConfiguration } from "./s3publicaccessblockconfiguration";
// S3BucketConfiguration
/**
 * Proposed access control configuration for an Amazon S3 bucket. You can propose a configuration for a new Amazon S3 bucket or an existing Amazon S3 bucket that you own by specifying the Amazon S3 bucket policy, bucket ACLs, bucket BPA settings, Amazon S3 access points, and multi-region access points attached to the bucket. If the configuration is for an existing Amazon S3 bucket and you do not specify the Amazon S3 bucket policy, the access preview uses the existing policy attached to the bucket. If the access preview is for a new resource and you do not specify the Amazon S3 bucket policy, the access preview assumes a bucket without a policy. To propose deletion of an existing bucket policy, you can specify an empty string. For more information about bucket policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html">Bucket Policy Examples</a>.
**/
var S3BucketConfiguration = /** @class */ (function (_super) {
    __extends(S3BucketConfiguration, _super);
    function S3BucketConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPoints", elemType: S3AccessPointConfiguration }),
        __metadata("design:type", Map)
    ], S3BucketConfiguration.prototype, "accessPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketAclGrants", elemType: S3BucketAclGrantConfiguration }),
        __metadata("design:type", Array)
    ], S3BucketConfiguration.prototype, "bucketAclGrants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketPolicy" }),
        __metadata("design:type", String)
    ], S3BucketConfiguration.prototype, "bucketPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketPublicAccessBlock" }),
        __metadata("design:type", S3PublicAccessBlockConfiguration)
    ], S3BucketConfiguration.prototype, "bucketPublicAccessBlock", void 0);
    return S3BucketConfiguration;
}(SpeakeasyBase));
export { S3BucketConfiguration };
