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
import { RuntimeEnum } from "./runtimeenum";
// CodeConfigurationValues
/**
 * Describes the basic configuration needed for building and running an AWS App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a <code>apprunner.yaml</code> file in the source code repository.
**/
var CodeConfigurationValues = /** @class */ (function (_super) {
    __extends(CodeConfigurationValues, _super);
    function CodeConfigurationValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BuildCommand" }),
        __metadata("design:type", String)
    ], CodeConfigurationValues.prototype, "buildCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", String)
    ], CodeConfigurationValues.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Runtime" }),
        __metadata("design:type", String)
    ], CodeConfigurationValues.prototype, "runtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuntimeEnvironmentVariables" }),
        __metadata("design:type", Map)
    ], CodeConfigurationValues.prototype, "runtimeEnvironmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartCommand" }),
        __metadata("design:type", String)
    ], CodeConfigurationValues.prototype, "startCommand", void 0);
    return CodeConfigurationValues;
}(SpeakeasyBase));
export { CodeConfigurationValues };
