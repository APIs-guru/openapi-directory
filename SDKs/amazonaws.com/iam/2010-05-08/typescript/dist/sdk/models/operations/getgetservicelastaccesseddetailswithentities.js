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
export var GetGetServiceLastAccessedDetailsWithEntitiesActionEnum;
(function (GetGetServiceLastAccessedDetailsWithEntitiesActionEnum) {
    GetGetServiceLastAccessedDetailsWithEntitiesActionEnum["GetServiceLastAccessedDetailsWithEntities"] = "GetServiceLastAccessedDetailsWithEntities";
})(GetGetServiceLastAccessedDetailsWithEntitiesActionEnum || (GetGetServiceLastAccessedDetailsWithEntitiesActionEnum = {}));
export var GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum;
(function (GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum) {
    GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum || (GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum = {}));
var GetGetServiceLastAccessedDetailsWithEntitiesQueryParams = /** @class */ (function (_super) {
    __extends(GetGetServiceLastAccessedDetailsWithEntitiesQueryParams, _super);
    function GetGetServiceLastAccessedDetailsWithEntitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetServiceLastAccessedDetailsWithEntitiesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=JobId" }),
        __metadata("design:type", String)
    ], GetGetServiceLastAccessedDetailsWithEntitiesQueryParams.prototype, "jobId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetGetServiceLastAccessedDetailsWithEntitiesQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetGetServiceLastAccessedDetailsWithEntitiesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ServiceNamespace" }),
        __metadata("design:type", String)
    ], GetGetServiceLastAccessedDetailsWithEntitiesQueryParams.prototype, "serviceNamespace", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetServiceLastAccessedDetailsWithEntitiesQueryParams.prototype, "version", void 0);
    return GetGetServiceLastAccessedDetailsWithEntitiesQueryParams;
}(SpeakeasyBase));
export { GetGetServiceLastAccessedDetailsWithEntitiesQueryParams };
var GetGetServiceLastAccessedDetailsWithEntitiesHeaders = /** @class */ (function (_super) {
    __extends(GetGetServiceLastAccessedDetailsWithEntitiesHeaders, _super);
    function GetGetServiceLastAccessedDetailsWithEntitiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetServiceLastAccessedDetailsWithEntitiesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetServiceLastAccessedDetailsWithEntitiesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetServiceLastAccessedDetailsWithEntitiesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetServiceLastAccessedDetailsWithEntitiesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetServiceLastAccessedDetailsWithEntitiesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetServiceLastAccessedDetailsWithEntitiesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetServiceLastAccessedDetailsWithEntitiesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetServiceLastAccessedDetailsWithEntitiesHeaders;
}(SpeakeasyBase));
export { GetGetServiceLastAccessedDetailsWithEntitiesHeaders };
var GetGetServiceLastAccessedDetailsWithEntitiesRequest = /** @class */ (function (_super) {
    __extends(GetGetServiceLastAccessedDetailsWithEntitiesRequest, _super);
    function GetGetServiceLastAccessedDetailsWithEntitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetServiceLastAccessedDetailsWithEntitiesQueryParams)
    ], GetGetServiceLastAccessedDetailsWithEntitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetServiceLastAccessedDetailsWithEntitiesHeaders)
    ], GetGetServiceLastAccessedDetailsWithEntitiesRequest.prototype, "headers", void 0);
    return GetGetServiceLastAccessedDetailsWithEntitiesRequest;
}(SpeakeasyBase));
export { GetGetServiceLastAccessedDetailsWithEntitiesRequest };
var GetGetServiceLastAccessedDetailsWithEntitiesResponse = /** @class */ (function (_super) {
    __extends(GetGetServiceLastAccessedDetailsWithEntitiesResponse, _super);
    function GetGetServiceLastAccessedDetailsWithEntitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetServiceLastAccessedDetailsWithEntitiesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetServiceLastAccessedDetailsWithEntitiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetServiceLastAccessedDetailsWithEntitiesResponse.prototype, "statusCode", void 0);
    return GetGetServiceLastAccessedDetailsWithEntitiesResponse;
}(SpeakeasyBase));
export { GetGetServiceLastAccessedDetailsWithEntitiesResponse };
