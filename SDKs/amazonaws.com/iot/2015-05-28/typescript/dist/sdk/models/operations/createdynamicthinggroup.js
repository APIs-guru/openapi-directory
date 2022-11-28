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
var CreateDynamicThingGroupPathParams = /** @class */ (function (_super) {
    __extends(CreateDynamicThingGroupPathParams, _super);
    function CreateDynamicThingGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingGroupName" }),
        __metadata("design:type", String)
    ], CreateDynamicThingGroupPathParams.prototype, "thingGroupName", void 0);
    return CreateDynamicThingGroupPathParams;
}(SpeakeasyBase));
export { CreateDynamicThingGroupPathParams };
var CreateDynamicThingGroupHeaders = /** @class */ (function (_super) {
    __extends(CreateDynamicThingGroupHeaders, _super);
    function CreateDynamicThingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDynamicThingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDynamicThingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDynamicThingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDynamicThingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDynamicThingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDynamicThingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDynamicThingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDynamicThingGroupHeaders;
}(SpeakeasyBase));
export { CreateDynamicThingGroupHeaders };
// CreateDynamicThingGroupRequestBodyThingGroupProperties
/**
 * Thing group properties.
**/
var CreateDynamicThingGroupRequestBodyThingGroupProperties = /** @class */ (function (_super) {
    __extends(CreateDynamicThingGroupRequestBodyThingGroupProperties, _super);
    function CreateDynamicThingGroupRequestBodyThingGroupProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributePayload" }),
        __metadata("design:type", shared.AttributePayload)
    ], CreateDynamicThingGroupRequestBodyThingGroupProperties.prototype, "attributePayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupDescription" }),
        __metadata("design:type", String)
    ], CreateDynamicThingGroupRequestBodyThingGroupProperties.prototype, "thingGroupDescription", void 0);
    return CreateDynamicThingGroupRequestBodyThingGroupProperties;
}(SpeakeasyBase));
export { CreateDynamicThingGroupRequestBodyThingGroupProperties };
var CreateDynamicThingGroupRequestBody = /** @class */ (function (_super) {
    __extends(CreateDynamicThingGroupRequestBody, _super);
    function CreateDynamicThingGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexName" }),
        __metadata("design:type", String)
    ], CreateDynamicThingGroupRequestBody.prototype, "indexName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryString" }),
        __metadata("design:type", String)
    ], CreateDynamicThingGroupRequestBody.prototype, "queryString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryVersion" }),
        __metadata("design:type", String)
    ], CreateDynamicThingGroupRequestBody.prototype, "queryVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateDynamicThingGroupRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupProperties" }),
        __metadata("design:type", CreateDynamicThingGroupRequestBodyThingGroupProperties)
    ], CreateDynamicThingGroupRequestBody.prototype, "thingGroupProperties", void 0);
    return CreateDynamicThingGroupRequestBody;
}(SpeakeasyBase));
export { CreateDynamicThingGroupRequestBody };
var CreateDynamicThingGroupRequest = /** @class */ (function (_super) {
    __extends(CreateDynamicThingGroupRequest, _super);
    function CreateDynamicThingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDynamicThingGroupPathParams)
    ], CreateDynamicThingGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDynamicThingGroupHeaders)
    ], CreateDynamicThingGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDynamicThingGroupRequestBody)
    ], CreateDynamicThingGroupRequest.prototype, "request", void 0);
    return CreateDynamicThingGroupRequest;
}(SpeakeasyBase));
export { CreateDynamicThingGroupRequest };
var CreateDynamicThingGroupResponse = /** @class */ (function (_super) {
    __extends(CreateDynamicThingGroupResponse, _super);
    function CreateDynamicThingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDynamicThingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateDynamicThingGroupResponse)
    ], CreateDynamicThingGroupResponse.prototype, "createDynamicThingGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDynamicThingGroupResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDynamicThingGroupResponse.prototype, "invalidQueryException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDynamicThingGroupResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDynamicThingGroupResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDynamicThingGroupResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDynamicThingGroupResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDynamicThingGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDynamicThingGroupResponse.prototype, "throttlingException", void 0);
    return CreateDynamicThingGroupResponse;
}(SpeakeasyBase));
export { CreateDynamicThingGroupResponse };
