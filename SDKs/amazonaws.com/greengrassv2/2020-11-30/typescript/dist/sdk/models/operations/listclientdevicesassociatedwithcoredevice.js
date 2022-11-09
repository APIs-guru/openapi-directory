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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ListClientDevicesAssociatedWithCoreDevicePathParams = /** @class */ (function (_super) {
    __extends(ListClientDevicesAssociatedWithCoreDevicePathParams, _super);
    function ListClientDevicesAssociatedWithCoreDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=coreDeviceThingName" }),
        __metadata("design:type", String)
    ], ListClientDevicesAssociatedWithCoreDevicePathParams.prototype, "coreDeviceThingName", void 0);
    return ListClientDevicesAssociatedWithCoreDevicePathParams;
}(SpeakeasyBase));
export { ListClientDevicesAssociatedWithCoreDevicePathParams };
var ListClientDevicesAssociatedWithCoreDeviceQueryParams = /** @class */ (function (_super) {
    __extends(ListClientDevicesAssociatedWithCoreDeviceQueryParams, _super);
    function ListClientDevicesAssociatedWithCoreDeviceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListClientDevicesAssociatedWithCoreDeviceQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListClientDevicesAssociatedWithCoreDeviceQueryParams.prototype, "nextToken", void 0);
    return ListClientDevicesAssociatedWithCoreDeviceQueryParams;
}(SpeakeasyBase));
export { ListClientDevicesAssociatedWithCoreDeviceQueryParams };
var ListClientDevicesAssociatedWithCoreDeviceHeaders = /** @class */ (function (_super) {
    __extends(ListClientDevicesAssociatedWithCoreDeviceHeaders, _super);
    function ListClientDevicesAssociatedWithCoreDeviceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListClientDevicesAssociatedWithCoreDeviceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListClientDevicesAssociatedWithCoreDeviceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListClientDevicesAssociatedWithCoreDeviceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListClientDevicesAssociatedWithCoreDeviceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListClientDevicesAssociatedWithCoreDeviceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListClientDevicesAssociatedWithCoreDeviceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListClientDevicesAssociatedWithCoreDeviceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListClientDevicesAssociatedWithCoreDeviceHeaders;
}(SpeakeasyBase));
export { ListClientDevicesAssociatedWithCoreDeviceHeaders };
var ListClientDevicesAssociatedWithCoreDeviceRequest = /** @class */ (function (_super) {
    __extends(ListClientDevicesAssociatedWithCoreDeviceRequest, _super);
    function ListClientDevicesAssociatedWithCoreDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListClientDevicesAssociatedWithCoreDevicePathParams)
    ], ListClientDevicesAssociatedWithCoreDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListClientDevicesAssociatedWithCoreDeviceQueryParams)
    ], ListClientDevicesAssociatedWithCoreDeviceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListClientDevicesAssociatedWithCoreDeviceHeaders)
    ], ListClientDevicesAssociatedWithCoreDeviceRequest.prototype, "headers", void 0);
    return ListClientDevicesAssociatedWithCoreDeviceRequest;
}(SpeakeasyBase));
export { ListClientDevicesAssociatedWithCoreDeviceRequest };
var ListClientDevicesAssociatedWithCoreDeviceResponse = /** @class */ (function (_super) {
    __extends(ListClientDevicesAssociatedWithCoreDeviceResponse, _super);
    function ListClientDevicesAssociatedWithCoreDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListClientDevicesAssociatedWithCoreDeviceResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListClientDevicesAssociatedWithCoreDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListClientDevicesAssociatedWithCoreDeviceResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListClientDevicesAssociatedWithCoreDeviceResponse)
    ], ListClientDevicesAssociatedWithCoreDeviceResponse.prototype, "listClientDevicesAssociatedWithCoreDeviceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListClientDevicesAssociatedWithCoreDeviceResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListClientDevicesAssociatedWithCoreDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListClientDevicesAssociatedWithCoreDeviceResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListClientDevicesAssociatedWithCoreDeviceResponse.prototype, "validationException", void 0);
    return ListClientDevicesAssociatedWithCoreDeviceResponse;
}(SpeakeasyBase));
export { ListClientDevicesAssociatedWithCoreDeviceResponse };
