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
import { JobAlbumArt } from "./jobalbumart";
import { Captions } from "./captions";
import { Clip } from "./clip";
import { Encryption } from "./encryption";
import { JobWatermark } from "./jobwatermark";
// CreateJobOutput
/**
 * The <code>CreateJobOutput</code> structure.
**/
var CreateJobOutput = /** @class */ (function (_super) {
    __extends(CreateJobOutput, _super);
    function CreateJobOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumArt" }),
        __metadata("design:type", JobAlbumArt)
    ], CreateJobOutput.prototype, "albumArt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Captions" }),
        __metadata("design:type", Captions)
    ], CreateJobOutput.prototype, "captions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Composition", elemType: Clip }),
        __metadata("design:type", Array)
    ], CreateJobOutput.prototype, "composition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Encryption" }),
        __metadata("design:type", Encryption)
    ], CreateJobOutput.prototype, "encryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Key" }),
        __metadata("design:type", String)
    ], CreateJobOutput.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PresetId" }),
        __metadata("design:type", String)
    ], CreateJobOutput.prototype, "presetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rotate" }),
        __metadata("design:type", String)
    ], CreateJobOutput.prototype, "rotate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentDuration" }),
        __metadata("design:type", String)
    ], CreateJobOutput.prototype, "segmentDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThumbnailEncryption" }),
        __metadata("design:type", Encryption)
    ], CreateJobOutput.prototype, "thumbnailEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThumbnailPattern" }),
        __metadata("design:type", String)
    ], CreateJobOutput.prototype, "thumbnailPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Watermarks", elemType: JobWatermark }),
        __metadata("design:type", Array)
    ], CreateJobOutput.prototype, "watermarks", void 0);
    return CreateJobOutput;
}(SpeakeasyBase));
export { CreateJobOutput };
