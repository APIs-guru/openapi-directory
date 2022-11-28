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
import { Duration } from "./duration";
// GrpcRetryPolicy
/**
 * An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.
**/
var GrpcRetryPolicy = /** @class */ (function (_super) {
    __extends(GrpcRetryPolicy, _super);
    function GrpcRetryPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grpcRetryEvents" }),
        __metadata("design:type", Array)
    ], GrpcRetryPolicy.prototype, "grpcRetryEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpRetryEvents" }),
        __metadata("design:type", Array)
    ], GrpcRetryPolicy.prototype, "httpRetryEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxRetries" }),
        __metadata("design:type", Number)
    ], GrpcRetryPolicy.prototype, "maxRetries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perRetryTimeout" }),
        __metadata("design:type", Duration)
    ], GrpcRetryPolicy.prototype, "perRetryTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tcpRetryEvents" }),
        __metadata("design:type", Array)
    ], GrpcRetryPolicy.prototype, "tcpRetryEvents", void 0);
    return GrpcRetryPolicy;
}(SpeakeasyBase));
export { GrpcRetryPolicy };
