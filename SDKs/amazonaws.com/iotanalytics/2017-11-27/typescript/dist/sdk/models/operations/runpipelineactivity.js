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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var RunPipelineActivityHeaders = /** @class */ (function (_super) {
    __extends(RunPipelineActivityHeaders, _super);
    function RunPipelineActivityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RunPipelineActivityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RunPipelineActivityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RunPipelineActivityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RunPipelineActivityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RunPipelineActivityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RunPipelineActivityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RunPipelineActivityHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RunPipelineActivityHeaders;
}(SpeakeasyBase));
export { RunPipelineActivityHeaders };
// RunPipelineActivityRequestBodyPipelineActivity
/**
 * An activity that performs a transformation on a message.
**/
var RunPipelineActivityRequestBodyPipelineActivity = /** @class */ (function (_super) {
    __extends(RunPipelineActivityRequestBodyPipelineActivity, _super);
    function RunPipelineActivityRequestBodyPipelineActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=addAttributes" }),
        __metadata("design:type", shared.AddAttributesActivity)
    ], RunPipelineActivityRequestBodyPipelineActivity.prototype, "addAttributes", void 0);
    __decorate([
        Metadata({ data: "json, name=channel" }),
        __metadata("design:type", shared.ChannelActivity)
    ], RunPipelineActivityRequestBodyPipelineActivity.prototype, "channel", void 0);
    __decorate([
        Metadata({ data: "json, name=datastore" }),
        __metadata("design:type", shared.DatastoreActivity)
    ], RunPipelineActivityRequestBodyPipelineActivity.prototype, "datastore", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceRegistryEnrich" }),
        __metadata("design:type", shared.DeviceRegistryEnrichActivity)
    ], RunPipelineActivityRequestBodyPipelineActivity.prototype, "deviceRegistryEnrich", void 0);
    __decorate([
        Metadata({ data: "json, name=deviceShadowEnrich" }),
        __metadata("design:type", shared.DeviceShadowEnrichActivity)
    ], RunPipelineActivityRequestBodyPipelineActivity.prototype, "deviceShadowEnrich", void 0);
    __decorate([
        Metadata({ data: "json, name=filter" }),
        __metadata("design:type", shared.FilterActivity)
    ], RunPipelineActivityRequestBodyPipelineActivity.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "json, name=lambda" }),
        __metadata("design:type", shared.LambdaActivity)
    ], RunPipelineActivityRequestBodyPipelineActivity.prototype, "lambda", void 0);
    __decorate([
        Metadata({ data: "json, name=math" }),
        __metadata("design:type", shared.MathActivity)
    ], RunPipelineActivityRequestBodyPipelineActivity.prototype, "math", void 0);
    __decorate([
        Metadata({ data: "json, name=removeAttributes" }),
        __metadata("design:type", shared.RemoveAttributesActivity)
    ], RunPipelineActivityRequestBodyPipelineActivity.prototype, "removeAttributes", void 0);
    __decorate([
        Metadata({ data: "json, name=selectAttributes" }),
        __metadata("design:type", shared.SelectAttributesActivity)
    ], RunPipelineActivityRequestBodyPipelineActivity.prototype, "selectAttributes", void 0);
    return RunPipelineActivityRequestBodyPipelineActivity;
}(SpeakeasyBase));
export { RunPipelineActivityRequestBodyPipelineActivity };
var RunPipelineActivityRequestBody = /** @class */ (function (_super) {
    __extends(RunPipelineActivityRequestBody, _super);
    function RunPipelineActivityRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=payloads" }),
        __metadata("design:type", Array)
    ], RunPipelineActivityRequestBody.prototype, "payloads", void 0);
    __decorate([
        Metadata({ data: "json, name=pipelineActivity" }),
        __metadata("design:type", RunPipelineActivityRequestBodyPipelineActivity)
    ], RunPipelineActivityRequestBody.prototype, "pipelineActivity", void 0);
    return RunPipelineActivityRequestBody;
}(SpeakeasyBase));
export { RunPipelineActivityRequestBody };
var RunPipelineActivityRequest = /** @class */ (function (_super) {
    __extends(RunPipelineActivityRequest, _super);
    function RunPipelineActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RunPipelineActivityHeaders)
    ], RunPipelineActivityRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RunPipelineActivityRequestBody)
    ], RunPipelineActivityRequest.prototype, "request", void 0);
    return RunPipelineActivityRequest;
}(SpeakeasyBase));
export { RunPipelineActivityRequest };
var RunPipelineActivityResponse = /** @class */ (function (_super) {
    __extends(RunPipelineActivityResponse, _super);
    function RunPipelineActivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RunPipelineActivityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RunPipelineActivityResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RunPipelineActivityResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RunPipelineActivityResponse)
    ], RunPipelineActivityResponse.prototype, "runPipelineActivityResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RunPipelineActivityResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RunPipelineActivityResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RunPipelineActivityResponse.prototype, "throttlingException", void 0);
    return RunPipelineActivityResponse;
}(SpeakeasyBase));
export { RunPipelineActivityResponse };
