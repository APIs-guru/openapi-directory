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
var GetConnectorDefinitionVersionPathParams = /** @class */ (function (_super) {
    __extends(GetConnectorDefinitionVersionPathParams, _super);
    function GetConnectorDefinitionVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConnectorDefinitionId" }),
        __metadata("design:type", String)
    ], GetConnectorDefinitionVersionPathParams.prototype, "connectorDefinitionId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ConnectorDefinitionVersionId" }),
        __metadata("design:type", String)
    ], GetConnectorDefinitionVersionPathParams.prototype, "connectorDefinitionVersionId", void 0);
    return GetConnectorDefinitionVersionPathParams;
}(SpeakeasyBase));
export { GetConnectorDefinitionVersionPathParams };
var GetConnectorDefinitionVersionQueryParams = /** @class */ (function (_super) {
    __extends(GetConnectorDefinitionVersionQueryParams, _super);
    function GetConnectorDefinitionVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetConnectorDefinitionVersionQueryParams.prototype, "nextToken", void 0);
    return GetConnectorDefinitionVersionQueryParams;
}(SpeakeasyBase));
export { GetConnectorDefinitionVersionQueryParams };
var GetConnectorDefinitionVersionHeaders = /** @class */ (function (_super) {
    __extends(GetConnectorDefinitionVersionHeaders, _super);
    function GetConnectorDefinitionVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetConnectorDefinitionVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetConnectorDefinitionVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetConnectorDefinitionVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetConnectorDefinitionVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetConnectorDefinitionVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetConnectorDefinitionVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetConnectorDefinitionVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetConnectorDefinitionVersionHeaders;
}(SpeakeasyBase));
export { GetConnectorDefinitionVersionHeaders };
var GetConnectorDefinitionVersionRequest = /** @class */ (function (_super) {
    __extends(GetConnectorDefinitionVersionRequest, _super);
    function GetConnectorDefinitionVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetConnectorDefinitionVersionPathParams)
    ], GetConnectorDefinitionVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetConnectorDefinitionVersionQueryParams)
    ], GetConnectorDefinitionVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetConnectorDefinitionVersionHeaders)
    ], GetConnectorDefinitionVersionRequest.prototype, "headers", void 0);
    return GetConnectorDefinitionVersionRequest;
}(SpeakeasyBase));
export { GetConnectorDefinitionVersionRequest };
var GetConnectorDefinitionVersionResponse = /** @class */ (function (_super) {
    __extends(GetConnectorDefinitionVersionResponse, _super);
    function GetConnectorDefinitionVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetConnectorDefinitionVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetConnectorDefinitionVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetConnectorDefinitionVersionResponse)
    ], GetConnectorDefinitionVersionResponse.prototype, "getConnectorDefinitionVersionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetConnectorDefinitionVersionResponse.prototype, "statusCode", void 0);
    return GetConnectorDefinitionVersionResponse;
}(SpeakeasyBase));
export { GetConnectorDefinitionVersionResponse };
