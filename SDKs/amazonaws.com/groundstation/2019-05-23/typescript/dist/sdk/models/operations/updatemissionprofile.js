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
var UpdateMissionProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateMissionProfilePathParams, _super);
    function UpdateMissionProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=missionProfileId" }),
        __metadata("design:type", String)
    ], UpdateMissionProfilePathParams.prototype, "missionProfileId", void 0);
    return UpdateMissionProfilePathParams;
}(SpeakeasyBase));
export { UpdateMissionProfilePathParams };
var UpdateMissionProfileHeaders = /** @class */ (function (_super) {
    __extends(UpdateMissionProfileHeaders, _super);
    function UpdateMissionProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateMissionProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateMissionProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateMissionProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateMissionProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateMissionProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateMissionProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateMissionProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateMissionProfileHeaders;
}(SpeakeasyBase));
export { UpdateMissionProfileHeaders };
var UpdateMissionProfileRequestBody = /** @class */ (function (_super) {
    __extends(UpdateMissionProfileRequestBody, _super);
    function UpdateMissionProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactPostPassDurationSeconds" }),
        __metadata("design:type", Number)
    ], UpdateMissionProfileRequestBody.prototype, "contactPostPassDurationSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactPrePassDurationSeconds" }),
        __metadata("design:type", Number)
    ], UpdateMissionProfileRequestBody.prototype, "contactPrePassDurationSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataflowEdges" }),
        __metadata("design:type", Array)
    ], UpdateMissionProfileRequestBody.prototype, "dataflowEdges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumViableContactDurationSeconds" }),
        __metadata("design:type", Number)
    ], UpdateMissionProfileRequestBody.prototype, "minimumViableContactDurationSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateMissionProfileRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingConfigArn" }),
        __metadata("design:type", String)
    ], UpdateMissionProfileRequestBody.prototype, "trackingConfigArn", void 0);
    return UpdateMissionProfileRequestBody;
}(SpeakeasyBase));
export { UpdateMissionProfileRequestBody };
var UpdateMissionProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateMissionProfileRequest, _super);
    function UpdateMissionProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMissionProfilePathParams)
    ], UpdateMissionProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMissionProfileHeaders)
    ], UpdateMissionProfileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateMissionProfileRequestBody)
    ], UpdateMissionProfileRequest.prototype, "request", void 0);
    return UpdateMissionProfileRequest;
}(SpeakeasyBase));
export { UpdateMissionProfileRequest };
var UpdateMissionProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateMissionProfileResponse, _super);
    function UpdateMissionProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateMissionProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMissionProfileResponse.prototype, "dependencyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMissionProfileResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MissionProfileIdResponse)
    ], UpdateMissionProfileResponse.prototype, "missionProfileIdResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMissionProfileResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateMissionProfileResponse.prototype, "statusCode", void 0);
    return UpdateMissionProfileResponse;
}(SpeakeasyBase));
export { UpdateMissionProfileResponse };
