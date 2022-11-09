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
var ListNamedShadowsForThingPathParams = /** @class */ (function (_super) {
    __extends(ListNamedShadowsForThingPathParams, _super);
    function ListNamedShadowsForThingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=thingName" }),
        __metadata("design:type", String)
    ], ListNamedShadowsForThingPathParams.prototype, "thingName", void 0);
    return ListNamedShadowsForThingPathParams;
}(SpeakeasyBase));
export { ListNamedShadowsForThingPathParams };
var ListNamedShadowsForThingQueryParams = /** @class */ (function (_super) {
    __extends(ListNamedShadowsForThingQueryParams, _super);
    function ListNamedShadowsForThingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListNamedShadowsForThingQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ListNamedShadowsForThingQueryParams.prototype, "pageSize", void 0);
    return ListNamedShadowsForThingQueryParams;
}(SpeakeasyBase));
export { ListNamedShadowsForThingQueryParams };
var ListNamedShadowsForThingHeaders = /** @class */ (function (_super) {
    __extends(ListNamedShadowsForThingHeaders, _super);
    function ListNamedShadowsForThingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListNamedShadowsForThingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListNamedShadowsForThingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListNamedShadowsForThingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListNamedShadowsForThingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListNamedShadowsForThingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListNamedShadowsForThingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListNamedShadowsForThingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListNamedShadowsForThingHeaders;
}(SpeakeasyBase));
export { ListNamedShadowsForThingHeaders };
var ListNamedShadowsForThingRequest = /** @class */ (function (_super) {
    __extends(ListNamedShadowsForThingRequest, _super);
    function ListNamedShadowsForThingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListNamedShadowsForThingPathParams)
    ], ListNamedShadowsForThingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListNamedShadowsForThingQueryParams)
    ], ListNamedShadowsForThingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListNamedShadowsForThingHeaders)
    ], ListNamedShadowsForThingRequest.prototype, "headers", void 0);
    return ListNamedShadowsForThingRequest;
}(SpeakeasyBase));
export { ListNamedShadowsForThingRequest };
var ListNamedShadowsForThingResponse = /** @class */ (function (_super) {
    __extends(ListNamedShadowsForThingResponse, _super);
    function ListNamedShadowsForThingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListNamedShadowsForThingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListNamedShadowsForThingResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListNamedShadowsForThingResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListNamedShadowsForThingResponse)
    ], ListNamedShadowsForThingResponse.prototype, "listNamedShadowsForThingResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListNamedShadowsForThingResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListNamedShadowsForThingResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListNamedShadowsForThingResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListNamedShadowsForThingResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListNamedShadowsForThingResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListNamedShadowsForThingResponse.prototype, "unauthorizedException", void 0);
    return ListNamedShadowsForThingResponse;
}(SpeakeasyBase));
export { ListNamedShadowsForThingResponse };
