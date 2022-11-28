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
// Encryption
/**
 * The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files.
**/
var Encryption = /** @class */ (function (_super) {
    __extends(Encryption, _super);
    function Encryption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InitializationVector" }),
        __metadata("design:type", String)
    ], Encryption.prototype, "initializationVector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Key" }),
        __metadata("design:type", String)
    ], Encryption.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyMd5" }),
        __metadata("design:type", String)
    ], Encryption.prototype, "keyMd5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mode" }),
        __metadata("design:type", String)
    ], Encryption.prototype, "mode", void 0);
    return Encryption;
}(SpeakeasyBase));
export { Encryption };
