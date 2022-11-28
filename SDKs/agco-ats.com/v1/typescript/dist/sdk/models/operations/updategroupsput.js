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
var UpdateGroupsPutPathParams = /** @class */ (function (_super) {
    __extends(UpdateGroupsPutPathParams, _super);
    function UpdateGroupsPutPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" }),
        __metadata("design:type", String)
    ], UpdateGroupsPutPathParams.prototype, "id", void 0);
    return UpdateGroupsPutPathParams;
}(SpeakeasyBase));
export { UpdateGroupsPutPathParams };
var UpdateGroupsPutRequests = /** @class */ (function (_super) {
    __extends(UpdateGroupsPutRequests, _super);
    function UpdateGroupsPutRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], UpdateGroupsPutRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], UpdateGroupsPutRequests.prototype, "textXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateSystemModelsUpdateGroup)
    ], UpdateGroupsPutRequests.prototype, "updateSystemModelsUpdateGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.UpdateSystemModelsUpdateGroup)
    ], UpdateGroupsPutRequests.prototype, "updateSystemModelsUpdateGroup1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdateSystemModelsUpdateGroup)
    ], UpdateGroupsPutRequests.prototype, "updateSystemModelsUpdateGroup2", void 0);
    return UpdateGroupsPutRequests;
}(SpeakeasyBase));
export { UpdateGroupsPutRequests };
var UpdateGroupsPutRequest = /** @class */ (function (_super) {
    __extends(UpdateGroupsPutRequest, _super);
    function UpdateGroupsPutRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupsPutPathParams)
    ], UpdateGroupsPutRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupsPutRequests)
    ], UpdateGroupsPutRequest.prototype, "request", void 0);
    return UpdateGroupsPutRequest;
}(SpeakeasyBase));
export { UpdateGroupsPutRequest };
var UpdateGroupsPutResponse = /** @class */ (function (_super) {
    __extends(UpdateGroupsPutResponse, _super);
    function UpdateGroupsPutResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateGroupsPutResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGroupsPutResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGroupsPutResponse.prototype, "statusCode", void 0);
    return UpdateGroupsPutResponse;
}(SpeakeasyBase));
export { UpdateGroupsPutResponse };
