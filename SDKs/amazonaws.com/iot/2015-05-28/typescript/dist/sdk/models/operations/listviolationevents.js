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
export var ListViolationEventsBehaviorCriteriaTypeEnum;
(function (ListViolationEventsBehaviorCriteriaTypeEnum) {
    ListViolationEventsBehaviorCriteriaTypeEnum["Static"] = "STATIC";
    ListViolationEventsBehaviorCriteriaTypeEnum["Statistical"] = "STATISTICAL";
    ListViolationEventsBehaviorCriteriaTypeEnum["MachineLearning"] = "MACHINE_LEARNING";
})(ListViolationEventsBehaviorCriteriaTypeEnum || (ListViolationEventsBehaviorCriteriaTypeEnum = {}));
var ListViolationEventsQueryParams = /** @class */ (function (_super) {
    __extends(ListViolationEventsQueryParams, _super);
    function ListViolationEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=behaviorCriteriaType" }),
        __metadata("design:type", String)
    ], ListViolationEventsQueryParams.prototype, "behaviorCriteriaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", Date)
    ], ListViolationEventsQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=listSuppressedAlerts" }),
        __metadata("design:type", Boolean)
    ], ListViolationEventsQueryParams.prototype, "listSuppressedAlerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListViolationEventsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListViolationEventsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=securityProfileName" }),
        __metadata("design:type", String)
    ], ListViolationEventsQueryParams.prototype, "securityProfileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", Date)
    ], ListViolationEventsQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=thingName" }),
        __metadata("design:type", String)
    ], ListViolationEventsQueryParams.prototype, "thingName", void 0);
    return ListViolationEventsQueryParams;
}(SpeakeasyBase));
export { ListViolationEventsQueryParams };
var ListViolationEventsHeaders = /** @class */ (function (_super) {
    __extends(ListViolationEventsHeaders, _super);
    function ListViolationEventsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListViolationEventsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListViolationEventsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListViolationEventsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListViolationEventsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListViolationEventsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListViolationEventsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListViolationEventsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListViolationEventsHeaders;
}(SpeakeasyBase));
export { ListViolationEventsHeaders };
var ListViolationEventsRequest = /** @class */ (function (_super) {
    __extends(ListViolationEventsRequest, _super);
    function ListViolationEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListViolationEventsQueryParams)
    ], ListViolationEventsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListViolationEventsHeaders)
    ], ListViolationEventsRequest.prototype, "headers", void 0);
    return ListViolationEventsRequest;
}(SpeakeasyBase));
export { ListViolationEventsRequest };
var ListViolationEventsResponse = /** @class */ (function (_super) {
    __extends(ListViolationEventsResponse, _super);
    function ListViolationEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListViolationEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListViolationEventsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListViolationEventsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListViolationEventsResponse)
    ], ListViolationEventsResponse.prototype, "listViolationEventsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListViolationEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListViolationEventsResponse.prototype, "throttlingException", void 0);
    return ListViolationEventsResponse;
}(SpeakeasyBase));
export { ListViolationEventsResponse };
