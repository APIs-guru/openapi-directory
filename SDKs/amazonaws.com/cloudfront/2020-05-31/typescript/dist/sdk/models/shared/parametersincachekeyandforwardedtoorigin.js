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
import { CachePolicyCookiesConfig } from "./cachepolicycookiesconfig";
import { CachePolicyHeadersConfig } from "./cachepolicyheadersconfig";
import { CachePolicyQueryStringsConfig } from "./cachepolicyquerystringsconfig";
// ParametersInCacheKeyAndForwardedToOrigin
/**
 * <p>This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> <p>The headers, cookies, and query strings that are included in the cache key are automatically included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t find an object in its cache that matches the request’s cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
**/
var ParametersInCacheKeyAndForwardedToOrigin = /** @class */ (function (_super) {
    __extends(ParametersInCacheKeyAndForwardedToOrigin, _super);
    function ParametersInCacheKeyAndForwardedToOrigin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CachePolicyCookiesConfig)
    ], ParametersInCacheKeyAndForwardedToOrigin.prototype, "cookiesConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ParametersInCacheKeyAndForwardedToOrigin.prototype, "enableAcceptEncodingBrotli", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ParametersInCacheKeyAndForwardedToOrigin.prototype, "enableAcceptEncodingGzip", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CachePolicyHeadersConfig)
    ], ParametersInCacheKeyAndForwardedToOrigin.prototype, "headersConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CachePolicyQueryStringsConfig)
    ], ParametersInCacheKeyAndForwardedToOrigin.prototype, "queryStringsConfig", void 0);
    return ParametersInCacheKeyAndForwardedToOrigin;
}(SpeakeasyBase));
export { ParametersInCacheKeyAndForwardedToOrigin };
