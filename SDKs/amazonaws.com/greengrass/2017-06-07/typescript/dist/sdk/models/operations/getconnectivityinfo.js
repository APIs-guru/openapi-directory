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
var GetConnectivityInfoPathParams = /** @class */ (function (_super) {
    __extends(GetConnectivityInfoPathParams, _super);
    function GetConnectivityInfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ThingName" }),
        __metadata("design:type", String)
    ], GetConnectivityInfoPathParams.prototype, "thingName", void 0);
    return GetConnectivityInfoPathParams;
}(SpeakeasyBase));
export { GetConnectivityInfoPathParams };
var GetConnectivityInfoHeaders = /** @class */ (function (_super) {
    __extends(GetConnectivityInfoHeaders, _super);
    function GetConnectivityInfoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetConnectivityInfoHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetConnectivityInfoHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetConnectivityInfoHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetConnectivityInfoHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetConnectivityInfoHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetConnectivityInfoHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetConnectivityInfoHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetConnectivityInfoHeaders;
}(SpeakeasyBase));
export { GetConnectivityInfoHeaders };
var GetConnectivityInfoRequest = /** @class */ (function (_super) {
    __extends(GetConnectivityInfoRequest, _super);
    function GetConnectivityInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetConnectivityInfoPathParams)
    ], GetConnectivityInfoRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetConnectivityInfoHeaders)
    ], GetConnectivityInfoRequest.prototype, "headers", void 0);
    return GetConnectivityInfoRequest;
}(SpeakeasyBase));
export { GetConnectivityInfoRequest };
var GetConnectivityInfoResponse = /** @class */ (function (_super) {
    __extends(GetConnectivityInfoResponse, _super);
    function GetConnectivityInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetConnectivityInfoResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetConnectivityInfoResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetConnectivityInfoResponse)
    ], GetConnectivityInfoResponse.prototype, "getConnectivityInfoResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetConnectivityInfoResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetConnectivityInfoResponse.prototype, "statusCode", void 0);
    return GetConnectivityInfoResponse;
}(SpeakeasyBase));
export { GetConnectivityInfoResponse };
