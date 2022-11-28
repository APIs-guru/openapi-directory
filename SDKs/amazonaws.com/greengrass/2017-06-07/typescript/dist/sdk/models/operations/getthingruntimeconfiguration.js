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
var GetThingRuntimeConfigurationPathParams = /** @class */ (function (_super) {
    __extends(GetThingRuntimeConfigurationPathParams, _super);
    function GetThingRuntimeConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ThingName" }),
        __metadata("design:type", String)
    ], GetThingRuntimeConfigurationPathParams.prototype, "thingName", void 0);
    return GetThingRuntimeConfigurationPathParams;
}(SpeakeasyBase));
export { GetThingRuntimeConfigurationPathParams };
var GetThingRuntimeConfigurationHeaders = /** @class */ (function (_super) {
    __extends(GetThingRuntimeConfigurationHeaders, _super);
    function GetThingRuntimeConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetThingRuntimeConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetThingRuntimeConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetThingRuntimeConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetThingRuntimeConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetThingRuntimeConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetThingRuntimeConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetThingRuntimeConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetThingRuntimeConfigurationHeaders;
}(SpeakeasyBase));
export { GetThingRuntimeConfigurationHeaders };
var GetThingRuntimeConfigurationRequest = /** @class */ (function (_super) {
    __extends(GetThingRuntimeConfigurationRequest, _super);
    function GetThingRuntimeConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetThingRuntimeConfigurationPathParams)
    ], GetThingRuntimeConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetThingRuntimeConfigurationHeaders)
    ], GetThingRuntimeConfigurationRequest.prototype, "headers", void 0);
    return GetThingRuntimeConfigurationRequest;
}(SpeakeasyBase));
export { GetThingRuntimeConfigurationRequest };
var GetThingRuntimeConfigurationResponse = /** @class */ (function (_super) {
    __extends(GetThingRuntimeConfigurationResponse, _super);
    function GetThingRuntimeConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetThingRuntimeConfigurationResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetThingRuntimeConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetThingRuntimeConfigurationResponse)
    ], GetThingRuntimeConfigurationResponse.prototype, "getThingRuntimeConfigurationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetThingRuntimeConfigurationResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetThingRuntimeConfigurationResponse.prototype, "statusCode", void 0);
    return GetThingRuntimeConfigurationResponse;
}(SpeakeasyBase));
export { GetThingRuntimeConfigurationResponse };
