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
export var GetDescribeSpotFleetRequestHistoryActionEnum;
(function (GetDescribeSpotFleetRequestHistoryActionEnum) {
    GetDescribeSpotFleetRequestHistoryActionEnum["DescribeSpotFleetRequestHistory"] = "DescribeSpotFleetRequestHistory";
})(GetDescribeSpotFleetRequestHistoryActionEnum || (GetDescribeSpotFleetRequestHistoryActionEnum = {}));
export var GetDescribeSpotFleetRequestHistoryEventTypeEnum;
(function (GetDescribeSpotFleetRequestHistoryEventTypeEnum) {
    GetDescribeSpotFleetRequestHistoryEventTypeEnum["InstanceChange"] = "instanceChange";
    GetDescribeSpotFleetRequestHistoryEventTypeEnum["FleetRequestChange"] = "fleetRequestChange";
    GetDescribeSpotFleetRequestHistoryEventTypeEnum["Error"] = "error";
    GetDescribeSpotFleetRequestHistoryEventTypeEnum["Information"] = "information";
})(GetDescribeSpotFleetRequestHistoryEventTypeEnum || (GetDescribeSpotFleetRequestHistoryEventTypeEnum = {}));
export var GetDescribeSpotFleetRequestHistoryVersionEnum;
(function (GetDescribeSpotFleetRequestHistoryVersionEnum) {
    GetDescribeSpotFleetRequestHistoryVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDescribeSpotFleetRequestHistoryVersionEnum || (GetDescribeSpotFleetRequestHistoryVersionEnum = {}));
var GetDescribeSpotFleetRequestHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeSpotFleetRequestHistoryQueryParams, _super);
    function GetDescribeSpotFleetRequestHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetRequestHistoryQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDescribeSpotFleetRequestHistoryQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EventType" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetRequestHistoryQueryParams.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetDescribeSpotFleetRequestHistoryQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetRequestHistoryQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SpotFleetRequestId" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetRequestHistoryQueryParams.prototype, "spotFleetRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" }),
        __metadata("design:type", Date)
    ], GetDescribeSpotFleetRequestHistoryQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetRequestHistoryQueryParams.prototype, "version", void 0);
    return GetDescribeSpotFleetRequestHistoryQueryParams;
}(SpeakeasyBase));
export { GetDescribeSpotFleetRequestHistoryQueryParams };
var GetDescribeSpotFleetRequestHistoryHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeSpotFleetRequestHistoryHeaders, _super);
    function GetDescribeSpotFleetRequestHistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetRequestHistoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeSpotFleetRequestHistoryHeaders;
}(SpeakeasyBase));
export { GetDescribeSpotFleetRequestHistoryHeaders };
var GetDescribeSpotFleetRequestHistoryRequest = /** @class */ (function (_super) {
    __extends(GetDescribeSpotFleetRequestHistoryRequest, _super);
    function GetDescribeSpotFleetRequestHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeSpotFleetRequestHistoryQueryParams)
    ], GetDescribeSpotFleetRequestHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeSpotFleetRequestHistoryHeaders)
    ], GetDescribeSpotFleetRequestHistoryRequest.prototype, "headers", void 0);
    return GetDescribeSpotFleetRequestHistoryRequest;
}(SpeakeasyBase));
export { GetDescribeSpotFleetRequestHistoryRequest };
var GetDescribeSpotFleetRequestHistoryResponse = /** @class */ (function (_super) {
    __extends(GetDescribeSpotFleetRequestHistoryResponse, _super);
    function GetDescribeSpotFleetRequestHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeSpotFleetRequestHistoryResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetRequestHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeSpotFleetRequestHistoryResponse.prototype, "statusCode", void 0);
    return GetDescribeSpotFleetRequestHistoryResponse;
}(SpeakeasyBase));
export { GetDescribeSpotFleetRequestHistoryResponse };
