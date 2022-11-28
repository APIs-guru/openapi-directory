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
var DescribeMatchmakingRuleSetsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeMatchmakingRuleSetsQueryParams, _super);
    function DescribeMatchmakingRuleSetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeMatchmakingRuleSetsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeMatchmakingRuleSetsQueryParams.prototype, "nextToken", void 0);
    return DescribeMatchmakingRuleSetsQueryParams;
}(SpeakeasyBase));
export { DescribeMatchmakingRuleSetsQueryParams };
export var DescribeMatchmakingRuleSetsXAmzTargetEnum;
(function (DescribeMatchmakingRuleSetsXAmzTargetEnum) {
    DescribeMatchmakingRuleSetsXAmzTargetEnum["GameLiftDescribeMatchmakingRuleSets"] = "GameLift.DescribeMatchmakingRuleSets";
})(DescribeMatchmakingRuleSetsXAmzTargetEnum || (DescribeMatchmakingRuleSetsXAmzTargetEnum = {}));
var DescribeMatchmakingRuleSetsHeaders = /** @class */ (function (_super) {
    __extends(DescribeMatchmakingRuleSetsHeaders, _super);
    function DescribeMatchmakingRuleSetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeMatchmakingRuleSetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeMatchmakingRuleSetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeMatchmakingRuleSetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeMatchmakingRuleSetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeMatchmakingRuleSetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeMatchmakingRuleSetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeMatchmakingRuleSetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeMatchmakingRuleSetsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeMatchmakingRuleSetsHeaders;
}(SpeakeasyBase));
export { DescribeMatchmakingRuleSetsHeaders };
var DescribeMatchmakingRuleSetsRequest = /** @class */ (function (_super) {
    __extends(DescribeMatchmakingRuleSetsRequest, _super);
    function DescribeMatchmakingRuleSetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeMatchmakingRuleSetsQueryParams)
    ], DescribeMatchmakingRuleSetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeMatchmakingRuleSetsHeaders)
    ], DescribeMatchmakingRuleSetsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeMatchmakingRuleSetsInput)
    ], DescribeMatchmakingRuleSetsRequest.prototype, "request", void 0);
    return DescribeMatchmakingRuleSetsRequest;
}(SpeakeasyBase));
export { DescribeMatchmakingRuleSetsRequest };
var DescribeMatchmakingRuleSetsResponse = /** @class */ (function (_super) {
    __extends(DescribeMatchmakingRuleSetsResponse, _super);
    function DescribeMatchmakingRuleSetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeMatchmakingRuleSetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeMatchmakingRuleSetsOutput)
    ], DescribeMatchmakingRuleSetsResponse.prototype, "describeMatchmakingRuleSetsOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMatchmakingRuleSetsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMatchmakingRuleSetsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMatchmakingRuleSetsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeMatchmakingRuleSetsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMatchmakingRuleSetsResponse.prototype, "unsupportedRegionException", void 0);
    return DescribeMatchmakingRuleSetsResponse;
}(SpeakeasyBase));
export { DescribeMatchmakingRuleSetsResponse };
