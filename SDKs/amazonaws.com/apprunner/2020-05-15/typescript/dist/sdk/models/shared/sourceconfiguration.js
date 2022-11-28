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
import { AuthenticationConfiguration } from "./authenticationconfiguration";
import { CodeRepository } from "./coderepository";
import { ImageRepository } from "./imagerepository";
// SourceConfiguration
/**
 * Describes the source deployed to an AWS App Runner service. It can be a code or an image repository.
**/
var SourceConfiguration = /** @class */ (function (_super) {
    __extends(SourceConfiguration, _super);
    function SourceConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthenticationConfiguration" }),
        __metadata("design:type", AuthenticationConfiguration)
    ], SourceConfiguration.prototype, "authenticationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoDeploymentsEnabled" }),
        __metadata("design:type", Boolean)
    ], SourceConfiguration.prototype, "autoDeploymentsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodeRepository" }),
        __metadata("design:type", CodeRepository)
    ], SourceConfiguration.prototype, "codeRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageRepository" }),
        __metadata("design:type", ImageRepository)
    ], SourceConfiguration.prototype, "imageRepository", void 0);
    return SourceConfiguration;
}(SpeakeasyBase));
export { SourceConfiguration };
