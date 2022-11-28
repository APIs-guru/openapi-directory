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
var UpdateThingGroupsForThingHeaders = /** @class */ (function (_super) {
    __extends(UpdateThingGroupsForThingHeaders, _super);
    function UpdateThingGroupsForThingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateThingGroupsForThingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateThingGroupsForThingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateThingGroupsForThingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateThingGroupsForThingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateThingGroupsForThingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateThingGroupsForThingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateThingGroupsForThingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateThingGroupsForThingHeaders;
}(SpeakeasyBase));
export { UpdateThingGroupsForThingHeaders };
var UpdateThingGroupsForThingRequestBody = /** @class */ (function (_super) {
    __extends(UpdateThingGroupsForThingRequestBody, _super);
    function UpdateThingGroupsForThingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrideDynamicGroups" }),
        __metadata("design:type", Boolean)
    ], UpdateThingGroupsForThingRequestBody.prototype, "overrideDynamicGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupsToAdd" }),
        __metadata("design:type", Array)
    ], UpdateThingGroupsForThingRequestBody.prototype, "thingGroupsToAdd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupsToRemove" }),
        __metadata("design:type", Array)
    ], UpdateThingGroupsForThingRequestBody.prototype, "thingGroupsToRemove", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingName" }),
        __metadata("design:type", String)
    ], UpdateThingGroupsForThingRequestBody.prototype, "thingName", void 0);
    return UpdateThingGroupsForThingRequestBody;
}(SpeakeasyBase));
export { UpdateThingGroupsForThingRequestBody };
var UpdateThingGroupsForThingRequest = /** @class */ (function (_super) {
    __extends(UpdateThingGroupsForThingRequest, _super);
    function UpdateThingGroupsForThingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateThingGroupsForThingHeaders)
    ], UpdateThingGroupsForThingRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateThingGroupsForThingRequestBody)
    ], UpdateThingGroupsForThingRequest.prototype, "request", void 0);
    return UpdateThingGroupsForThingRequest;
}(SpeakeasyBase));
export { UpdateThingGroupsForThingRequest };
var UpdateThingGroupsForThingResponse = /** @class */ (function (_super) {
    __extends(UpdateThingGroupsForThingResponse, _super);
    function UpdateThingGroupsForThingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateThingGroupsForThingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingGroupsForThingResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingGroupsForThingResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingGroupsForThingResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateThingGroupsForThingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingGroupsForThingResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateThingGroupsForThingResponse.prototype, "updateThingGroupsForThingResponse", void 0);
    return UpdateThingGroupsForThingResponse;
}(SpeakeasyBase));
export { UpdateThingGroupsForThingResponse };
