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
var ListDeviceDefinitionVersionsPathParams = /** @class */ (function (_super) {
    __extends(ListDeviceDefinitionVersionsPathParams, _super);
    function ListDeviceDefinitionVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DeviceDefinitionId" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionVersionsPathParams.prototype, "deviceDefinitionId", void 0);
    return ListDeviceDefinitionVersionsPathParams;
}(SpeakeasyBase));
export { ListDeviceDefinitionVersionsPathParams };
var ListDeviceDefinitionVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListDeviceDefinitionVersionsQueryParams, _super);
    function ListDeviceDefinitionVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionVersionsQueryParams.prototype, "nextToken", void 0);
    return ListDeviceDefinitionVersionsQueryParams;
}(SpeakeasyBase));
export { ListDeviceDefinitionVersionsQueryParams };
var ListDeviceDefinitionVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListDeviceDefinitionVersionsHeaders, _super);
    function ListDeviceDefinitionVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListDeviceDefinitionVersionsHeaders;
}(SpeakeasyBase));
export { ListDeviceDefinitionVersionsHeaders };
var ListDeviceDefinitionVersionsRequest = /** @class */ (function (_super) {
    __extends(ListDeviceDefinitionVersionsRequest, _super);
    function ListDeviceDefinitionVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeviceDefinitionVersionsPathParams)
    ], ListDeviceDefinitionVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeviceDefinitionVersionsQueryParams)
    ], ListDeviceDefinitionVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeviceDefinitionVersionsHeaders)
    ], ListDeviceDefinitionVersionsRequest.prototype, "headers", void 0);
    return ListDeviceDefinitionVersionsRequest;
}(SpeakeasyBase));
export { ListDeviceDefinitionVersionsRequest };
var ListDeviceDefinitionVersionsResponse = /** @class */ (function (_super) {
    __extends(ListDeviceDefinitionVersionsResponse, _super);
    function ListDeviceDefinitionVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDeviceDefinitionVersionsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDeviceDefinitionVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDeviceDefinitionVersionsResponse)
    ], ListDeviceDefinitionVersionsResponse.prototype, "listDeviceDefinitionVersionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDeviceDefinitionVersionsResponse.prototype, "statusCode", void 0);
    return ListDeviceDefinitionVersionsResponse;
}(SpeakeasyBase));
export { ListDeviceDefinitionVersionsResponse };
