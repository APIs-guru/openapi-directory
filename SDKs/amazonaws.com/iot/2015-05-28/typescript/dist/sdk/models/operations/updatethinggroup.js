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
var UpdateThingGroupPathParams = /** @class */ (function (_super) {
    __extends(UpdateThingGroupPathParams, _super);
    function UpdateThingGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingGroupName" }),
        __metadata("design:type", String)
    ], UpdateThingGroupPathParams.prototype, "thingGroupName", void 0);
    return UpdateThingGroupPathParams;
}(SpeakeasyBase));
export { UpdateThingGroupPathParams };
var UpdateThingGroupHeaders = /** @class */ (function (_super) {
    __extends(UpdateThingGroupHeaders, _super);
    function UpdateThingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateThingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateThingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateThingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateThingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateThingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateThingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateThingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateThingGroupHeaders;
}(SpeakeasyBase));
export { UpdateThingGroupHeaders };
// UpdateThingGroupRequestBodyThingGroupProperties
/**
 * Thing group properties.
**/
var UpdateThingGroupRequestBodyThingGroupProperties = /** @class */ (function (_super) {
    __extends(UpdateThingGroupRequestBodyThingGroupProperties, _super);
    function UpdateThingGroupRequestBodyThingGroupProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributePayload" }),
        __metadata("design:type", shared.AttributePayload)
    ], UpdateThingGroupRequestBodyThingGroupProperties.prototype, "attributePayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupDescription" }),
        __metadata("design:type", String)
    ], UpdateThingGroupRequestBodyThingGroupProperties.prototype, "thingGroupDescription", void 0);
    return UpdateThingGroupRequestBodyThingGroupProperties;
}(SpeakeasyBase));
export { UpdateThingGroupRequestBodyThingGroupProperties };
var UpdateThingGroupRequestBody = /** @class */ (function (_super) {
    __extends(UpdateThingGroupRequestBody, _super);
    function UpdateThingGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedVersion" }),
        __metadata("design:type", Number)
    ], UpdateThingGroupRequestBody.prototype, "expectedVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupProperties" }),
        __metadata("design:type", UpdateThingGroupRequestBodyThingGroupProperties)
    ], UpdateThingGroupRequestBody.prototype, "thingGroupProperties", void 0);
    return UpdateThingGroupRequestBody;
}(SpeakeasyBase));
export { UpdateThingGroupRequestBody };
var UpdateThingGroupRequest = /** @class */ (function (_super) {
    __extends(UpdateThingGroupRequest, _super);
    function UpdateThingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateThingGroupPathParams)
    ], UpdateThingGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateThingGroupHeaders)
    ], UpdateThingGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateThingGroupRequestBody)
    ], UpdateThingGroupRequest.prototype, "request", void 0);
    return UpdateThingGroupRequest;
}(SpeakeasyBase));
export { UpdateThingGroupRequest };
var UpdateThingGroupResponse = /** @class */ (function (_super) {
    __extends(UpdateThingGroupResponse, _super);
    function UpdateThingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateThingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingGroupResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingGroupResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingGroupResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateThingGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingGroupResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateThingGroupResponse)
    ], UpdateThingGroupResponse.prototype, "updateThingGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateThingGroupResponse.prototype, "versionConflictException", void 0);
    return UpdateThingGroupResponse;
}(SpeakeasyBase));
export { UpdateThingGroupResponse };
