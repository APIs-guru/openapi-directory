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
var GetDeviceDefinitionVersionPathParams = /** @class */ (function (_super) {
    __extends(GetDeviceDefinitionVersionPathParams, _super);
    function GetDeviceDefinitionVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DeviceDefinitionId" }),
        __metadata("design:type", String)
    ], GetDeviceDefinitionVersionPathParams.prototype, "deviceDefinitionId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DeviceDefinitionVersionId" }),
        __metadata("design:type", String)
    ], GetDeviceDefinitionVersionPathParams.prototype, "deviceDefinitionVersionId", void 0);
    return GetDeviceDefinitionVersionPathParams;
}(SpeakeasyBase));
export { GetDeviceDefinitionVersionPathParams };
var GetDeviceDefinitionVersionQueryParams = /** @class */ (function (_super) {
    __extends(GetDeviceDefinitionVersionQueryParams, _super);
    function GetDeviceDefinitionVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDeviceDefinitionVersionQueryParams.prototype, "nextToken", void 0);
    return GetDeviceDefinitionVersionQueryParams;
}(SpeakeasyBase));
export { GetDeviceDefinitionVersionQueryParams };
var GetDeviceDefinitionVersionHeaders = /** @class */ (function (_super) {
    __extends(GetDeviceDefinitionVersionHeaders, _super);
    function GetDeviceDefinitionVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeviceDefinitionVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeviceDefinitionVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeviceDefinitionVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeviceDefinitionVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeviceDefinitionVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeviceDefinitionVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeviceDefinitionVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeviceDefinitionVersionHeaders;
}(SpeakeasyBase));
export { GetDeviceDefinitionVersionHeaders };
var GetDeviceDefinitionVersionRequest = /** @class */ (function (_super) {
    __extends(GetDeviceDefinitionVersionRequest, _super);
    function GetDeviceDefinitionVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeviceDefinitionVersionPathParams)
    ], GetDeviceDefinitionVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeviceDefinitionVersionQueryParams)
    ], GetDeviceDefinitionVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeviceDefinitionVersionHeaders)
    ], GetDeviceDefinitionVersionRequest.prototype, "headers", void 0);
    return GetDeviceDefinitionVersionRequest;
}(SpeakeasyBase));
export { GetDeviceDefinitionVersionRequest };
var GetDeviceDefinitionVersionResponse = /** @class */ (function (_super) {
    __extends(GetDeviceDefinitionVersionResponse, _super);
    function GetDeviceDefinitionVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDeviceDefinitionVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeviceDefinitionVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetDeviceDefinitionVersionResponse)
    ], GetDeviceDefinitionVersionResponse.prototype, "getDeviceDefinitionVersionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeviceDefinitionVersionResponse.prototype, "statusCode", void 0);
    return GetDeviceDefinitionVersionResponse;
}(SpeakeasyBase));
export { GetDeviceDefinitionVersionResponse };
