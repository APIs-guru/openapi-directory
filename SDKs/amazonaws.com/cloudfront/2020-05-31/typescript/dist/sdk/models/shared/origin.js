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
import { CustomHeaders } from "./customheaders";
import { CustomOriginConfig } from "./customoriginconfig";
import { OriginShield } from "./originshield";
import { S3OriginConfig } from "./s3originconfig";
// Origin
/**
 * <p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use <code>S3OriginConfig</code> to specify an Amazon S3 bucket that is not configured with static website hosting.</p> </li> <li> <p>Use <code>CustomOriginConfig</code> to specify all other kinds of origins, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An AWS Elemental MediaPackage endpoint</p> </li> <li> <p>An AWS Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p>
**/
var Origin = /** @class */ (function (_super) {
    __extends(Origin, _super);
    function Origin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Origin.prototype, "connectionAttempts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Origin.prototype, "connectionTimeout", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CustomHeaders)
    ], Origin.prototype, "customHeaders", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CustomOriginConfig)
    ], Origin.prototype, "customOriginConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Origin.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Origin.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Origin.prototype, "originPath", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OriginShield)
    ], Origin.prototype, "originShield", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", S3OriginConfig)
    ], Origin.prototype, "s3OriginConfig", void 0);
    return Origin;
}(SpeakeasyBase));
export { Origin };
