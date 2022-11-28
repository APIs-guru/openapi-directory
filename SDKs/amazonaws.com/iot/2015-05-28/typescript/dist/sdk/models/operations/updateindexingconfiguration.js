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
var UpdateIndexingConfigurationHeaders = /** @class */ (function (_super) {
    __extends(UpdateIndexingConfigurationHeaders, _super);
    function UpdateIndexingConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateIndexingConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateIndexingConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateIndexingConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateIndexingConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateIndexingConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateIndexingConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateIndexingConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateIndexingConfigurationHeaders;
}(SpeakeasyBase));
export { UpdateIndexingConfigurationHeaders };
// UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration
/**
 * Thing group indexing configuration.
**/
var UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration = /** @class */ (function (_super) {
    __extends(UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration, _super);
    function UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields", elemType: shared.Field }),
        __metadata("design:type", Array)
    ], UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedFields", elemType: shared.Field }),
        __metadata("design:type", Array)
    ], UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration.prototype, "managedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupIndexingMode" }),
        __metadata("design:type", String)
    ], UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration.prototype, "thingGroupIndexingMode", void 0);
    return UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration;
}(SpeakeasyBase));
export { UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration };
// UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration
/**
 * The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
**/
var UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration = /** @class */ (function (_super) {
    __extends(UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration, _super);
    function UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields", elemType: shared.Field }),
        __metadata("design:type", Array)
    ], UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedFields", elemType: shared.Field }),
        __metadata("design:type", Array)
    ], UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration.prototype, "managedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingConnectivityIndexingMode" }),
        __metadata("design:type", String)
    ], UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration.prototype, "thingConnectivityIndexingMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingIndexingMode" }),
        __metadata("design:type", String)
    ], UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration.prototype, "thingIndexingMode", void 0);
    return UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration;
}(SpeakeasyBase));
export { UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration };
var UpdateIndexingConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateIndexingConfigurationRequestBody, _super);
    function UpdateIndexingConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingGroupIndexingConfiguration" }),
        __metadata("design:type", UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration)
    ], UpdateIndexingConfigurationRequestBody.prototype, "thingGroupIndexingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingIndexingConfiguration" }),
        __metadata("design:type", UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration)
    ], UpdateIndexingConfigurationRequestBody.prototype, "thingIndexingConfiguration", void 0);
    return UpdateIndexingConfigurationRequestBody;
}(SpeakeasyBase));
export { UpdateIndexingConfigurationRequestBody };
var UpdateIndexingConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateIndexingConfigurationRequest, _super);
    function UpdateIndexingConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateIndexingConfigurationHeaders)
    ], UpdateIndexingConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateIndexingConfigurationRequestBody)
    ], UpdateIndexingConfigurationRequest.prototype, "request", void 0);
    return UpdateIndexingConfigurationRequest;
}(SpeakeasyBase));
export { UpdateIndexingConfigurationRequest };
var UpdateIndexingConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateIndexingConfigurationResponse, _super);
    function UpdateIndexingConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateIndexingConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIndexingConfigurationResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIndexingConfigurationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIndexingConfigurationResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateIndexingConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIndexingConfigurationResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIndexingConfigurationResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateIndexingConfigurationResponse.prototype, "updateIndexingConfigurationResponse", void 0);
    return UpdateIndexingConfigurationResponse;
}(SpeakeasyBase));
export { UpdateIndexingConfigurationResponse };
