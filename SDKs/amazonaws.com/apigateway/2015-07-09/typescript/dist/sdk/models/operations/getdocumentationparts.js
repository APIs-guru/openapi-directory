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
var GetDocumentationPartsPathParams = /** @class */ (function (_super) {
    __extends(GetDocumentationPartsPathParams, _super);
    function GetDocumentationPartsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], GetDocumentationPartsPathParams.prototype, "restapiId", void 0);
    return GetDocumentationPartsPathParams;
}(SpeakeasyBase));
export { GetDocumentationPartsPathParams };
export var GetDocumentationPartsLocationStatusEnum;
(function (GetDocumentationPartsLocationStatusEnum) {
    GetDocumentationPartsLocationStatusEnum["Documented"] = "DOCUMENTED";
    GetDocumentationPartsLocationStatusEnum["Undocumented"] = "UNDOCUMENTED";
})(GetDocumentationPartsLocationStatusEnum || (GetDocumentationPartsLocationStatusEnum = {}));
export var GetDocumentationPartsTypeEnum;
(function (GetDocumentationPartsTypeEnum) {
    GetDocumentationPartsTypeEnum["Api"] = "API";
    GetDocumentationPartsTypeEnum["Authorizer"] = "AUTHORIZER";
    GetDocumentationPartsTypeEnum["Model"] = "MODEL";
    GetDocumentationPartsTypeEnum["Resource"] = "RESOURCE";
    GetDocumentationPartsTypeEnum["Method"] = "METHOD";
    GetDocumentationPartsTypeEnum["PathParameter"] = "PATH_PARAMETER";
    GetDocumentationPartsTypeEnum["QueryParameter"] = "QUERY_PARAMETER";
    GetDocumentationPartsTypeEnum["RequestHeader"] = "REQUEST_HEADER";
    GetDocumentationPartsTypeEnum["RequestBody"] = "REQUEST_BODY";
    GetDocumentationPartsTypeEnum["Response"] = "RESPONSE";
    GetDocumentationPartsTypeEnum["ResponseHeader"] = "RESPONSE_HEADER";
    GetDocumentationPartsTypeEnum["ResponseBody"] = "RESPONSE_BODY";
})(GetDocumentationPartsTypeEnum || (GetDocumentationPartsTypeEnum = {}));
var GetDocumentationPartsQueryParams = /** @class */ (function (_super) {
    __extends(GetDocumentationPartsQueryParams, _super);
    function GetDocumentationPartsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetDocumentationPartsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationStatus" }),
        __metadata("design:type", String)
    ], GetDocumentationPartsQueryParams.prototype, "locationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetDocumentationPartsQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetDocumentationPartsQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position" }),
        __metadata("design:type", String)
    ], GetDocumentationPartsQueryParams.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetDocumentationPartsQueryParams.prototype, "type", void 0);
    return GetDocumentationPartsQueryParams;
}(SpeakeasyBase));
export { GetDocumentationPartsQueryParams };
var GetDocumentationPartsHeaders = /** @class */ (function (_super) {
    __extends(GetDocumentationPartsHeaders, _super);
    function GetDocumentationPartsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDocumentationPartsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDocumentationPartsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDocumentationPartsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDocumentationPartsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDocumentationPartsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDocumentationPartsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDocumentationPartsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDocumentationPartsHeaders;
}(SpeakeasyBase));
export { GetDocumentationPartsHeaders };
var GetDocumentationPartsRequest = /** @class */ (function (_super) {
    __extends(GetDocumentationPartsRequest, _super);
    function GetDocumentationPartsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDocumentationPartsPathParams)
    ], GetDocumentationPartsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDocumentationPartsQueryParams)
    ], GetDocumentationPartsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDocumentationPartsHeaders)
    ], GetDocumentationPartsRequest.prototype, "headers", void 0);
    return GetDocumentationPartsRequest;
}(SpeakeasyBase));
export { GetDocumentationPartsRequest };
var GetDocumentationPartsResponse = /** @class */ (function (_super) {
    __extends(GetDocumentationPartsResponse, _super);
    function GetDocumentationPartsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDocumentationPartsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDocumentationPartsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DocumentationParts)
    ], GetDocumentationPartsResponse.prototype, "documentationParts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDocumentationPartsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDocumentationPartsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDocumentationPartsResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDocumentationPartsResponse.prototype, "unauthorizedException", void 0);
    return GetDocumentationPartsResponse;
}(SpeakeasyBase));
export { GetDocumentationPartsResponse };
