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
var DescribeGameServerInstancesQueryParams = /** @class */ (function (_super) {
    __extends(DescribeGameServerInstancesQueryParams, _super);
    function DescribeGameServerInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeGameServerInstancesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeGameServerInstancesQueryParams.prototype, "nextToken", void 0);
    return DescribeGameServerInstancesQueryParams;
}(SpeakeasyBase));
export { DescribeGameServerInstancesQueryParams };
export var DescribeGameServerInstancesXAmzTargetEnum;
(function (DescribeGameServerInstancesXAmzTargetEnum) {
    DescribeGameServerInstancesXAmzTargetEnum["GameLiftDescribeGameServerInstances"] = "GameLift.DescribeGameServerInstances";
})(DescribeGameServerInstancesXAmzTargetEnum || (DescribeGameServerInstancesXAmzTargetEnum = {}));
var DescribeGameServerInstancesHeaders = /** @class */ (function (_super) {
    __extends(DescribeGameServerInstancesHeaders, _super);
    function DescribeGameServerInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeGameServerInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeGameServerInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeGameServerInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeGameServerInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeGameServerInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeGameServerInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeGameServerInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeGameServerInstancesHeaders.prototype, "xAmzTarget", void 0);
    return DescribeGameServerInstancesHeaders;
}(SpeakeasyBase));
export { DescribeGameServerInstancesHeaders };
var DescribeGameServerInstancesRequest = /** @class */ (function (_super) {
    __extends(DescribeGameServerInstancesRequest, _super);
    function DescribeGameServerInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeGameServerInstancesQueryParams)
    ], DescribeGameServerInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeGameServerInstancesHeaders)
    ], DescribeGameServerInstancesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeGameServerInstancesInput)
    ], DescribeGameServerInstancesRequest.prototype, "request", void 0);
    return DescribeGameServerInstancesRequest;
}(SpeakeasyBase));
export { DescribeGameServerInstancesRequest };
var DescribeGameServerInstancesResponse = /** @class */ (function (_super) {
    __extends(DescribeGameServerInstancesResponse, _super);
    function DescribeGameServerInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeGameServerInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeGameServerInstancesOutput)
    ], DescribeGameServerInstancesResponse.prototype, "describeGameServerInstancesOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGameServerInstancesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGameServerInstancesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGameServerInstancesResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeGameServerInstancesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGameServerInstancesResponse.prototype, "unauthorizedException", void 0);
    return DescribeGameServerInstancesResponse;
}(SpeakeasyBase));
export { DescribeGameServerInstancesResponse };
