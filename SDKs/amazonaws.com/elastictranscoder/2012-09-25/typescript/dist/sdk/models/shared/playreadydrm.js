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
// PlayReadyDrm
/**
 * <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p>
**/
var PlayReadyDrm = /** @class */ (function (_super) {
    __extends(PlayReadyDrm, _super);
    function PlayReadyDrm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Format" }),
        __metadata("design:type", String)
    ], PlayReadyDrm.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InitializationVector" }),
        __metadata("design:type", String)
    ], PlayReadyDrm.prototype, "initializationVector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Key" }),
        __metadata("design:type", String)
    ], PlayReadyDrm.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyId" }),
        __metadata("design:type", String)
    ], PlayReadyDrm.prototype, "keyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyMd5" }),
        __metadata("design:type", String)
    ], PlayReadyDrm.prototype, "keyMd5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseAcquisitionUrl" }),
        __metadata("design:type", String)
    ], PlayReadyDrm.prototype, "licenseAcquisitionUrl", void 0);
    return PlayReadyDrm;
}(SpeakeasyBase));
export { PlayReadyDrm };
