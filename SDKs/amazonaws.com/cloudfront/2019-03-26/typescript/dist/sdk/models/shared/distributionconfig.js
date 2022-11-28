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
import { CacheBehaviors } from "./cachebehaviors";
import { CustomErrorResponses } from "./customerrorresponses";
import { DefaultCacheBehavior } from "./defaultcachebehavior";
import { HttpVersionEnum } from "./httpversionenum";
import { LoggingConfig } from "./loggingconfig";
import { OriginGroups } from "./origingroups";
import { Origins } from "./origins";
import { PriceClassEnum } from "./priceclassenum";
import { Restrictions } from "./restrictions";
import { ViewerCertificate } from "./viewercertificate";
// DistributionConfig
/**
 * A distribution configuration.
**/
var DistributionConfig = /** @class */ (function (_super) {
    __extends(DistributionConfig, _super);
    function DistributionConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Aliases)
    ], DistributionConfig.prototype, "aliases", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CacheBehaviors)
    ], DistributionConfig.prototype, "cacheBehaviors", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DistributionConfig.prototype, "callerReference", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DistributionConfig.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CustomErrorResponses)
    ], DistributionConfig.prototype, "customErrorResponses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DefaultCacheBehavior)
    ], DistributionConfig.prototype, "defaultCacheBehavior", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DistributionConfig.prototype, "defaultRootObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DistributionConfig.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DistributionConfig.prototype, "httpVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DistributionConfig.prototype, "isIpv6Enabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingConfig)
    ], DistributionConfig.prototype, "logging", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OriginGroups)
    ], DistributionConfig.prototype, "originGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Origins)
    ], DistributionConfig.prototype, "origins", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DistributionConfig.prototype, "priceClass", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Restrictions)
    ], DistributionConfig.prototype, "restrictions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ViewerCertificate)
    ], DistributionConfig.prototype, "viewerCertificate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DistributionConfig.prototype, "webAclId", void 0);
    return DistributionConfig;
}(SpeakeasyBase));
export { DistributionConfig };
