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
import { OriginRequestPolicyCookiesConfig } from "./originrequestpolicycookiesconfig";
import { OriginRequestPolicyHeadersConfig } from "./originrequestpolicyheadersconfig";
import { OriginRequestPolicyQueryStringsConfig } from "./originrequestpolicyquerystringsconfig";
// OriginRequestPolicyConfig
/**
 * <p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can’t find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>
**/
var OriginRequestPolicyConfig = /** @class */ (function (_super) {
    __extends(OriginRequestPolicyConfig, _super);
    function OriginRequestPolicyConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OriginRequestPolicyConfig.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OriginRequestPolicyCookiesConfig)
    ], OriginRequestPolicyConfig.prototype, "cookiesConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OriginRequestPolicyHeadersConfig)
    ], OriginRequestPolicyConfig.prototype, "headersConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OriginRequestPolicyConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OriginRequestPolicyQueryStringsConfig)
    ], OriginRequestPolicyConfig.prototype, "queryStringsConfig", void 0);
    return OriginRequestPolicyConfig;
}(SpeakeasyBase));
export { OriginRequestPolicyConfig };
