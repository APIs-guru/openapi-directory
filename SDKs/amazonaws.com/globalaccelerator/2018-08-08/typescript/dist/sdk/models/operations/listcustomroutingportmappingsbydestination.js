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
var ListCustomRoutingPortMappingsByDestinationQueryParams = /** @class */ (function (_super) {
    __extends(ListCustomRoutingPortMappingsByDestinationQueryParams, _super);
    function ListCustomRoutingPortMappingsByDestinationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListCustomRoutingPortMappingsByDestinationQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListCustomRoutingPortMappingsByDestinationQueryParams.prototype, "nextToken", void 0);
    return ListCustomRoutingPortMappingsByDestinationQueryParams;
}(SpeakeasyBase));
export { ListCustomRoutingPortMappingsByDestinationQueryParams };
export var ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum;
(function (ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum) {
    ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum["GlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestination"] = "GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination";
})(ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum || (ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum = {}));
var ListCustomRoutingPortMappingsByDestinationHeaders = /** @class */ (function (_super) {
    __extends(ListCustomRoutingPortMappingsByDestinationHeaders, _super);
    function ListCustomRoutingPortMappingsByDestinationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListCustomRoutingPortMappingsByDestinationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListCustomRoutingPortMappingsByDestinationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListCustomRoutingPortMappingsByDestinationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListCustomRoutingPortMappingsByDestinationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListCustomRoutingPortMappingsByDestinationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListCustomRoutingPortMappingsByDestinationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListCustomRoutingPortMappingsByDestinationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListCustomRoutingPortMappingsByDestinationHeaders.prototype, "xAmzTarget", void 0);
    return ListCustomRoutingPortMappingsByDestinationHeaders;
}(SpeakeasyBase));
export { ListCustomRoutingPortMappingsByDestinationHeaders };
var ListCustomRoutingPortMappingsByDestinationRequest = /** @class */ (function (_super) {
    __extends(ListCustomRoutingPortMappingsByDestinationRequest, _super);
    function ListCustomRoutingPortMappingsByDestinationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCustomRoutingPortMappingsByDestinationQueryParams)
    ], ListCustomRoutingPortMappingsByDestinationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCustomRoutingPortMappingsByDestinationHeaders)
    ], ListCustomRoutingPortMappingsByDestinationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListCustomRoutingPortMappingsByDestinationRequest)
    ], ListCustomRoutingPortMappingsByDestinationRequest.prototype, "request", void 0);
    return ListCustomRoutingPortMappingsByDestinationRequest;
}(SpeakeasyBase));
export { ListCustomRoutingPortMappingsByDestinationRequest };
var ListCustomRoutingPortMappingsByDestinationResponse = /** @class */ (function (_super) {
    __extends(ListCustomRoutingPortMappingsByDestinationResponse, _super);
    function ListCustomRoutingPortMappingsByDestinationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListCustomRoutingPortMappingsByDestinationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomRoutingPortMappingsByDestinationResponse.prototype, "endpointNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomRoutingPortMappingsByDestinationResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomRoutingPortMappingsByDestinationResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomRoutingPortMappingsByDestinationResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCustomRoutingPortMappingsByDestinationResponse)
    ], ListCustomRoutingPortMappingsByDestinationResponse.prototype, "listCustomRoutingPortMappingsByDestinationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListCustomRoutingPortMappingsByDestinationResponse.prototype, "statusCode", void 0);
    return ListCustomRoutingPortMappingsByDestinationResponse;
}(SpeakeasyBase));
export { ListCustomRoutingPortMappingsByDestinationResponse };
