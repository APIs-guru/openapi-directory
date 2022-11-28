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
// Cors
/**
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
**/
var Cors = /** @class */ (function (_super) {
    __extends(Cors, _super);
    function Cors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowCredentials" }),
        __metadata("design:type", Boolean)
    ], Cors.prototype, "allowCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowHeaders" }),
        __metadata("design:type", Array)
    ], Cors.prototype, "allowHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowMethods" }),
        __metadata("design:type", Array)
    ], Cors.prototype, "allowMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowOrigins" }),
        __metadata("design:type", Array)
    ], Cors.prototype, "allowOrigins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExposeHeaders" }),
        __metadata("design:type", Array)
    ], Cors.prototype, "exposeHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAge" }),
        __metadata("design:type", Number)
    ], Cors.prototype, "maxAge", void 0);
    return Cors;
}(SpeakeasyBase));
export { Cors };
