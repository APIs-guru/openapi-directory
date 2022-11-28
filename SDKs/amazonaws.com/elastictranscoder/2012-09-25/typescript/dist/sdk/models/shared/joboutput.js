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
// JobOutput
/**
 * <important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p>
**/
var JobOutput = /** @class */ (function (_super) {
    __extends(JobOutput, _super);
    function JobOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumArt" }),
        __metadata("design:type", JobAlbumArt)
    ], JobOutput.prototype, "albumArt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppliedColorSpaceConversion" }),
        __metadata("design:type", String)
    ], JobOutput.prototype, "appliedColorSpaceConversion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Captions" }),
        __metadata("design:type", Captions)
    ], JobOutput.prototype, "captions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Composition", elemType: Clip }),
        __metadata("design:type", Array)
    ], JobOutput.prototype, "composition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Duration" }),
        __metadata("design:type", Number)
    ], JobOutput.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DurationMillis" }),
        __metadata("design:type", Number)
    ], JobOutput.prototype, "durationMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Encryption" }),
        __metadata("design:type", Encryption)
    ], JobOutput.prototype, "encryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSize" }),
        __metadata("design:type", Number)
    ], JobOutput.prototype, "fileSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FrameRate" }),
        __metadata("design:type", String)
    ], JobOutput.prototype, "frameRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Height" }),
        __metadata("design:type", Number)
    ], JobOutput.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], JobOutput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Key" }),
        __metadata("design:type", String)
    ], JobOutput.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PresetId" }),
        __metadata("design:type", String)
    ], JobOutput.prototype, "presetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rotate" }),
        __metadata("design:type", String)
    ], JobOutput.prototype, "rotate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentDuration" }),
        __metadata("design:type", String)
    ], JobOutput.prototype, "segmentDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], JobOutput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusDetail" }),
        __metadata("design:type", String)
    ], JobOutput.prototype, "statusDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThumbnailEncryption" }),
        __metadata("design:type", Encryption)
    ], JobOutput.prototype, "thumbnailEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThumbnailPattern" }),
        __metadata("design:type", String)
    ], JobOutput.prototype, "thumbnailPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Watermarks", elemType: JobWatermark }),
        __metadata("design:type", Array)
    ], JobOutput.prototype, "watermarks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Width" }),
        __metadata("design:type", Number)
    ], JobOutput.prototype, "width", void 0);
    return JobOutput;
}(SpeakeasyBase));
export { JobOutput };
