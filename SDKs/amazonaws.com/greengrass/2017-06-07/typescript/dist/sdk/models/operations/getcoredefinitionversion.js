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
var GetCoreDefinitionVersionPathParams = /** @class */ (function (_super) {
    __extends(GetCoreDefinitionVersionPathParams, _super);
    function GetCoreDefinitionVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CoreDefinitionId" }),
        __metadata("design:type", String)
    ], GetCoreDefinitionVersionPathParams.prototype, "coreDefinitionId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CoreDefinitionVersionId" }),
        __metadata("design:type", String)
    ], GetCoreDefinitionVersionPathParams.prototype, "coreDefinitionVersionId", void 0);
    return GetCoreDefinitionVersionPathParams;
}(SpeakeasyBase));
export { GetCoreDefinitionVersionPathParams };
var GetCoreDefinitionVersionHeaders = /** @class */ (function (_super) {
    __extends(GetCoreDefinitionVersionHeaders, _super);
    function GetCoreDefinitionVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCoreDefinitionVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCoreDefinitionVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCoreDefinitionVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCoreDefinitionVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCoreDefinitionVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCoreDefinitionVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCoreDefinitionVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCoreDefinitionVersionHeaders;
}(SpeakeasyBase));
export { GetCoreDefinitionVersionHeaders };
var GetCoreDefinitionVersionRequest = /** @class */ (function (_super) {
    __extends(GetCoreDefinitionVersionRequest, _super);
    function GetCoreDefinitionVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCoreDefinitionVersionPathParams)
    ], GetCoreDefinitionVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCoreDefinitionVersionHeaders)
    ], GetCoreDefinitionVersionRequest.prototype, "headers", void 0);
    return GetCoreDefinitionVersionRequest;
}(SpeakeasyBase));
export { GetCoreDefinitionVersionRequest };
var GetCoreDefinitionVersionResponse = /** @class */ (function (_super) {
    __extends(GetCoreDefinitionVersionResponse, _super);
    function GetCoreDefinitionVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetCoreDefinitionVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCoreDefinitionVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetCoreDefinitionVersionResponse)
    ], GetCoreDefinitionVersionResponse.prototype, "getCoreDefinitionVersionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCoreDefinitionVersionResponse.prototype, "statusCode", void 0);
    return GetCoreDefinitionVersionResponse;
}(SpeakeasyBase));
export { GetCoreDefinitionVersionResponse };
