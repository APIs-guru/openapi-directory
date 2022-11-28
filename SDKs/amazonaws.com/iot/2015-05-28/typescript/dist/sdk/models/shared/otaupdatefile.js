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
import { CodeSigning } from "./codesigning";
import { FileLocation } from "./filelocation";
// OtaUpdateFile
/**
 * Describes a file to be associated with an OTA update.
**/
var OtaUpdateFile = /** @class */ (function (_super) {
    __extends(OtaUpdateFile, _super);
    function OtaUpdateFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], OtaUpdateFile.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=codeSigning" }),
        __metadata("design:type", CodeSigning)
    ], OtaUpdateFile.prototype, "codeSigning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileLocation" }),
        __metadata("design:type", FileLocation)
    ], OtaUpdateFile.prototype, "fileLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileName" }),
        __metadata("design:type", String)
    ], OtaUpdateFile.prototype, "fileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileType" }),
        __metadata("design:type", Number)
    ], OtaUpdateFile.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileVersion" }),
        __metadata("design:type", String)
    ], OtaUpdateFile.prototype, "fileVersion", void 0);
    return OtaUpdateFile;
}(SpeakeasyBase));
export { OtaUpdateFile };
