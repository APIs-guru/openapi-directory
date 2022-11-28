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
var AddThingToThingGroupHeaders = /** @class */ (function (_super) {
    __extends(AddThingToThingGroupHeaders, _super);
    function AddThingToThingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AddThingToThingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AddThingToThingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AddThingToThingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AddThingToThingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AddThingToThingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AddThingToThingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AddThingToThingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AddThingToThingGroupHeaders;
}(SpeakeasyBase));
export { AddThingToThingGroupHeaders };
var AddThingToThingGroupRequestBody = /** @class */ (function (_super) {
    __extends(AddThingToThingGroupRequestBody, _super);
    function AddThingToThingGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrideDynamicGroups" }),
        __metadata("design:type", Boolean)
    ], AddThingToThingGroupRequestBody.prototype, "overrideDynamicGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingArn" }),
        __metadata("design:type", String)
    ], AddThingToThingGroupRequestBody.prototype, "thingArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupArn" }),
        __metadata("design:type", String)
    ], AddThingToThingGroupRequestBody.prototype, "thingGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupName" }),
        __metadata("design:type", String)
    ], AddThingToThingGroupRequestBody.prototype, "thingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingName" }),
        __metadata("design:type", String)
    ], AddThingToThingGroupRequestBody.prototype, "thingName", void 0);
    return AddThingToThingGroupRequestBody;
}(SpeakeasyBase));
export { AddThingToThingGroupRequestBody };
var AddThingToThingGroupRequest = /** @class */ (function (_super) {
    __extends(AddThingToThingGroupRequest, _super);
    function AddThingToThingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddThingToThingGroupHeaders)
    ], AddThingToThingGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddThingToThingGroupRequestBody)
    ], AddThingToThingGroupRequest.prototype, "request", void 0);
    return AddThingToThingGroupRequest;
}(SpeakeasyBase));
export { AddThingToThingGroupRequest };
var AddThingToThingGroupResponse = /** @class */ (function (_super) {
    __extends(AddThingToThingGroupResponse, _super);
    function AddThingToThingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AddThingToThingGroupResponse.prototype, "addThingToThingGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddThingToThingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddThingToThingGroupResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddThingToThingGroupResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddThingToThingGroupResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddThingToThingGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddThingToThingGroupResponse.prototype, "throttlingException", void 0);
    return AddThingToThingGroupResponse;
}(SpeakeasyBase));
export { AddThingToThingGroupResponse };
