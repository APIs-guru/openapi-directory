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
// PresetWatermark
/**
 * <p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to overlay over videos that are transcoded using this preset. You can specify settings for up to four watermarks. Watermarks appear in the specified size and location, and with the specified opacity for the duration of the transcoded video.</p> <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.</p> <p>When you create a job that uses this preset, you specify the .png or .jpg graphics that you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics in the job than you specify watermark settings in the preset, which allows you to use the same preset for up to four watermarks that have different dimensions.</p>
**/
var PresetWatermark = /** @class */ (function (_super) {
    __extends(PresetWatermark, _super);
    function PresetWatermark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HorizontalAlign" }),
        __metadata("design:type", String)
    ], PresetWatermark.prototype, "horizontalAlign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HorizontalOffset" }),
        __metadata("design:type", String)
    ], PresetWatermark.prototype, "horizontalOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], PresetWatermark.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxHeight" }),
        __metadata("design:type", String)
    ], PresetWatermark.prototype, "maxHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxWidth" }),
        __metadata("design:type", String)
    ], PresetWatermark.prototype, "maxWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Opacity" }),
        __metadata("design:type", String)
    ], PresetWatermark.prototype, "opacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SizingPolicy" }),
        __metadata("design:type", String)
    ], PresetWatermark.prototype, "sizingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Target" }),
        __metadata("design:type", String)
    ], PresetWatermark.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerticalAlign" }),
        __metadata("design:type", String)
    ], PresetWatermark.prototype, "verticalAlign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerticalOffset" }),
        __metadata("design:type", String)
    ], PresetWatermark.prototype, "verticalOffset", void 0);
    return PresetWatermark;
}(SpeakeasyBase));
export { PresetWatermark };
