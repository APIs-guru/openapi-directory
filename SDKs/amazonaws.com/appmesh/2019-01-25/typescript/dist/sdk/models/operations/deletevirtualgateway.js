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
var DeleteVirtualGatewayPathParams = /** @class */ (function (_super) {
    __extends(DeleteVirtualGatewayPathParams, _super);
    function DeleteVirtualGatewayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], DeleteVirtualGatewayPathParams.prototype, "meshName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualGatewayName" }),
        __metadata("design:type", String)
    ], DeleteVirtualGatewayPathParams.prototype, "virtualGatewayName", void 0);
    return DeleteVirtualGatewayPathParams;
}(SpeakeasyBase));
export { DeleteVirtualGatewayPathParams };
var DeleteVirtualGatewayQueryParams = /** @class */ (function (_super) {
    __extends(DeleteVirtualGatewayQueryParams, _super);
    function DeleteVirtualGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" }),
        __metadata("design:type", String)
    ], DeleteVirtualGatewayQueryParams.prototype, "meshOwner", void 0);
    return DeleteVirtualGatewayQueryParams;
}(SpeakeasyBase));
export { DeleteVirtualGatewayQueryParams };
var DeleteVirtualGatewayHeaders = /** @class */ (function (_super) {
    __extends(DeleteVirtualGatewayHeaders, _super);
    function DeleteVirtualGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteVirtualGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteVirtualGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteVirtualGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteVirtualGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteVirtualGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteVirtualGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteVirtualGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteVirtualGatewayHeaders;
}(SpeakeasyBase));
export { DeleteVirtualGatewayHeaders };
var DeleteVirtualGatewayRequest = /** @class */ (function (_super) {
    __extends(DeleteVirtualGatewayRequest, _super);
    function DeleteVirtualGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVirtualGatewayPathParams)
    ], DeleteVirtualGatewayRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVirtualGatewayQueryParams)
    ], DeleteVirtualGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVirtualGatewayHeaders)
    ], DeleteVirtualGatewayRequest.prototype, "headers", void 0);
    return DeleteVirtualGatewayRequest;
}(SpeakeasyBase));
export { DeleteVirtualGatewayRequest };
var DeleteVirtualGatewayResponse = /** @class */ (function (_super) {
    __extends(DeleteVirtualGatewayResponse, _super);
    function DeleteVirtualGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteVirtualGatewayResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteVirtualGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteVirtualGatewayOutput)
    ], DeleteVirtualGatewayResponse.prototype, "deleteVirtualGatewayOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteVirtualGatewayResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteVirtualGatewayResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteVirtualGatewayResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteVirtualGatewayResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteVirtualGatewayResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteVirtualGatewayResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteVirtualGatewayResponse.prototype, "tooManyRequestsException", void 0);
    return DeleteVirtualGatewayResponse;
}(SpeakeasyBase));
export { DeleteVirtualGatewayResponse };
