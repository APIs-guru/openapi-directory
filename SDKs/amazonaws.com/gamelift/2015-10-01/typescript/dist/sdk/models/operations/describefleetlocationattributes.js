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
var DescribeFleetLocationAttributesQueryParams = /** @class */ (function (_super) {
    __extends(DescribeFleetLocationAttributesQueryParams, _super);
    function DescribeFleetLocationAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationAttributesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationAttributesQueryParams.prototype, "nextToken", void 0);
    return DescribeFleetLocationAttributesQueryParams;
}(SpeakeasyBase));
export { DescribeFleetLocationAttributesQueryParams };
export var DescribeFleetLocationAttributesXAmzTargetEnum;
(function (DescribeFleetLocationAttributesXAmzTargetEnum) {
    DescribeFleetLocationAttributesXAmzTargetEnum["GameLiftDescribeFleetLocationAttributes"] = "GameLift.DescribeFleetLocationAttributes";
})(DescribeFleetLocationAttributesXAmzTargetEnum || (DescribeFleetLocationAttributesXAmzTargetEnum = {}));
var DescribeFleetLocationAttributesHeaders = /** @class */ (function (_super) {
    __extends(DescribeFleetLocationAttributesHeaders, _super);
    function DescribeFleetLocationAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationAttributesHeaders.prototype, "xAmzTarget", void 0);
    return DescribeFleetLocationAttributesHeaders;
}(SpeakeasyBase));
export { DescribeFleetLocationAttributesHeaders };
var DescribeFleetLocationAttributesRequest = /** @class */ (function (_super) {
    __extends(DescribeFleetLocationAttributesRequest, _super);
    function DescribeFleetLocationAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeFleetLocationAttributesQueryParams)
    ], DescribeFleetLocationAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeFleetLocationAttributesHeaders)
    ], DescribeFleetLocationAttributesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeFleetLocationAttributesInput)
    ], DescribeFleetLocationAttributesRequest.prototype, "request", void 0);
    return DescribeFleetLocationAttributesRequest;
}(SpeakeasyBase));
export { DescribeFleetLocationAttributesRequest };
var DescribeFleetLocationAttributesResponse = /** @class */ (function (_super) {
    __extends(DescribeFleetLocationAttributesResponse, _super);
    function DescribeFleetLocationAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeFleetLocationAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeFleetLocationAttributesOutput)
    ], DescribeFleetLocationAttributesResponse.prototype, "describeFleetLocationAttributesOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeFleetLocationAttributesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeFleetLocationAttributesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeFleetLocationAttributesResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeFleetLocationAttributesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeFleetLocationAttributesResponse.prototype, "unauthorizedException", void 0);
    return DescribeFleetLocationAttributesResponse;
}(SpeakeasyBase));
export { DescribeFleetLocationAttributesResponse };
