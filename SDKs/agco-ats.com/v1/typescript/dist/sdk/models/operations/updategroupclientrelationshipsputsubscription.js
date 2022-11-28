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
var UpdateGroupClientRelationshipsPutSubscriptionPathParams = /** @class */ (function (_super) {
    __extends(UpdateGroupClientRelationshipsPutSubscriptionPathParams, _super);
    function UpdateGroupClientRelationshipsPutSubscriptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RelationshipID" }),
        __metadata("design:type", String)
    ], UpdateGroupClientRelationshipsPutSubscriptionPathParams.prototype, "relationshipId", void 0);
    return UpdateGroupClientRelationshipsPutSubscriptionPathParams;
}(SpeakeasyBase));
export { UpdateGroupClientRelationshipsPutSubscriptionPathParams };
var UpdateGroupClientRelationshipsPutSubscriptionRequests = /** @class */ (function (_super) {
    __extends(UpdateGroupClientRelationshipsPutSubscriptionRequests, _super);
    function UpdateGroupClientRelationshipsPutSubscriptionRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], UpdateGroupClientRelationshipsPutSubscriptionRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], UpdateGroupClientRelationshipsPutSubscriptionRequests.prototype, "textXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateSystemModelsUpdateGroupClientRelationship)
    ], UpdateGroupClientRelationshipsPutSubscriptionRequests.prototype, "updateSystemModelsUpdateGroupClientRelationship", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.UpdateSystemModelsUpdateGroupClientRelationship)
    ], UpdateGroupClientRelationshipsPutSubscriptionRequests.prototype, "updateSystemModelsUpdateGroupClientRelationship1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdateSystemModelsUpdateGroupClientRelationship)
    ], UpdateGroupClientRelationshipsPutSubscriptionRequests.prototype, "updateSystemModelsUpdateGroupClientRelationship2", void 0);
    return UpdateGroupClientRelationshipsPutSubscriptionRequests;
}(SpeakeasyBase));
export { UpdateGroupClientRelationshipsPutSubscriptionRequests };
var UpdateGroupClientRelationshipsPutSubscriptionRequest = /** @class */ (function (_super) {
    __extends(UpdateGroupClientRelationshipsPutSubscriptionRequest, _super);
    function UpdateGroupClientRelationshipsPutSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupClientRelationshipsPutSubscriptionPathParams)
    ], UpdateGroupClientRelationshipsPutSubscriptionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupClientRelationshipsPutSubscriptionRequests)
    ], UpdateGroupClientRelationshipsPutSubscriptionRequest.prototype, "request", void 0);
    return UpdateGroupClientRelationshipsPutSubscriptionRequest;
}(SpeakeasyBase));
export { UpdateGroupClientRelationshipsPutSubscriptionRequest };
var UpdateGroupClientRelationshipsPutSubscriptionResponse = /** @class */ (function (_super) {
    __extends(UpdateGroupClientRelationshipsPutSubscriptionResponse, _super);
    function UpdateGroupClientRelationshipsPutSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateGroupClientRelationshipsPutSubscriptionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGroupClientRelationshipsPutSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGroupClientRelationshipsPutSubscriptionResponse.prototype, "statusCode", void 0);
    return UpdateGroupClientRelationshipsPutSubscriptionResponse;
}(SpeakeasyBase));
export { UpdateGroupClientRelationshipsPutSubscriptionResponse };
