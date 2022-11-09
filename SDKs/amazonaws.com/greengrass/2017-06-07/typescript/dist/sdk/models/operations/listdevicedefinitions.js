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
var ListDeviceDefinitionsQueryParams = /** @class */ (function (_super) {
    __extends(ListDeviceDefinitionsQueryParams, _super);
    function ListDeviceDefinitionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionsQueryParams.prototype, "nextToken", void 0);
    return ListDeviceDefinitionsQueryParams;
}(SpeakeasyBase));
export { ListDeviceDefinitionsQueryParams };
var ListDeviceDefinitionsHeaders = /** @class */ (function (_super) {
    __extends(ListDeviceDefinitionsHeaders, _super);
    function ListDeviceDefinitionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDeviceDefinitionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListDeviceDefinitionsHeaders;
}(SpeakeasyBase));
export { ListDeviceDefinitionsHeaders };
var ListDeviceDefinitionsRequest = /** @class */ (function (_super) {
    __extends(ListDeviceDefinitionsRequest, _super);
    function ListDeviceDefinitionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListDeviceDefinitionsQueryParams)
    ], ListDeviceDefinitionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDeviceDefinitionsHeaders)
    ], ListDeviceDefinitionsRequest.prototype, "headers", void 0);
    return ListDeviceDefinitionsRequest;
}(SpeakeasyBase));
export { ListDeviceDefinitionsRequest };
var ListDeviceDefinitionsResponse = /** @class */ (function (_super) {
    __extends(ListDeviceDefinitionsResponse, _super);
    function ListDeviceDefinitionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDeviceDefinitionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListDeviceDefinitionsResponse)
    ], ListDeviceDefinitionsResponse.prototype, "listDeviceDefinitionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDeviceDefinitionsResponse.prototype, "statusCode", void 0);
    return ListDeviceDefinitionsResponse;
}(SpeakeasyBase));
export { ListDeviceDefinitionsResponse };
