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
export var GetDescribeFleetHistoryActionEnum;
(function (GetDescribeFleetHistoryActionEnum) {
    GetDescribeFleetHistoryActionEnum["DescribeFleetHistory"] = "DescribeFleetHistory";
})(GetDescribeFleetHistoryActionEnum || (GetDescribeFleetHistoryActionEnum = {}));
export var GetDescribeFleetHistoryEventTypeEnum;
(function (GetDescribeFleetHistoryEventTypeEnum) {
    GetDescribeFleetHistoryEventTypeEnum["InstanceChange"] = "instance-change";
    GetDescribeFleetHistoryEventTypeEnum["FleetChange"] = "fleet-change";
    GetDescribeFleetHistoryEventTypeEnum["ServiceError"] = "service-error";
})(GetDescribeFleetHistoryEventTypeEnum || (GetDescribeFleetHistoryEventTypeEnum = {}));
export var GetDescribeFleetHistoryVersionEnum;
(function (GetDescribeFleetHistoryVersionEnum) {
    GetDescribeFleetHistoryVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDescribeFleetHistoryVersionEnum || (GetDescribeFleetHistoryVersionEnum = {}));
var GetDescribeFleetHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeFleetHistoryQueryParams, _super);
    function GetDescribeFleetHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeFleetHistoryQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDescribeFleetHistoryQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EventType" }),
        __metadata("design:type", String)
    ], GetDescribeFleetHistoryQueryParams.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FleetId" }),
        __metadata("design:type", String)
    ], GetDescribeFleetHistoryQueryParams.prototype, "fleetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetDescribeFleetHistoryQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeFleetHistoryQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" }),
        __metadata("design:type", Date)
    ], GetDescribeFleetHistoryQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeFleetHistoryQueryParams.prototype, "version", void 0);
    return GetDescribeFleetHistoryQueryParams;
}(SpeakeasyBase));
export { GetDescribeFleetHistoryQueryParams };
var GetDescribeFleetHistoryHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeFleetHistoryHeaders, _super);
    function GetDescribeFleetHistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeFleetHistoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeFleetHistoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeFleetHistoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeFleetHistoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeFleetHistoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeFleetHistoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeFleetHistoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeFleetHistoryHeaders;
}(SpeakeasyBase));
export { GetDescribeFleetHistoryHeaders };
var GetDescribeFleetHistoryRequest = /** @class */ (function (_super) {
    __extends(GetDescribeFleetHistoryRequest, _super);
    function GetDescribeFleetHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeFleetHistoryQueryParams)
    ], GetDescribeFleetHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeFleetHistoryHeaders)
    ], GetDescribeFleetHistoryRequest.prototype, "headers", void 0);
    return GetDescribeFleetHistoryRequest;
}(SpeakeasyBase));
export { GetDescribeFleetHistoryRequest };
var GetDescribeFleetHistoryResponse = /** @class */ (function (_super) {
    __extends(GetDescribeFleetHistoryResponse, _super);
    function GetDescribeFleetHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeFleetHistoryResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeFleetHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeFleetHistoryResponse.prototype, "statusCode", void 0);
    return GetDescribeFleetHistoryResponse;
}(SpeakeasyBase));
export { GetDescribeFleetHistoryResponse };
