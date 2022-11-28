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
var ReleasePutContentDefinitionPathParams = /** @class */ (function (_super) {
    __extends(ReleasePutContentDefinitionPathParams, _super);
    function ReleasePutContentDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=releaseId" }),
        __metadata("design:type", Number)
    ], ReleasePutContentDefinitionPathParams.prototype, "releaseId", void 0);
    return ReleasePutContentDefinitionPathParams;
}(SpeakeasyBase));
export { ReleasePutContentDefinitionPathParams };
var ReleasePutContentDefinitionRequests = /** @class */ (function (_super) {
    __extends(ReleasePutContentDefinitionRequests, _super);
    function ReleasePutContentDefinitionRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], ReleasePutContentDefinitionRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ContentSubmissionSharedBusinessEntitiesRelease)
    ], ReleasePutContentDefinitionRequests.prototype, "contentSubmissionSharedBusinessEntitiesRelease", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ContentSubmissionSharedBusinessEntitiesRelease)
    ], ReleasePutContentDefinitionRequests.prototype, "contentSubmissionSharedBusinessEntitiesRelease1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ContentSubmissionSharedBusinessEntitiesRelease)
    ], ReleasePutContentDefinitionRequests.prototype, "contentSubmissionSharedBusinessEntitiesRelease2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], ReleasePutContentDefinitionRequests.prototype, "textXml", void 0);
    return ReleasePutContentDefinitionRequests;
}(SpeakeasyBase));
export { ReleasePutContentDefinitionRequests };
var ReleasePutContentDefinitionRequest = /** @class */ (function (_super) {
    __extends(ReleasePutContentDefinitionRequest, _super);
    function ReleasePutContentDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReleasePutContentDefinitionPathParams)
    ], ReleasePutContentDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReleasePutContentDefinitionRequests)
    ], ReleasePutContentDefinitionRequest.prototype, "request", void 0);
    return ReleasePutContentDefinitionRequest;
}(SpeakeasyBase));
export { ReleasePutContentDefinitionRequest };
var ReleasePutContentDefinitionResponse = /** @class */ (function (_super) {
    __extends(ReleasePutContentDefinitionResponse, _super);
    function ReleasePutContentDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReleasePutContentDefinitionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReleasePutContentDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReleasePutContentDefinitionResponse.prototype, "statusCode", void 0);
    return ReleasePutContentDefinitionResponse;
}(SpeakeasyBase));
export { ReleasePutContentDefinitionResponse };
