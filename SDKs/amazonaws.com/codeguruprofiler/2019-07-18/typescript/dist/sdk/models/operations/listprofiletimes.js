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
var ListProfileTimesPathParams = /** @class */ (function (_super) {
    __extends(ListProfileTimesPathParams, _super);
    function ListProfileTimesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" }),
        __metadata("design:type", String)
    ], ListProfileTimesPathParams.prototype, "profilingGroupName", void 0);
    return ListProfileTimesPathParams;
}(SpeakeasyBase));
export { ListProfileTimesPathParams };
export var ListProfileTimesOrderByEnum;
(function (ListProfileTimesOrderByEnum) {
    ListProfileTimesOrderByEnum["TimestampDescending"] = "TimestampDescending";
    ListProfileTimesOrderByEnum["TimestampAscending"] = "TimestampAscending";
})(ListProfileTimesOrderByEnum || (ListProfileTimesOrderByEnum = {}));
export var ListProfileTimesPeriodEnum;
(function (ListProfileTimesPeriodEnum) {
    ListProfileTimesPeriodEnum["Pt5M"] = "PT5M";
    ListProfileTimesPeriodEnum["Pt1H"] = "PT1H";
    ListProfileTimesPeriodEnum["P1D"] = "P1D";
})(ListProfileTimesPeriodEnum || (ListProfileTimesPeriodEnum = {}));
var ListProfileTimesQueryParams = /** @class */ (function (_super) {
    __extends(ListProfileTimesQueryParams, _super);
    function ListProfileTimesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", Date)
    ], ListProfileTimesQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListProfileTimesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListProfileTimesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ListProfileTimesQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" }),
        __metadata("design:type", String)
    ], ListProfileTimesQueryParams.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", Date)
    ], ListProfileTimesQueryParams.prototype, "startTime", void 0);
    return ListProfileTimesQueryParams;
}(SpeakeasyBase));
export { ListProfileTimesQueryParams };
var ListProfileTimesHeaders = /** @class */ (function (_super) {
    __extends(ListProfileTimesHeaders, _super);
    function ListProfileTimesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListProfileTimesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListProfileTimesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListProfileTimesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListProfileTimesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListProfileTimesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListProfileTimesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListProfileTimesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListProfileTimesHeaders;
}(SpeakeasyBase));
export { ListProfileTimesHeaders };
var ListProfileTimesRequest = /** @class */ (function (_super) {
    __extends(ListProfileTimesRequest, _super);
    function ListProfileTimesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListProfileTimesPathParams)
    ], ListProfileTimesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListProfileTimesQueryParams)
    ], ListProfileTimesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListProfileTimesHeaders)
    ], ListProfileTimesRequest.prototype, "headers", void 0);
    return ListProfileTimesRequest;
}(SpeakeasyBase));
export { ListProfileTimesRequest };
var ListProfileTimesResponse = /** @class */ (function (_super) {
    __extends(ListProfileTimesResponse, _super);
    function ListProfileTimesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListProfileTimesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileTimesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListProfileTimesResponse)
    ], ListProfileTimesResponse.prototype, "listProfileTimesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileTimesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListProfileTimesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileTimesResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileTimesResponse.prototype, "validationException", void 0);
    return ListProfileTimesResponse;
}(SpeakeasyBase));
export { ListProfileTimesResponse };
