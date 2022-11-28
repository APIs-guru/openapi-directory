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
import { NestingLevelValueEnum } from "./nestinglevelvalueenum";
// DocDbSettings
/**
 * Provides information that defines a DocumentDB endpoint.
**/
var DocDbSettings = /** @class */ (function (_super) {
    __extends(DocDbSettings, _super);
    function DocDbSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], DocDbSettings.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocsToInvestigate" }),
        __metadata("design:type", Number)
    ], DocDbSettings.prototype, "docsToInvestigate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtractDocId" }),
        __metadata("design:type", Boolean)
    ], DocDbSettings.prototype, "extractDocId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], DocDbSettings.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NestingLevel" }),
        __metadata("design:type", String)
    ], DocDbSettings.prototype, "nestingLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], DocDbSettings.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], DocDbSettings.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretsManagerAccessRoleArn" }),
        __metadata("design:type", String)
    ], DocDbSettings.prototype, "secretsManagerAccessRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecretsManagerSecretId" }),
        __metadata("design:type", String)
    ], DocDbSettings.prototype, "secretsManagerSecretId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], DocDbSettings.prototype, "serverName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], DocDbSettings.prototype, "username", void 0);
    return DocDbSettings;
}(SpeakeasyBase));
export { DocDbSettings };
