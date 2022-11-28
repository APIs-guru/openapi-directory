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
import { BackendApiAuthType } from "./backendapiauthtype";
import { BackendApiConflictResolution } from "./backendapiconflictresolution";
// BackendApiResourceConfig
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
var BackendApiResourceConfig = /** @class */ (function (_super) {
    __extends(BackendApiResourceConfig, _super);
    function BackendApiResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalAuthTypes", elemType: BackendApiAuthType }),
        __metadata("design:type", Array)
    ], BackendApiResourceConfig.prototype, "additionalAuthTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiName" }),
        __metadata("design:type", String)
    ], BackendApiResourceConfig.prototype, "apiName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConflictResolution" }),
        __metadata("design:type", BackendApiConflictResolution)
    ], BackendApiResourceConfig.prototype, "conflictResolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultAuthType" }),
        __metadata("design:type", BackendApiAuthType)
    ], BackendApiResourceConfig.prototype, "defaultAuthType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Service" }),
        __metadata("design:type", String)
    ], BackendApiResourceConfig.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransformSchema" }),
        __metadata("design:type", String)
    ], BackendApiResourceConfig.prototype, "transformSchema", void 0);
    return BackendApiResourceConfig;
}(SpeakeasyBase));
export { BackendApiResourceConfig };
