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
var GetChangeLogsPathParams = /** @class */ (function (_super) {
    __extends(GetChangeLogsPathParams, _super);
    function GetChangeLogsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], GetChangeLogsPathParams.prototype, "assessmentId", void 0);
    return GetChangeLogsPathParams;
}(SpeakeasyBase));
export { GetChangeLogsPathParams };
var GetChangeLogsQueryParams = /** @class */ (function (_super) {
    __extends(GetChangeLogsQueryParams, _super);
    function GetChangeLogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=controlId" }),
        __metadata("design:type", String)
    ], GetChangeLogsQueryParams.prototype, "controlId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=controlSetId" }),
        __metadata("design:type", String)
    ], GetChangeLogsQueryParams.prototype, "controlSetId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetChangeLogsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetChangeLogsQueryParams.prototype, "nextToken", void 0);
    return GetChangeLogsQueryParams;
}(SpeakeasyBase));
export { GetChangeLogsQueryParams };
var GetChangeLogsHeaders = /** @class */ (function (_super) {
    __extends(GetChangeLogsHeaders, _super);
    function GetChangeLogsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetChangeLogsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetChangeLogsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetChangeLogsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetChangeLogsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetChangeLogsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetChangeLogsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetChangeLogsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetChangeLogsHeaders;
}(SpeakeasyBase));
export { GetChangeLogsHeaders };
var GetChangeLogsRequest = /** @class */ (function (_super) {
    __extends(GetChangeLogsRequest, _super);
    function GetChangeLogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetChangeLogsPathParams)
    ], GetChangeLogsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetChangeLogsQueryParams)
    ], GetChangeLogsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetChangeLogsHeaders)
    ], GetChangeLogsRequest.prototype, "headers", void 0);
    return GetChangeLogsRequest;
}(SpeakeasyBase));
export { GetChangeLogsRequest };
var GetChangeLogsResponse = /** @class */ (function (_super) {
    __extends(GetChangeLogsResponse, _super);
    function GetChangeLogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetChangeLogsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetChangeLogsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetChangeLogsResponse)
    ], GetChangeLogsResponse.prototype, "getChangeLogsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetChangeLogsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetChangeLogsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetChangeLogsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetChangeLogsResponse.prototype, "validationException", void 0);
    return GetChangeLogsResponse;
}(SpeakeasyBase));
export { GetChangeLogsResponse };
