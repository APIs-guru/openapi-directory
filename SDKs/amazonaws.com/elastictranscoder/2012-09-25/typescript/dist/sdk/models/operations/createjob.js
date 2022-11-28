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
var CreateJobHeaders = /** @class */ (function (_super) {
    __extends(CreateJobHeaders, _super);
    function CreateJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateJobHeaders;
}(SpeakeasyBase));
export { CreateJobHeaders };
// CreateJobRequestBodyInput
/**
 * Information about the file that you're transcoding.
**/
var CreateJobRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateJobRequestBodyInput, _super);
    function CreateJobRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AspectRatio" }),
        __metadata("design:type", String)
    ], CreateJobRequestBodyInput.prototype, "aspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Container" }),
        __metadata("design:type", String)
    ], CreateJobRequestBodyInput.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DetectedProperties" }),
        __metadata("design:type", shared.DetectedProperties)
    ], CreateJobRequestBodyInput.prototype, "detectedProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Encryption" }),
        __metadata("design:type", shared.Encryption)
    ], CreateJobRequestBodyInput.prototype, "encryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FrameRate" }),
        __metadata("design:type", String)
    ], CreateJobRequestBodyInput.prototype, "frameRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputCaptions" }),
        __metadata("design:type", shared.InputCaptions)
    ], CreateJobRequestBodyInput.prototype, "inputCaptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Interlaced" }),
        __metadata("design:type", String)
    ], CreateJobRequestBodyInput.prototype, "interlaced", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Key" }),
        __metadata("design:type", String)
    ], CreateJobRequestBodyInput.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Resolution" }),
        __metadata("design:type", String)
    ], CreateJobRequestBodyInput.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeSpan" }),
        __metadata("design:type", shared.TimeSpan)
    ], CreateJobRequestBodyInput.prototype, "timeSpan", void 0);
    return CreateJobRequestBodyInput;
}(SpeakeasyBase));
export { CreateJobRequestBodyInput };
// CreateJobRequestBodyOutput
/**
 * The <code>CreateJobOutput</code> structure.
**/
var CreateJobRequestBodyOutput = /** @class */ (function (_super) {
    __extends(CreateJobRequestBodyOutput, _super);
    function CreateJobRequestBodyOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumArt" }),
        __metadata("design:type", shared.JobAlbumArt)
    ], CreateJobRequestBodyOutput.prototype, "albumArt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Captions" }),
        __metadata("design:type", shared.Captions)
    ], CreateJobRequestBodyOutput.prototype, "captions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Composition", elemType: shared.Clip }),
        __metadata("design:type", Array)
    ], CreateJobRequestBodyOutput.prototype, "composition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Encryption" }),
        __metadata("design:type", shared.Encryption)
    ], CreateJobRequestBodyOutput.prototype, "encryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Key" }),
        __metadata("design:type", String)
    ], CreateJobRequestBodyOutput.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PresetId" }),
        __metadata("design:type", String)
    ], CreateJobRequestBodyOutput.prototype, "presetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rotate" }),
        __metadata("design:type", String)
    ], CreateJobRequestBodyOutput.prototype, "rotate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentDuration" }),
        __metadata("design:type", String)
    ], CreateJobRequestBodyOutput.prototype, "segmentDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThumbnailEncryption" }),
        __metadata("design:type", shared.Encryption)
    ], CreateJobRequestBodyOutput.prototype, "thumbnailEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThumbnailPattern" }),
        __metadata("design:type", String)
    ], CreateJobRequestBodyOutput.prototype, "thumbnailPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Watermarks", elemType: shared.JobWatermark }),
        __metadata("design:type", Array)
    ], CreateJobRequestBodyOutput.prototype, "watermarks", void 0);
    return CreateJobRequestBodyOutput;
}(SpeakeasyBase));
export { CreateJobRequestBodyOutput };
var CreateJobRequestBody = /** @class */ (function (_super) {
    __extends(CreateJobRequestBody, _super);
    function CreateJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Input" }),
        __metadata("design:type", CreateJobRequestBodyInput)
    ], CreateJobRequestBody.prototype, "input", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Inputs", elemType: shared.JobInput }),
        __metadata("design:type", Array)
    ], CreateJobRequestBody.prototype, "inputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Output" }),
        __metadata("design:type", CreateJobRequestBodyOutput)
    ], CreateJobRequestBody.prototype, "output", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputKeyPrefix" }),
        __metadata("design:type", String)
    ], CreateJobRequestBody.prototype, "outputKeyPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Outputs", elemType: shared.CreateJobOutput }),
        __metadata("design:type", Array)
    ], CreateJobRequestBody.prototype, "outputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PipelineId" }),
        __metadata("design:type", String)
    ], CreateJobRequestBody.prototype, "pipelineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Playlists", elemType: shared.CreateJobPlaylist }),
        __metadata("design:type", Array)
    ], CreateJobRequestBody.prototype, "playlists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserMetadata" }),
        __metadata("design:type", Map)
    ], CreateJobRequestBody.prototype, "userMetadata", void 0);
    return CreateJobRequestBody;
}(SpeakeasyBase));
export { CreateJobRequestBody };
var CreateJobRequest = /** @class */ (function (_super) {
    __extends(CreateJobRequest, _super);
    function CreateJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateJobHeaders)
    ], CreateJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateJobRequestBody)
    ], CreateJobRequest.prototype, "request", void 0);
    return CreateJobRequest;
}(SpeakeasyBase));
export { CreateJobRequest };
var CreateJobResponse = /** @class */ (function (_super) {
    __extends(CreateJobResponse, _super);
    function CreateJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateJobResponse)
    ], CreateJobResponse.prototype, "createJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobResponse.prototype, "incompatibleVersionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobResponse.prototype, "validationException", void 0);
    return CreateJobResponse;
}(SpeakeasyBase));
export { CreateJobResponse };
