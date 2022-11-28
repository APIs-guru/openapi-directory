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
import * as shared from "../shared";
var CreatePresetHeaders = /** @class */ (function (_super) {
    __extends(CreatePresetHeaders, _super);
    function CreatePresetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreatePresetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreatePresetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreatePresetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreatePresetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreatePresetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreatePresetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreatePresetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreatePresetHeaders;
}(SpeakeasyBase));
export { CreatePresetHeaders };
// CreatePresetRequestBodyAudio
/**
 * Parameters required for transcoding audio.
**/
var CreatePresetRequestBodyAudio = /** @class */ (function (_super) {
    __extends(CreatePresetRequestBodyAudio, _super);
    function CreatePresetRequestBodyAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AudioPackingMode" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyAudio.prototype, "audioPackingMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BitRate" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyAudio.prototype, "bitRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Channels" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyAudio.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Codec" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyAudio.prototype, "codec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodecOptions" }),
        __metadata("design:type", shared.AudioCodecOptions)
    ], CreatePresetRequestBodyAudio.prototype, "codecOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SampleRate" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyAudio.prototype, "sampleRate", void 0);
    return CreatePresetRequestBodyAudio;
}(SpeakeasyBase));
export { CreatePresetRequestBodyAudio };
// CreatePresetRequestBodyThumbnails
/**
 * Thumbnails for videos.
**/
var CreatePresetRequestBodyThumbnails = /** @class */ (function (_super) {
    __extends(CreatePresetRequestBodyThumbnails, _super);
    function CreatePresetRequestBodyThumbnails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AspectRatio" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyThumbnails.prototype, "aspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Format" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyThumbnails.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Interval" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyThumbnails.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxHeight" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyThumbnails.prototype, "maxHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxWidth" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyThumbnails.prototype, "maxWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaddingPolicy" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyThumbnails.prototype, "paddingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Resolution" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyThumbnails.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SizingPolicy" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyThumbnails.prototype, "sizingPolicy", void 0);
    return CreatePresetRequestBodyThumbnails;
}(SpeakeasyBase));
export { CreatePresetRequestBodyThumbnails };
// CreatePresetRequestBodyVideo
/**
 * The <code>VideoParameters</code> structure.
**/
var CreatePresetRequestBodyVideo = /** @class */ (function (_super) {
    __extends(CreatePresetRequestBodyVideo, _super);
    function CreatePresetRequestBodyVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AspectRatio" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyVideo.prototype, "aspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BitRate" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyVideo.prototype, "bitRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Codec" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyVideo.prototype, "codec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodecOptions" }),
        __metadata("design:type", Map)
    ], CreatePresetRequestBodyVideo.prototype, "codecOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayAspectRatio" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyVideo.prototype, "displayAspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FixedGOP" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyVideo.prototype, "fixedGop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FrameRate" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyVideo.prototype, "frameRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyframesMaxDist" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyVideo.prototype, "keyframesMaxDist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxFrameRate" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyVideo.prototype, "maxFrameRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxHeight" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyVideo.prototype, "maxHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxWidth" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyVideo.prototype, "maxWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaddingPolicy" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyVideo.prototype, "paddingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Resolution" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyVideo.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SizingPolicy" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBodyVideo.prototype, "sizingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Watermarks", elemType: shared.PresetWatermark }),
        __metadata("design:type", Array)
    ], CreatePresetRequestBodyVideo.prototype, "watermarks", void 0);
    return CreatePresetRequestBodyVideo;
}(SpeakeasyBase));
export { CreatePresetRequestBodyVideo };
var CreatePresetRequestBody = /** @class */ (function (_super) {
    __extends(CreatePresetRequestBody, _super);
    function CreatePresetRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Audio" }),
        __metadata("design:type", CreatePresetRequestBodyAudio)
    ], CreatePresetRequestBody.prototype, "audio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Container" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBody.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreatePresetRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Thumbnails" }),
        __metadata("design:type", CreatePresetRequestBodyThumbnails)
    ], CreatePresetRequestBody.prototype, "thumbnails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Video" }),
        __metadata("design:type", CreatePresetRequestBodyVideo)
    ], CreatePresetRequestBody.prototype, "video", void 0);
    return CreatePresetRequestBody;
}(SpeakeasyBase));
export { CreatePresetRequestBody };
var CreatePresetRequest = /** @class */ (function (_super) {
    __extends(CreatePresetRequest, _super);
    function CreatePresetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePresetHeaders)
    ], CreatePresetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreatePresetRequestBody)
    ], CreatePresetRequest.prototype, "request", void 0);
    return CreatePresetRequest;
}(SpeakeasyBase));
export { CreatePresetRequest };
var CreatePresetResponse = /** @class */ (function (_super) {
    __extends(CreatePresetResponse, _super);
    function CreatePresetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePresetResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePresetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreatePresetResponse)
    ], CreatePresetResponse.prototype, "createPresetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePresetResponse.prototype, "incompatibleVersionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePresetResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePresetResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePresetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePresetResponse.prototype, "validationException", void 0);
    return CreatePresetResponse;
}(SpeakeasyBase));
export { CreatePresetResponse };
