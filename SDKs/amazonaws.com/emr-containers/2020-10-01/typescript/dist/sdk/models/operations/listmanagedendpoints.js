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
var ListManagedEndpointsPathParams = /** @class */ (function (_super) {
    __extends(ListManagedEndpointsPathParams, _super);
    function ListManagedEndpointsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualClusterId" }),
        __metadata("design:type", String)
    ], ListManagedEndpointsPathParams.prototype, "virtualClusterId", void 0);
    return ListManagedEndpointsPathParams;
}(SpeakeasyBase));
export { ListManagedEndpointsPathParams };
var ListManagedEndpointsQueryParams = /** @class */ (function (_super) {
    __extends(ListManagedEndpointsQueryParams, _super);
    function ListManagedEndpointsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" }),
        __metadata("design:type", Date)
    ], ListManagedEndpointsQueryParams.prototype, "createdAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" }),
        __metadata("design:type", Date)
    ], ListManagedEndpointsQueryParams.prototype, "createdBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListManagedEndpointsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListManagedEndpointsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=states" }),
        __metadata("design:type", Array)
    ], ListManagedEndpointsQueryParams.prototype, "states", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=types" }),
        __metadata("design:type", Array)
    ], ListManagedEndpointsQueryParams.prototype, "types", void 0);
    return ListManagedEndpointsQueryParams;
}(SpeakeasyBase));
export { ListManagedEndpointsQueryParams };
var ListManagedEndpointsHeaders = /** @class */ (function (_super) {
    __extends(ListManagedEndpointsHeaders, _super);
    function ListManagedEndpointsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListManagedEndpointsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListManagedEndpointsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListManagedEndpointsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListManagedEndpointsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListManagedEndpointsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListManagedEndpointsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListManagedEndpointsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListManagedEndpointsHeaders;
}(SpeakeasyBase));
export { ListManagedEndpointsHeaders };
var ListManagedEndpointsRequest = /** @class */ (function (_super) {
    __extends(ListManagedEndpointsRequest, _super);
    function ListManagedEndpointsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListManagedEndpointsPathParams)
    ], ListManagedEndpointsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListManagedEndpointsQueryParams)
    ], ListManagedEndpointsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListManagedEndpointsHeaders)
    ], ListManagedEndpointsRequest.prototype, "headers", void 0);
    return ListManagedEndpointsRequest;
}(SpeakeasyBase));
export { ListManagedEndpointsRequest };
var ListManagedEndpointsResponse = /** @class */ (function (_super) {
    __extends(ListManagedEndpointsResponse, _super);
    function ListManagedEndpointsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListManagedEndpointsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListManagedEndpointsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListManagedEndpointsResponse)
    ], ListManagedEndpointsResponse.prototype, "listManagedEndpointsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListManagedEndpointsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListManagedEndpointsResponse.prototype, "validationException", void 0);
    return ListManagedEndpointsResponse;
}(SpeakeasyBase));
export { ListManagedEndpointsResponse };
