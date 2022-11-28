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
var ListCustomRoutingEndpointGroupsQueryParams = /** @class */ (function (_super) {
    __extends(ListCustomRoutingEndpointGroupsQueryParams, _super);
    function ListCustomRoutingEndpointGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListCustomRoutingEndpointGroupsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListCustomRoutingEndpointGroupsQueryParams.prototype, "nextToken", void 0);
    return ListCustomRoutingEndpointGroupsQueryParams;
}(SpeakeasyBase));
export { ListCustomRoutingEndpointGroupsQueryParams };
export var ListCustomRoutingEndpointGroupsXAmzTargetEnum;
(function (ListCustomRoutingEndpointGroupsXAmzTargetEnum) {
    ListCustomRoutingEndpointGroupsXAmzTargetEnum["GlobalAcceleratorV20180706ListCustomRoutingEndpointGroups"] = "GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups";
})(ListCustomRoutingEndpointGroupsXAmzTargetEnum || (ListCustomRoutingEndpointGroupsXAmzTargetEnum = {}));
var ListCustomRoutingEndpointGroupsHeaders = /** @class */ (function (_super) {
    __extends(ListCustomRoutingEndpointGroupsHeaders, _super);
    function ListCustomRoutingEndpointGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListCustomRoutingEndpointGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListCustomRoutingEndpointGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListCustomRoutingEndpointGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListCustomRoutingEndpointGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListCustomRoutingEndpointGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListCustomRoutingEndpointGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListCustomRoutingEndpointGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListCustomRoutingEndpointGroupsHeaders.prototype, "xAmzTarget", void 0);
    return ListCustomRoutingEndpointGroupsHeaders;
}(SpeakeasyBase));
export { ListCustomRoutingEndpointGroupsHeaders };
var ListCustomRoutingEndpointGroupsRequest = /** @class */ (function (_super) {
    __extends(ListCustomRoutingEndpointGroupsRequest, _super);
    function ListCustomRoutingEndpointGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCustomRoutingEndpointGroupsQueryParams)
    ], ListCustomRoutingEndpointGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCustomRoutingEndpointGroupsHeaders)
    ], ListCustomRoutingEndpointGroupsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListCustomRoutingEndpointGroupsRequest)
    ], ListCustomRoutingEndpointGroupsRequest.prototype, "request", void 0);
    return ListCustomRoutingEndpointGroupsRequest;
}(SpeakeasyBase));
export { ListCustomRoutingEndpointGroupsRequest };
var ListCustomRoutingEndpointGroupsResponse = /** @class */ (function (_super) {
    __extends(ListCustomRoutingEndpointGroupsResponse, _super);
    function ListCustomRoutingEndpointGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListCustomRoutingEndpointGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomRoutingEndpointGroupsResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomRoutingEndpointGroupsResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomRoutingEndpointGroupsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCustomRoutingEndpointGroupsResponse)
    ], ListCustomRoutingEndpointGroupsResponse.prototype, "listCustomRoutingEndpointGroupsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomRoutingEndpointGroupsResponse.prototype, "listenerNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListCustomRoutingEndpointGroupsResponse.prototype, "statusCode", void 0);
    return ListCustomRoutingEndpointGroupsResponse;
}(SpeakeasyBase));
export { ListCustomRoutingEndpointGroupsResponse };
