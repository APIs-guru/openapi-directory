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
var DescribeBudgetActionsForBudgetQueryParams = /** @class */ (function (_super) {
    __extends(DescribeBudgetActionsForBudgetQueryParams, _super);
    function DescribeBudgetActionsForBudgetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeBudgetActionsForBudgetQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeBudgetActionsForBudgetQueryParams.prototype, "nextToken", void 0);
    return DescribeBudgetActionsForBudgetQueryParams;
}(SpeakeasyBase));
export { DescribeBudgetActionsForBudgetQueryParams };
export var DescribeBudgetActionsForBudgetXAmzTargetEnum;
(function (DescribeBudgetActionsForBudgetXAmzTargetEnum) {
    DescribeBudgetActionsForBudgetXAmzTargetEnum["AwsBudgetServiceGatewayDescribeBudgetActionsForBudget"] = "AWSBudgetServiceGateway.DescribeBudgetActionsForBudget";
})(DescribeBudgetActionsForBudgetXAmzTargetEnum || (DescribeBudgetActionsForBudgetXAmzTargetEnum = {}));
var DescribeBudgetActionsForBudgetHeaders = /** @class */ (function (_super) {
    __extends(DescribeBudgetActionsForBudgetHeaders, _super);
    function DescribeBudgetActionsForBudgetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeBudgetActionsForBudgetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeBudgetActionsForBudgetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeBudgetActionsForBudgetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeBudgetActionsForBudgetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeBudgetActionsForBudgetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeBudgetActionsForBudgetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeBudgetActionsForBudgetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeBudgetActionsForBudgetHeaders.prototype, "xAmzTarget", void 0);
    return DescribeBudgetActionsForBudgetHeaders;
}(SpeakeasyBase));
export { DescribeBudgetActionsForBudgetHeaders };
var DescribeBudgetActionsForBudgetRequest = /** @class */ (function (_super) {
    __extends(DescribeBudgetActionsForBudgetRequest, _super);
    function DescribeBudgetActionsForBudgetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeBudgetActionsForBudgetQueryParams)
    ], DescribeBudgetActionsForBudgetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeBudgetActionsForBudgetHeaders)
    ], DescribeBudgetActionsForBudgetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeBudgetActionsForBudgetRequest)
    ], DescribeBudgetActionsForBudgetRequest.prototype, "request", void 0);
    return DescribeBudgetActionsForBudgetRequest;
}(SpeakeasyBase));
export { DescribeBudgetActionsForBudgetRequest };
var DescribeBudgetActionsForBudgetResponse = /** @class */ (function (_super) {
    __extends(DescribeBudgetActionsForBudgetResponse, _super);
    function DescribeBudgetActionsForBudgetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeBudgetActionsForBudgetResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeBudgetActionsForBudgetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeBudgetActionsForBudgetResponse)
    ], DescribeBudgetActionsForBudgetResponse.prototype, "describeBudgetActionsForBudgetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeBudgetActionsForBudgetResponse.prototype, "internalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeBudgetActionsForBudgetResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeBudgetActionsForBudgetResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeBudgetActionsForBudgetResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeBudgetActionsForBudgetResponse.prototype, "statusCode", void 0);
    return DescribeBudgetActionsForBudgetResponse;
}(SpeakeasyBase));
export { DescribeBudgetActionsForBudgetResponse };
