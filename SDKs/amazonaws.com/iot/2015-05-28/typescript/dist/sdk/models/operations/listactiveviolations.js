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
export var ListActiveViolationsBehaviorCriteriaTypeEnum;
(function (ListActiveViolationsBehaviorCriteriaTypeEnum) {
    ListActiveViolationsBehaviorCriteriaTypeEnum["Static"] = "STATIC";
    ListActiveViolationsBehaviorCriteriaTypeEnum["Statistical"] = "STATISTICAL";
    ListActiveViolationsBehaviorCriteriaTypeEnum["MachineLearning"] = "MACHINE_LEARNING";
})(ListActiveViolationsBehaviorCriteriaTypeEnum || (ListActiveViolationsBehaviorCriteriaTypeEnum = {}));
var ListActiveViolationsQueryParams = /** @class */ (function (_super) {
    __extends(ListActiveViolationsQueryParams, _super);
    function ListActiveViolationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=behaviorCriteriaType" }),
        __metadata("design:type", String)
    ], ListActiveViolationsQueryParams.prototype, "behaviorCriteriaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=listSuppressedAlerts" }),
        __metadata("design:type", Boolean)
    ], ListActiveViolationsQueryParams.prototype, "listSuppressedAlerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListActiveViolationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListActiveViolationsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=securityProfileName" }),
        __metadata("design:type", String)
    ], ListActiveViolationsQueryParams.prototype, "securityProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=thingName" }),
        __metadata("design:type", String)
    ], ListActiveViolationsQueryParams.prototype, "thingName", void 0);
    return ListActiveViolationsQueryParams;
}(SpeakeasyBase));
export { ListActiveViolationsQueryParams };
var ListActiveViolationsHeaders = /** @class */ (function (_super) {
    __extends(ListActiveViolationsHeaders, _super);
    function ListActiveViolationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListActiveViolationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListActiveViolationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListActiveViolationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListActiveViolationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListActiveViolationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListActiveViolationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListActiveViolationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListActiveViolationsHeaders;
}(SpeakeasyBase));
export { ListActiveViolationsHeaders };
var ListActiveViolationsRequest = /** @class */ (function (_super) {
    __extends(ListActiveViolationsRequest, _super);
    function ListActiveViolationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListActiveViolationsQueryParams)
    ], ListActiveViolationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListActiveViolationsHeaders)
    ], ListActiveViolationsRequest.prototype, "headers", void 0);
    return ListActiveViolationsRequest;
}(SpeakeasyBase));
export { ListActiveViolationsRequest };
var ListActiveViolationsResponse = /** @class */ (function (_super) {
    __extends(ListActiveViolationsResponse, _super);
    function ListActiveViolationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListActiveViolationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListActiveViolationsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListActiveViolationsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListActiveViolationsResponse)
    ], ListActiveViolationsResponse.prototype, "listActiveViolationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListActiveViolationsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListActiveViolationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListActiveViolationsResponse.prototype, "throttlingException", void 0);
    return ListActiveViolationsResponse;
}(SpeakeasyBase));
export { ListActiveViolationsResponse };
