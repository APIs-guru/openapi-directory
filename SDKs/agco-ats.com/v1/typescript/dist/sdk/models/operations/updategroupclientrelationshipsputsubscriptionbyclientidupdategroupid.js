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
var UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams = /** @class */ (function (_super) {
    __extends(UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams, _super);
    function UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Active" }),
        __metadata("design:type", Boolean)
    ], UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientID" }),
        __metadata("design:type", String)
    ], UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" }),
        __metadata("design:type", String)
    ], UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams.prototype, "updateGroupId", void 0);
    return UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams;
}(SpeakeasyBase));
export { UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams };
var UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdRequest = /** @class */ (function (_super) {
    __extends(UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdRequest, _super);
    function UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams)
    ], UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdRequest.prototype, "queryParams", void 0);
    return UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdRequest;
}(SpeakeasyBase));
export { UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdRequest };
var UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse = /** @class */ (function (_super) {
    __extends(UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse, _super);
    function UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse.prototype, "statusCode", void 0);
    return UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse;
}(SpeakeasyBase));
export { UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse };
