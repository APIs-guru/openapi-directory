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
var CreateThingTypePathParams = /** @class */ (function (_super) {
    __extends(CreateThingTypePathParams, _super);
    function CreateThingTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingTypeName" }),
        __metadata("design:type", String)
    ], CreateThingTypePathParams.prototype, "thingTypeName", void 0);
    return CreateThingTypePathParams;
}(SpeakeasyBase));
export { CreateThingTypePathParams };
var CreateThingTypeHeaders = /** @class */ (function (_super) {
    __extends(CreateThingTypeHeaders, _super);
    function CreateThingTypeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateThingTypeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateThingTypeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateThingTypeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateThingTypeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateThingTypeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateThingTypeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateThingTypeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateThingTypeHeaders;
}(SpeakeasyBase));
export { CreateThingTypeHeaders };
// CreateThingTypeRequestBodyThingTypeProperties
/**
 * The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
**/
var CreateThingTypeRequestBodyThingTypeProperties = /** @class */ (function (_super) {
    __extends(CreateThingTypeRequestBodyThingTypeProperties, _super);
    function CreateThingTypeRequestBodyThingTypeProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchableAttributes" }),
        __metadata("design:type", Array)
    ], CreateThingTypeRequestBodyThingTypeProperties.prototype, "searchableAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingTypeDescription" }),
        __metadata("design:type", String)
    ], CreateThingTypeRequestBodyThingTypeProperties.prototype, "thingTypeDescription", void 0);
    return CreateThingTypeRequestBodyThingTypeProperties;
}(SpeakeasyBase));
export { CreateThingTypeRequestBodyThingTypeProperties };
var CreateThingTypeRequestBody = /** @class */ (function (_super) {
    __extends(CreateThingTypeRequestBody, _super);
    function CreateThingTypeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateThingTypeRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingTypeProperties" }),
        __metadata("design:type", CreateThingTypeRequestBodyThingTypeProperties)
    ], CreateThingTypeRequestBody.prototype, "thingTypeProperties", void 0);
    return CreateThingTypeRequestBody;
}(SpeakeasyBase));
export { CreateThingTypeRequestBody };
var CreateThingTypeRequest = /** @class */ (function (_super) {
    __extends(CreateThingTypeRequest, _super);
    function CreateThingTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateThingTypePathParams)
    ], CreateThingTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateThingTypeHeaders)
    ], CreateThingTypeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateThingTypeRequestBody)
    ], CreateThingTypeRequest.prototype, "request", void 0);
    return CreateThingTypeRequest;
}(SpeakeasyBase));
export { CreateThingTypeRequest };
var CreateThingTypeResponse = /** @class */ (function (_super) {
    __extends(CreateThingTypeResponse, _super);
    function CreateThingTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateThingTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateThingTypeResponse)
    ], CreateThingTypeResponse.prototype, "createThingTypeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateThingTypeResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateThingTypeResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateThingTypeResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateThingTypeResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateThingTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateThingTypeResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateThingTypeResponse.prototype, "unauthorizedException", void 0);
    return CreateThingTypeResponse;
}(SpeakeasyBase));
export { CreateThingTypeResponse };
