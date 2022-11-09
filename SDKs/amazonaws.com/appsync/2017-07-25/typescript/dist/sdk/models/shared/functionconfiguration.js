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
import { SyncConfig } from "./syncconfig";
// FunctionConfiguration
/**
 * A function is a reusable entity. Multiple functions can be used to compose the resolver logic.
**/
var FunctionConfiguration = /** @class */ (function (_super) {
    __extends(FunctionConfiguration, _super);
    function FunctionConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=dataSourceName" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "dataSourceName", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=functionArn" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "functionArn", void 0);
    __decorate([
        Metadata({ data: "json, name=functionId" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "functionId", void 0);
    __decorate([
        Metadata({ data: "json, name=functionVersion" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "functionVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=requestMappingTemplate" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "requestMappingTemplate", void 0);
    __decorate([
        Metadata({ data: "json, name=responseMappingTemplate" }),
        __metadata("design:type", String)
    ], FunctionConfiguration.prototype, "responseMappingTemplate", void 0);
    __decorate([
        Metadata({ data: "json, name=syncConfig" }),
        __metadata("design:type", SyncConfig)
    ], FunctionConfiguration.prototype, "syncConfig", void 0);
    return FunctionConfiguration;
}(SpeakeasyBase));
export { FunctionConfiguration };
