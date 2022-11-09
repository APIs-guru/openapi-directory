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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RedisAuthTypeValueEnum } from "./redisauthtypevalueenum";
import { SslSecurityProtocolValueEnum } from "./sslsecurityprotocolvalueenum";
// RedisSettings
/**
 * Provides information that defines a Redis target endpoint.
**/
var RedisSettings = /** @class */ (function (_super) {
    __extends(RedisSettings, _super);
    function RedisSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AuthPassword" }),
        __metadata("design:type", String)
    ], RedisSettings.prototype, "authPassword", void 0);
    __decorate([
        Metadata({ data: "json, name=AuthType" }),
        __metadata("design:type", String)
    ], RedisSettings.prototype, "authType", void 0);
    __decorate([
        Metadata({ data: "json, name=AuthUserName" }),
        __metadata("design:type", String)
    ], RedisSettings.prototype, "authUserName", void 0);
    __decorate([
        Metadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], RedisSettings.prototype, "port", void 0);
    __decorate([
        Metadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], RedisSettings.prototype, "serverName", void 0);
    __decorate([
        Metadata({ data: "json, name=SslCaCertificateArn" }),
        __metadata("design:type", String)
    ], RedisSettings.prototype, "sslCaCertificateArn", void 0);
    __decorate([
        Metadata({ data: "json, name=SslSecurityProtocol" }),
        __metadata("design:type", String)
    ], RedisSettings.prototype, "sslSecurityProtocol", void 0);
    return RedisSettings;
}(SpeakeasyBase));
export { RedisSettings };
