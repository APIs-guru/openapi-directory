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
var DescribeGameSessionQueuesQueryParams = /** @class */ (function (_super) {
    __extends(DescribeGameSessionQueuesQueryParams, _super);
    function DescribeGameSessionQueuesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeGameSessionQueuesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeGameSessionQueuesQueryParams.prototype, "nextToken", void 0);
    return DescribeGameSessionQueuesQueryParams;
}(SpeakeasyBase));
export { DescribeGameSessionQueuesQueryParams };
export var DescribeGameSessionQueuesXAmzTargetEnum;
(function (DescribeGameSessionQueuesXAmzTargetEnum) {
    DescribeGameSessionQueuesXAmzTargetEnum["GameLiftDescribeGameSessionQueues"] = "GameLift.DescribeGameSessionQueues";
})(DescribeGameSessionQueuesXAmzTargetEnum || (DescribeGameSessionQueuesXAmzTargetEnum = {}));
var DescribeGameSessionQueuesHeaders = /** @class */ (function (_super) {
    __extends(DescribeGameSessionQueuesHeaders, _super);
    function DescribeGameSessionQueuesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeGameSessionQueuesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeGameSessionQueuesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeGameSessionQueuesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeGameSessionQueuesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeGameSessionQueuesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeGameSessionQueuesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeGameSessionQueuesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeGameSessionQueuesHeaders.prototype, "xAmzTarget", void 0);
    return DescribeGameSessionQueuesHeaders;
}(SpeakeasyBase));
export { DescribeGameSessionQueuesHeaders };
var DescribeGameSessionQueuesRequest = /** @class */ (function (_super) {
    __extends(DescribeGameSessionQueuesRequest, _super);
    function DescribeGameSessionQueuesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeGameSessionQueuesQueryParams)
    ], DescribeGameSessionQueuesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeGameSessionQueuesHeaders)
    ], DescribeGameSessionQueuesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeGameSessionQueuesInput)
    ], DescribeGameSessionQueuesRequest.prototype, "request", void 0);
    return DescribeGameSessionQueuesRequest;
}(SpeakeasyBase));
export { DescribeGameSessionQueuesRequest };
var DescribeGameSessionQueuesResponse = /** @class */ (function (_super) {
    __extends(DescribeGameSessionQueuesResponse, _super);
    function DescribeGameSessionQueuesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeGameSessionQueuesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeGameSessionQueuesOutput)
    ], DescribeGameSessionQueuesResponse.prototype, "describeGameSessionQueuesOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGameSessionQueuesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGameSessionQueuesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGameSessionQueuesResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeGameSessionQueuesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeGameSessionQueuesResponse.prototype, "unauthorizedException", void 0);
    return DescribeGameSessionQueuesResponse;
}(SpeakeasyBase));
export { DescribeGameSessionQueuesResponse };
