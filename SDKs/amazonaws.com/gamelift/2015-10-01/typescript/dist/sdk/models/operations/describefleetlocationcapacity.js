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
export var DescribeFleetLocationCapacityXAmzTargetEnum;
(function (DescribeFleetLocationCapacityXAmzTargetEnum) {
    DescribeFleetLocationCapacityXAmzTargetEnum["GameLiftDescribeFleetLocationCapacity"] = "GameLift.DescribeFleetLocationCapacity";
})(DescribeFleetLocationCapacityXAmzTargetEnum || (DescribeFleetLocationCapacityXAmzTargetEnum = {}));
var DescribeFleetLocationCapacityHeaders = /** @class */ (function (_super) {
    __extends(DescribeFleetLocationCapacityHeaders, _super);
    function DescribeFleetLocationCapacityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationCapacityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationCapacityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationCapacityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationCapacityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationCapacityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationCapacityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationCapacityHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeFleetLocationCapacityHeaders.prototype, "xAmzTarget", void 0);
    return DescribeFleetLocationCapacityHeaders;
}(SpeakeasyBase));
export { DescribeFleetLocationCapacityHeaders };
var DescribeFleetLocationCapacityRequest = /** @class */ (function (_super) {
    __extends(DescribeFleetLocationCapacityRequest, _super);
    function DescribeFleetLocationCapacityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeFleetLocationCapacityHeaders)
    ], DescribeFleetLocationCapacityRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeFleetLocationCapacityInput)
    ], DescribeFleetLocationCapacityRequest.prototype, "request", void 0);
    return DescribeFleetLocationCapacityRequest;
}(SpeakeasyBase));
export { DescribeFleetLocationCapacityRequest };
var DescribeFleetLocationCapacityResponse = /** @class */ (function (_super) {
    __extends(DescribeFleetLocationCapacityResponse, _super);
    function DescribeFleetLocationCapacityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeFleetLocationCapacityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeFleetLocationCapacityOutput)
    ], DescribeFleetLocationCapacityResponse.prototype, "describeFleetLocationCapacityOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeFleetLocationCapacityResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeFleetLocationCapacityResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeFleetLocationCapacityResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeFleetLocationCapacityResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeFleetLocationCapacityResponse.prototype, "unauthorizedException", void 0);
    return DescribeFleetLocationCapacityResponse;
}(SpeakeasyBase));
export { DescribeFleetLocationCapacityResponse };
