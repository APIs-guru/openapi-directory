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
export var GetDescribeScheduledActionsActionEnum;
(function (GetDescribeScheduledActionsActionEnum) {
    GetDescribeScheduledActionsActionEnum["DescribeScheduledActions"] = "DescribeScheduledActions";
})(GetDescribeScheduledActionsActionEnum || (GetDescribeScheduledActionsActionEnum = {}));
export var GetDescribeScheduledActionsVersionEnum;
(function (GetDescribeScheduledActionsVersionEnum) {
    GetDescribeScheduledActionsVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeScheduledActionsVersionEnum || (GetDescribeScheduledActionsVersionEnum = {}));
var GetDescribeScheduledActionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeScheduledActionsQueryParams, _super);
    function GetDescribeScheduledActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeScheduledActionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeScheduledActionsQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndTime" }),
        __metadata("design:type", Date)
    ], GetDescribeScheduledActionsQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeScheduledActionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeScheduledActionsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ScheduledActionNames" }),
        __metadata("design:type", Array)
    ], GetDescribeScheduledActionsQueryParams.prototype, "scheduledActionNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" }),
        __metadata("design:type", Date)
    ], GetDescribeScheduledActionsQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeScheduledActionsQueryParams.prototype, "version", void 0);
    return GetDescribeScheduledActionsQueryParams;
}(SpeakeasyBase));
export { GetDescribeScheduledActionsQueryParams };
var GetDescribeScheduledActionsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeScheduledActionsHeaders, _super);
    function GetDescribeScheduledActionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeScheduledActionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeScheduledActionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeScheduledActionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeScheduledActionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeScheduledActionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeScheduledActionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeScheduledActionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeScheduledActionsHeaders;
}(SpeakeasyBase));
export { GetDescribeScheduledActionsHeaders };
var GetDescribeScheduledActionsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeScheduledActionsRequest, _super);
    function GetDescribeScheduledActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeScheduledActionsQueryParams)
    ], GetDescribeScheduledActionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeScheduledActionsHeaders)
    ], GetDescribeScheduledActionsRequest.prototype, "headers", void 0);
    return GetDescribeScheduledActionsRequest;
}(SpeakeasyBase));
export { GetDescribeScheduledActionsRequest };
var GetDescribeScheduledActionsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeScheduledActionsResponse, _super);
    function GetDescribeScheduledActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeScheduledActionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeScheduledActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeScheduledActionsResponse.prototype, "statusCode", void 0);
    return GetDescribeScheduledActionsResponse;
}(SpeakeasyBase));
export { GetDescribeScheduledActionsResponse };
