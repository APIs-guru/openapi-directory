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
import { Aliases } from "./aliases";
import { PriceClassEnum } from "./priceclassenum";
import { S3Origin } from "./s3origin";
import { TrustedSigners } from "./trustedsigners";
// StreamingDistributionSummary
/**
 *  A summary of the information for an Amazon CloudFront streaming distribution.
**/
var StreamingDistributionSummary = /** @class */ (function (_super) {
    __extends(StreamingDistributionSummary, _super);
    function StreamingDistributionSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StreamingDistributionSummary.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Aliases)
    ], StreamingDistributionSummary.prototype, "aliases", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StreamingDistributionSummary.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StreamingDistributionSummary.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], StreamingDistributionSummary.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StreamingDistributionSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], StreamingDistributionSummary.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StreamingDistributionSummary.prototype, "priceClass", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", S3Origin)
    ], StreamingDistributionSummary.prototype, "s3Origin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StreamingDistributionSummary.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TrustedSigners)
    ], StreamingDistributionSummary.prototype, "trustedSigners", void 0);
    return StreamingDistributionSummary;
}(SpeakeasyBase));
export { StreamingDistributionSummary };
