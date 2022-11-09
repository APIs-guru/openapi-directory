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
var UpdateConnectivityInfoPathParams = /** @class */ (function (_super) {
    __extends(UpdateConnectivityInfoPathParams, _super);
    function UpdateConnectivityInfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ThingName" }),
        __metadata("design:type", String)
    ], UpdateConnectivityInfoPathParams.prototype, "thingName", void 0);
    return UpdateConnectivityInfoPathParams;
}(SpeakeasyBase));
export { UpdateConnectivityInfoPathParams };
var UpdateConnectivityInfoHeaders = /** @class */ (function (_super) {
    __extends(UpdateConnectivityInfoHeaders, _super);
    function UpdateConnectivityInfoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateConnectivityInfoHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateConnectivityInfoHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateConnectivityInfoHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateConnectivityInfoHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateConnectivityInfoHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateConnectivityInfoHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateConnectivityInfoHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateConnectivityInfoHeaders;
}(SpeakeasyBase));
export { UpdateConnectivityInfoHeaders };
var UpdateConnectivityInfoRequestBody = /** @class */ (function (_super) {
    __extends(UpdateConnectivityInfoRequestBody, _super);
    function UpdateConnectivityInfoRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ConnectivityInfo", elemType: shared.ConnectivityInfo }),
        __metadata("design:type", Array)
    ], UpdateConnectivityInfoRequestBody.prototype, "connectivityInfo", void 0);
    return UpdateConnectivityInfoRequestBody;
}(SpeakeasyBase));
export { UpdateConnectivityInfoRequestBody };
var UpdateConnectivityInfoRequest = /** @class */ (function (_super) {
    __extends(UpdateConnectivityInfoRequest, _super);
    function UpdateConnectivityInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConnectivityInfoPathParams)
    ], UpdateConnectivityInfoRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateConnectivityInfoHeaders)
    ], UpdateConnectivityInfoRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateConnectivityInfoRequestBody)
    ], UpdateConnectivityInfoRequest.prototype, "request", void 0);
    return UpdateConnectivityInfoRequest;
}(SpeakeasyBase));
export { UpdateConnectivityInfoRequest };
var UpdateConnectivityInfoResponse = /** @class */ (function (_super) {
    __extends(UpdateConnectivityInfoResponse, _super);
    function UpdateConnectivityInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateConnectivityInfoResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateConnectivityInfoResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateConnectivityInfoResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateConnectivityInfoResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateConnectivityInfoResponse)
    ], UpdateConnectivityInfoResponse.prototype, "updateConnectivityInfoResponse", void 0);
    return UpdateConnectivityInfoResponse;
}(SpeakeasyBase));
export { UpdateConnectivityInfoResponse };
