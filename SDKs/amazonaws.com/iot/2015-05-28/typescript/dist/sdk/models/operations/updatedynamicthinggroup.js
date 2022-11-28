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
var UpdateDynamicThingGroupPathParams = /** @class */ (function (_super) {
    __extends(UpdateDynamicThingGroupPathParams, _super);
    function UpdateDynamicThingGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingGroupName" }),
        __metadata("design:type", String)
    ], UpdateDynamicThingGroupPathParams.prototype, "thingGroupName", void 0);
    return UpdateDynamicThingGroupPathParams;
}(SpeakeasyBase));
export { UpdateDynamicThingGroupPathParams };
var UpdateDynamicThingGroupHeaders = /** @class */ (function (_super) {
    __extends(UpdateDynamicThingGroupHeaders, _super);
    function UpdateDynamicThingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDynamicThingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDynamicThingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDynamicThingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDynamicThingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDynamicThingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDynamicThingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDynamicThingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDynamicThingGroupHeaders;
}(SpeakeasyBase));
export { UpdateDynamicThingGroupHeaders };
// UpdateDynamicThingGroupRequestBodyThingGroupProperties
/**
 * Thing group properties.
**/
var UpdateDynamicThingGroupRequestBodyThingGroupProperties = /** @class */ (function (_super) {
    __extends(UpdateDynamicThingGroupRequestBodyThingGroupProperties, _super);
    function UpdateDynamicThingGroupRequestBodyThingGroupProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributePayload" }),
        __metadata("design:type", shared.AttributePayload)
    ], UpdateDynamicThingGroupRequestBodyThingGroupProperties.prototype, "attributePayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupDescription" }),
        __metadata("design:type", String)
    ], UpdateDynamicThingGroupRequestBodyThingGroupProperties.prototype, "thingGroupDescription", void 0);
    return UpdateDynamicThingGroupRequestBodyThingGroupProperties;
}(SpeakeasyBase));
export { UpdateDynamicThingGroupRequestBodyThingGroupProperties };
var UpdateDynamicThingGroupRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDynamicThingGroupRequestBody, _super);
    function UpdateDynamicThingGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedVersion" }),
        __metadata("design:type", Number)
    ], UpdateDynamicThingGroupRequestBody.prototype, "expectedVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexName" }),
        __metadata("design:type", String)
    ], UpdateDynamicThingGroupRequestBody.prototype, "indexName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryString" }),
        __metadata("design:type", String)
    ], UpdateDynamicThingGroupRequestBody.prototype, "queryString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryVersion" }),
        __metadata("design:type", String)
    ], UpdateDynamicThingGroupRequestBody.prototype, "queryVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupProperties" }),
        __metadata("design:type", UpdateDynamicThingGroupRequestBodyThingGroupProperties)
    ], UpdateDynamicThingGroupRequestBody.prototype, "thingGroupProperties", void 0);
    return UpdateDynamicThingGroupRequestBody;
}(SpeakeasyBase));
export { UpdateDynamicThingGroupRequestBody };
var UpdateDynamicThingGroupRequest = /** @class */ (function (_super) {
    __extends(UpdateDynamicThingGroupRequest, _super);
    function UpdateDynamicThingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDynamicThingGroupPathParams)
    ], UpdateDynamicThingGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDynamicThingGroupHeaders)
    ], UpdateDynamicThingGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDynamicThingGroupRequestBody)
    ], UpdateDynamicThingGroupRequest.prototype, "request", void 0);
    return UpdateDynamicThingGroupRequest;
}(SpeakeasyBase));
export { UpdateDynamicThingGroupRequest };
var UpdateDynamicThingGroupResponse = /** @class */ (function (_super) {
    __extends(UpdateDynamicThingGroupResponse, _super);
    function UpdateDynamicThingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDynamicThingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDynamicThingGroupResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDynamicThingGroupResponse.prototype, "invalidQueryException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDynamicThingGroupResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDynamicThingGroupResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDynamicThingGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDynamicThingGroupResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateDynamicThingGroupResponse)
    ], UpdateDynamicThingGroupResponse.prototype, "updateDynamicThingGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDynamicThingGroupResponse.prototype, "versionConflictException", void 0);
    return UpdateDynamicThingGroupResponse;
}(SpeakeasyBase));
export { UpdateDynamicThingGroupResponse };
