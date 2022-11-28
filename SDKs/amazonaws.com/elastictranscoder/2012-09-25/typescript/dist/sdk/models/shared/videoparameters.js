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
import { PresetWatermark } from "./presetwatermark";
// VideoParameters
/**
 * The <code>VideoParameters</code> structure.
**/
var VideoParameters = /** @class */ (function (_super) {
    __extends(VideoParameters, _super);
    function VideoParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AspectRatio" }),
        __metadata("design:type", String)
    ], VideoParameters.prototype, "aspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BitRate" }),
        __metadata("design:type", String)
    ], VideoParameters.prototype, "bitRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Codec" }),
        __metadata("design:type", String)
    ], VideoParameters.prototype, "codec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodecOptions" }),
        __metadata("design:type", Map)
    ], VideoParameters.prototype, "codecOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayAspectRatio" }),
        __metadata("design:type", String)
    ], VideoParameters.prototype, "displayAspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FixedGOP" }),
        __metadata("design:type", String)
    ], VideoParameters.prototype, "fixedGop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FrameRate" }),
        __metadata("design:type", String)
    ], VideoParameters.prototype, "frameRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyframesMaxDist" }),
        __metadata("design:type", String)
    ], VideoParameters.prototype, "keyframesMaxDist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxFrameRate" }),
        __metadata("design:type", String)
    ], VideoParameters.prototype, "maxFrameRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxHeight" }),
        __metadata("design:type", String)
    ], VideoParameters.prototype, "maxHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxWidth" }),
        __metadata("design:type", String)
    ], VideoParameters.prototype, "maxWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaddingPolicy" }),
        __metadata("design:type", String)
    ], VideoParameters.prototype, "paddingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Resolution" }),
        __metadata("design:type", String)
    ], VideoParameters.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SizingPolicy" }),
        __metadata("design:type", String)
    ], VideoParameters.prototype, "sizingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Watermarks", elemType: PresetWatermark }),
        __metadata("design:type", Array)
    ], VideoParameters.prototype, "watermarks", void 0);
    return VideoParameters;
}(SpeakeasyBase));
export { VideoParameters };
