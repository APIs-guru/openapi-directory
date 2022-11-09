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
import { EndpointSettingTypeValueEnum } from "./endpointsettingtypevalueenum";
// EndpointSetting
/**
 * Endpoint settings.
**/
var EndpointSetting = /** @class */ (function (_super) {
    __extends(EndpointSetting, _super);
    function EndpointSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Applicability" }),
        __metadata("design:type", String)
    ], EndpointSetting.prototype, "applicability", void 0);
    __decorate([
        Metadata({ data: "json, name=DefaultValue" }),
        __metadata("design:type", String)
    ], EndpointSetting.prototype, "defaultValue", void 0);
    __decorate([
        Metadata({ data: "json, name=EnumValues" }),
        __metadata("design:type", Array)
    ], EndpointSetting.prototype, "enumValues", void 0);
    __decorate([
        Metadata({ data: "json, name=IntValueMax" }),
        __metadata("design:type", Number)
    ], EndpointSetting.prototype, "intValueMax", void 0);
    __decorate([
        Metadata({ data: "json, name=IntValueMin" }),
        __metadata("design:type", Number)
    ], EndpointSetting.prototype, "intValueMin", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], EndpointSetting.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=Sensitive" }),
        __metadata("design:type", Boolean)
    ], EndpointSetting.prototype, "sensitive", void 0);
    __decorate([
        Metadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], EndpointSetting.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=Units" }),
        __metadata("design:type", String)
    ], EndpointSetting.prototype, "units", void 0);
    return EndpointSetting;
}(SpeakeasyBase));
export { EndpointSetting };
