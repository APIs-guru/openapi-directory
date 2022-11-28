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
export var DescribeEc2InstanceLimitsXAmzTargetEnum;
(function (DescribeEc2InstanceLimitsXAmzTargetEnum) {
    DescribeEc2InstanceLimitsXAmzTargetEnum["GameLiftDescribeEc2InstanceLimits"] = "GameLift.DescribeEC2InstanceLimits";
})(DescribeEc2InstanceLimitsXAmzTargetEnum || (DescribeEc2InstanceLimitsXAmzTargetEnum = {}));
var DescribeEc2InstanceLimitsHeaders = /** @class */ (function (_super) {
    __extends(DescribeEc2InstanceLimitsHeaders, _super);
    function DescribeEc2InstanceLimitsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeEc2InstanceLimitsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeEc2InstanceLimitsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeEc2InstanceLimitsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeEc2InstanceLimitsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeEc2InstanceLimitsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeEc2InstanceLimitsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeEc2InstanceLimitsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeEc2InstanceLimitsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeEc2InstanceLimitsHeaders;
}(SpeakeasyBase));
export { DescribeEc2InstanceLimitsHeaders };
var DescribeEc2InstanceLimitsRequest = /** @class */ (function (_super) {
    __extends(DescribeEc2InstanceLimitsRequest, _super);
    function DescribeEc2InstanceLimitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeEc2InstanceLimitsHeaders)
    ], DescribeEc2InstanceLimitsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeEc2InstanceLimitsInput)
    ], DescribeEc2InstanceLimitsRequest.prototype, "request", void 0);
    return DescribeEc2InstanceLimitsRequest;
}(SpeakeasyBase));
export { DescribeEc2InstanceLimitsRequest };
var DescribeEc2InstanceLimitsResponse = /** @class */ (function (_super) {
    __extends(DescribeEc2InstanceLimitsResponse, _super);
    function DescribeEc2InstanceLimitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeEc2InstanceLimitsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeEc2InstanceLimitsOutput)
    ], DescribeEc2InstanceLimitsResponse.prototype, "describeEc2InstanceLimitsOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeEc2InstanceLimitsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeEc2InstanceLimitsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeEc2InstanceLimitsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeEc2InstanceLimitsResponse.prototype, "unauthorizedException", void 0);
    return DescribeEc2InstanceLimitsResponse;
}(SpeakeasyBase));
export { DescribeEc2InstanceLimitsResponse };
