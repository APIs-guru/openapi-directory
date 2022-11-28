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
var ListCustomRoutingAcceleratorsQueryParams = /** @class */ (function (_super) {
    __extends(ListCustomRoutingAcceleratorsQueryParams, _super);
    function ListCustomRoutingAcceleratorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListCustomRoutingAcceleratorsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListCustomRoutingAcceleratorsQueryParams.prototype, "nextToken", void 0);
    return ListCustomRoutingAcceleratorsQueryParams;
}(SpeakeasyBase));
export { ListCustomRoutingAcceleratorsQueryParams };
export var ListCustomRoutingAcceleratorsXAmzTargetEnum;
(function (ListCustomRoutingAcceleratorsXAmzTargetEnum) {
    ListCustomRoutingAcceleratorsXAmzTargetEnum["GlobalAcceleratorV20180706ListCustomRoutingAccelerators"] = "GlobalAccelerator_V20180706.ListCustomRoutingAccelerators";
})(ListCustomRoutingAcceleratorsXAmzTargetEnum || (ListCustomRoutingAcceleratorsXAmzTargetEnum = {}));
var ListCustomRoutingAcceleratorsHeaders = /** @class */ (function (_super) {
    __extends(ListCustomRoutingAcceleratorsHeaders, _super);
    function ListCustomRoutingAcceleratorsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListCustomRoutingAcceleratorsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListCustomRoutingAcceleratorsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListCustomRoutingAcceleratorsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListCustomRoutingAcceleratorsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListCustomRoutingAcceleratorsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListCustomRoutingAcceleratorsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListCustomRoutingAcceleratorsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListCustomRoutingAcceleratorsHeaders.prototype, "xAmzTarget", void 0);
    return ListCustomRoutingAcceleratorsHeaders;
}(SpeakeasyBase));
export { ListCustomRoutingAcceleratorsHeaders };
var ListCustomRoutingAcceleratorsRequest = /** @class */ (function (_super) {
    __extends(ListCustomRoutingAcceleratorsRequest, _super);
    function ListCustomRoutingAcceleratorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCustomRoutingAcceleratorsQueryParams)
    ], ListCustomRoutingAcceleratorsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCustomRoutingAcceleratorsHeaders)
    ], ListCustomRoutingAcceleratorsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListCustomRoutingAcceleratorsRequest)
    ], ListCustomRoutingAcceleratorsRequest.prototype, "request", void 0);
    return ListCustomRoutingAcceleratorsRequest;
}(SpeakeasyBase));
export { ListCustomRoutingAcceleratorsRequest };
var ListCustomRoutingAcceleratorsResponse = /** @class */ (function (_super) {
    __extends(ListCustomRoutingAcceleratorsResponse, _super);
    function ListCustomRoutingAcceleratorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListCustomRoutingAcceleratorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomRoutingAcceleratorsResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomRoutingAcceleratorsResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCustomRoutingAcceleratorsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCustomRoutingAcceleratorsResponse)
    ], ListCustomRoutingAcceleratorsResponse.prototype, "listCustomRoutingAcceleratorsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListCustomRoutingAcceleratorsResponse.prototype, "statusCode", void 0);
    return ListCustomRoutingAcceleratorsResponse;
}(SpeakeasyBase));
export { ListCustomRoutingAcceleratorsResponse };
