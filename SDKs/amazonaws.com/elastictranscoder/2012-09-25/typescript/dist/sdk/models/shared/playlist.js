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
import { HlsContentProtection } from "./hlscontentprotection";
import { PlayReadyDrm } from "./playreadydrm";
// Playlist
/**
 *  Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create. We recommend that you create only one master playlist per output format. The maximum number of master playlists in a job is 30.
**/
var Playlist = /** @class */ (function (_super) {
    __extends(Playlist, _super);
    function Playlist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Format" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HlsContentProtection" }),
        __metadata("design:type", HlsContentProtection)
    ], Playlist.prototype, "hlsContentProtection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputKeys" }),
        __metadata("design:type", Array)
    ], Playlist.prototype, "outputKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayReadyDrm" }),
        __metadata("design:type", PlayReadyDrm)
    ], Playlist.prototype, "playReadyDrm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusDetail" }),
        __metadata("design:type", String)
    ], Playlist.prototype, "statusDetail", void 0);
    return Playlist;
}(SpeakeasyBase));
export { Playlist };
