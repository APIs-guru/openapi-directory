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
var ActivitiesPostActivityRequestsInput = /** @class */ (function (_super) {
    __extends(ActivitiesPostActivityRequestsInput, _super);
    function ActivitiesPostActivityRequestsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], ActivitiesPostActivityRequestsInput.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BuildSystemSharedDtoActivityInput)
    ], ActivitiesPostActivityRequestsInput.prototype, "buildSystemSharedDtoActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.BuildSystemSharedDtoActivityInput)
    ], ActivitiesPostActivityRequestsInput.prototype, "buildSystemSharedDtoActivity1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.BuildSystemSharedDtoActivityInput)
    ], ActivitiesPostActivityRequestsInput.prototype, "buildSystemSharedDtoActivity2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], ActivitiesPostActivityRequestsInput.prototype, "textXml", void 0);
    return ActivitiesPostActivityRequestsInput;
}(SpeakeasyBase));
export { ActivitiesPostActivityRequestsInput };
var ActivitiesPostActivityRequest = /** @class */ (function (_super) {
    __extends(ActivitiesPostActivityRequest, _super);
    function ActivitiesPostActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivitiesPostActivityRequestsInput)
    ], ActivitiesPostActivityRequest.prototype, "request", void 0);
    return ActivitiesPostActivityRequest;
}(SpeakeasyBase));
export { ActivitiesPostActivityRequest };
var ActivitiesPostActivityResponse = /** @class */ (function (_super) {
    __extends(ActivitiesPostActivityResponse, _super);
    function ActivitiesPostActivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], ActivitiesPostActivityResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivitiesPostActivityResponse.prototype, "activitiesPostActivity200ApplicationJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivitiesPostActivityResponse.prototype, "activitiesPostActivity200TextJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ActivitiesPostActivityResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivitiesPostActivityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivitiesPostActivityResponse.prototype, "statusCode", void 0);
    return ActivitiesPostActivityResponse;
}(SpeakeasyBase));
export { ActivitiesPostActivityResponse };
