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
var UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams = /** @class */ (function (_super) {
    __extends(UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams, _super);
    function UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UpdateGroupSubscriptionID" }),
        __metadata("design:type", Number)
    ], UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams.prototype, "updateGroupSubscriptionId", void 0);
    return UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams;
}(SpeakeasyBase));
export { UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams };
var UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests = /** @class */ (function (_super) {
    __extends(UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests, _super);
    function UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests.prototype, "textXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateSystemModelsUpdateGroupSubscription)
    ], UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests.prototype, "updateSystemModelsUpdateGroupSubscription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.UpdateSystemModelsUpdateGroupSubscription)
    ], UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests.prototype, "updateSystemModelsUpdateGroupSubscription1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdateSystemModelsUpdateGroupSubscription)
    ], UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests.prototype, "updateSystemModelsUpdateGroupSubscription2", void 0);
    return UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests;
}(SpeakeasyBase));
export { UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests };
var UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest = /** @class */ (function (_super) {
    __extends(UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest, _super);
    function UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams)
    ], UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests)
    ], UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest.prototype, "request", void 0);
    return UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest;
}(SpeakeasyBase));
export { UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest };
var UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse = /** @class */ (function (_super) {
    __extends(UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse, _super);
    function UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse.prototype, "statusCode", void 0);
    return UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse;
}(SpeakeasyBase));
export { UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse };
