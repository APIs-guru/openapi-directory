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
var AppPkcs12P12File = /** @class */ (function (_super) {
    __extends(AppPkcs12P12File, _super);
    function AppPkcs12P12File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], AppPkcs12P12File.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=p12File" }),
        __metadata("design:type", String)
    ], AppPkcs12P12File.prototype, "p12File", void 0);
    return AppPkcs12P12File;
}(SpeakeasyBase));
export { AppPkcs12P12File };
var AppPkcs12 = /** @class */ (function (_super) {
    __extends(AppPkcs12, _super);
    function AppPkcs12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", AppPkcs12P12File)
    ], AppPkcs12.prototype, "p12File", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=p12Pass" }),
        __metadata("design:type", String)
    ], AppPkcs12.prototype, "p12Pass", void 0);
    return AppPkcs12;
}(SpeakeasyBase));
export { AppPkcs12 };
