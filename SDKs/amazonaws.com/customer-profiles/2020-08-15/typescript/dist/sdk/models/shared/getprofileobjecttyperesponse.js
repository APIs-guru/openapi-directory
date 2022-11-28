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
import { ObjectTypeField } from "./objecttypefield";
import { ObjectTypeKey } from "./objecttypekey";
var GetProfileObjectTypeResponse = /** @class */ (function (_super) {
    __extends(GetProfileObjectTypeResponse, _super);
    function GetProfileObjectTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowProfileCreation" }),
        __metadata("design:type", Boolean)
    ], GetProfileObjectTypeResponse.prototype, "allowProfileCreation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], GetProfileObjectTypeResponse.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetProfileObjectTypeResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncryptionKey" }),
        __metadata("design:type", String)
    ], GetProfileObjectTypeResponse.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDays" }),
        __metadata("design:type", Number)
    ], GetProfileObjectTypeResponse.prototype, "expirationDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Fields", elemType: ObjectTypeField }),
        __metadata("design:type", Map)
    ], GetProfileObjectTypeResponse.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Keys", elemType: ObjectTypeKey, elemDepth: 2 }),
        __metadata("design:type", Map)
    ], GetProfileObjectTypeResponse.prototype, "keys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" }),
        __metadata("design:type", Date)
    ], GetProfileObjectTypeResponse.prototype, "lastUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectTypeName" }),
        __metadata("design:type", String)
    ], GetProfileObjectTypeResponse.prototype, "objectTypeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], GetProfileObjectTypeResponse.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateId" }),
        __metadata("design:type", String)
    ], GetProfileObjectTypeResponse.prototype, "templateId", void 0);
    return GetProfileObjectTypeResponse;
}(SpeakeasyBase));
export { GetProfileObjectTypeResponse };
