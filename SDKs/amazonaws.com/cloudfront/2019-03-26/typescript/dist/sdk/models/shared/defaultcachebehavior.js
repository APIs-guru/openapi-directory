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
import { AllowedMethods } from "./allowedmethods";
import { ForwardedValues } from "./forwardedvalues";
import { LambdaFunctionAssociations } from "./lambdafunctionassociations";
import { TrustedSigners } from "./trustedsigners";
import { ViewerProtocolPolicyEnum } from "./viewerprotocolpolicyenum";
// DefaultCacheBehavior
/**
 * A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
**/
var DefaultCacheBehavior = /** @class */ (function (_super) {
    __extends(DefaultCacheBehavior, _super);
    function DefaultCacheBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AllowedMethods)
    ], DefaultCacheBehavior.prototype, "allowedMethods", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DefaultCacheBehavior.prototype, "compress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DefaultCacheBehavior.prototype, "defaultTtl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DefaultCacheBehavior.prototype, "fieldLevelEncryptionId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ForwardedValues)
    ], DefaultCacheBehavior.prototype, "forwardedValues", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LambdaFunctionAssociations)
    ], DefaultCacheBehavior.prototype, "lambdaFunctionAssociations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DefaultCacheBehavior.prototype, "maxTtl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DefaultCacheBehavior.prototype, "minTtl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DefaultCacheBehavior.prototype, "smoothStreaming", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DefaultCacheBehavior.prototype, "targetOriginId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TrustedSigners)
    ], DefaultCacheBehavior.prototype, "trustedSigners", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DefaultCacheBehavior.prototype, "viewerProtocolPolicy", void 0);
    return DefaultCacheBehavior;
}(SpeakeasyBase));
export { DefaultCacheBehavior };
