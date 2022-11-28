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
var DescribeConfigRuleEvaluationStatusQueryParams = /** @class */ (function (_super) {
    __extends(DescribeConfigRuleEvaluationStatusQueryParams, _super);
    function DescribeConfigRuleEvaluationStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeConfigRuleEvaluationStatusQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeConfigRuleEvaluationStatusQueryParams.prototype, "nextToken", void 0);
    return DescribeConfigRuleEvaluationStatusQueryParams;
}(SpeakeasyBase));
export { DescribeConfigRuleEvaluationStatusQueryParams };
export var DescribeConfigRuleEvaluationStatusXAmzTargetEnum;
(function (DescribeConfigRuleEvaluationStatusXAmzTargetEnum) {
    DescribeConfigRuleEvaluationStatusXAmzTargetEnum["StarlingDoveServiceDescribeConfigRuleEvaluationStatus"] = "StarlingDoveService.DescribeConfigRuleEvaluationStatus";
})(DescribeConfigRuleEvaluationStatusXAmzTargetEnum || (DescribeConfigRuleEvaluationStatusXAmzTargetEnum = {}));
var DescribeConfigRuleEvaluationStatusHeaders = /** @class */ (function (_super) {
    __extends(DescribeConfigRuleEvaluationStatusHeaders, _super);
    function DescribeConfigRuleEvaluationStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeConfigRuleEvaluationStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeConfigRuleEvaluationStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeConfigRuleEvaluationStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeConfigRuleEvaluationStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeConfigRuleEvaluationStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeConfigRuleEvaluationStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeConfigRuleEvaluationStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeConfigRuleEvaluationStatusHeaders.prototype, "xAmzTarget", void 0);
    return DescribeConfigRuleEvaluationStatusHeaders;
}(SpeakeasyBase));
export { DescribeConfigRuleEvaluationStatusHeaders };
var DescribeConfigRuleEvaluationStatusRequest = /** @class */ (function (_super) {
    __extends(DescribeConfigRuleEvaluationStatusRequest, _super);
    function DescribeConfigRuleEvaluationStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeConfigRuleEvaluationStatusQueryParams)
    ], DescribeConfigRuleEvaluationStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeConfigRuleEvaluationStatusHeaders)
    ], DescribeConfigRuleEvaluationStatusRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeConfigRuleEvaluationStatusRequest)
    ], DescribeConfigRuleEvaluationStatusRequest.prototype, "request", void 0);
    return DescribeConfigRuleEvaluationStatusRequest;
}(SpeakeasyBase));
export { DescribeConfigRuleEvaluationStatusRequest };
var DescribeConfigRuleEvaluationStatusResponse = /** @class */ (function (_super) {
    __extends(DescribeConfigRuleEvaluationStatusResponse, _super);
    function DescribeConfigRuleEvaluationStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeConfigRuleEvaluationStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeConfigRuleEvaluationStatusResponse)
    ], DescribeConfigRuleEvaluationStatusResponse.prototype, "describeConfigRuleEvaluationStatusResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeConfigRuleEvaluationStatusResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeConfigRuleEvaluationStatusResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeConfigRuleEvaluationStatusResponse.prototype, "noSuchConfigRuleException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeConfigRuleEvaluationStatusResponse.prototype, "statusCode", void 0);
    return DescribeConfigRuleEvaluationStatusResponse;
}(SpeakeasyBase));
export { DescribeConfigRuleEvaluationStatusResponse };
