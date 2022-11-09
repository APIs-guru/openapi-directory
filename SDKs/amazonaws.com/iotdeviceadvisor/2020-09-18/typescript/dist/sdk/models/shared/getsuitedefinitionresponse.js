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
import { SuiteDefinitionConfiguration } from "./suitedefinitionconfiguration";
var GetSuiteDefinitionResponse = /** @class */ (function (_super) {
    __extends(GetSuiteDefinitionResponse, _super);
    function GetSuiteDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], GetSuiteDefinitionResponse.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=lastModifiedAt" }),
        __metadata("design:type", Date)
    ], GetSuiteDefinitionResponse.prototype, "lastModifiedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=latestVersion" }),
        __metadata("design:type", String)
    ], GetSuiteDefinitionResponse.prototype, "latestVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=suiteDefinitionArn" }),
        __metadata("design:type", String)
    ], GetSuiteDefinitionResponse.prototype, "suiteDefinitionArn", void 0);
    __decorate([
        Metadata({ data: "json, name=suiteDefinitionConfiguration" }),
        __metadata("design:type", SuiteDefinitionConfiguration)
    ], GetSuiteDefinitionResponse.prototype, "suiteDefinitionConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=suiteDefinitionId" }),
        __metadata("design:type", String)
    ], GetSuiteDefinitionResponse.prototype, "suiteDefinitionId", void 0);
    __decorate([
        Metadata({ data: "json, name=suiteDefinitionVersion" }),
        __metadata("design:type", String)
    ], GetSuiteDefinitionResponse.prototype, "suiteDefinitionVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], GetSuiteDefinitionResponse.prototype, "tags", void 0);
    return GetSuiteDefinitionResponse;
}(SpeakeasyBase));
export { GetSuiteDefinitionResponse };
