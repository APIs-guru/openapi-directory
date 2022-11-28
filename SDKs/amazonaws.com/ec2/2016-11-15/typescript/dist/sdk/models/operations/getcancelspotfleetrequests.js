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
export var GetCancelSpotFleetRequestsActionEnum;
(function (GetCancelSpotFleetRequestsActionEnum) {
    GetCancelSpotFleetRequestsActionEnum["CancelSpotFleetRequests"] = "CancelSpotFleetRequests";
})(GetCancelSpotFleetRequestsActionEnum || (GetCancelSpotFleetRequestsActionEnum = {}));
export var GetCancelSpotFleetRequestsVersionEnum;
(function (GetCancelSpotFleetRequestsVersionEnum) {
    GetCancelSpotFleetRequestsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCancelSpotFleetRequestsVersionEnum || (GetCancelSpotFleetRequestsVersionEnum = {}));
var GetCancelSpotFleetRequestsQueryParams = /** @class */ (function (_super) {
    __extends(GetCancelSpotFleetRequestsQueryParams, _super);
    function GetCancelSpotFleetRequestsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCancelSpotFleetRequestsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCancelSpotFleetRequestsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SpotFleetRequestId" }),
        __metadata("design:type", Array)
    ], GetCancelSpotFleetRequestsQueryParams.prototype, "spotFleetRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TerminateInstances" }),
        __metadata("design:type", Boolean)
    ], GetCancelSpotFleetRequestsQueryParams.prototype, "terminateInstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCancelSpotFleetRequestsQueryParams.prototype, "version", void 0);
    return GetCancelSpotFleetRequestsQueryParams;
}(SpeakeasyBase));
export { GetCancelSpotFleetRequestsQueryParams };
var GetCancelSpotFleetRequestsHeaders = /** @class */ (function (_super) {
    __extends(GetCancelSpotFleetRequestsHeaders, _super);
    function GetCancelSpotFleetRequestsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCancelSpotFleetRequestsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCancelSpotFleetRequestsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCancelSpotFleetRequestsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCancelSpotFleetRequestsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCancelSpotFleetRequestsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCancelSpotFleetRequestsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCancelSpotFleetRequestsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCancelSpotFleetRequestsHeaders;
}(SpeakeasyBase));
export { GetCancelSpotFleetRequestsHeaders };
var GetCancelSpotFleetRequestsRequest = /** @class */ (function (_super) {
    __extends(GetCancelSpotFleetRequestsRequest, _super);
    function GetCancelSpotFleetRequestsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCancelSpotFleetRequestsQueryParams)
    ], GetCancelSpotFleetRequestsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCancelSpotFleetRequestsHeaders)
    ], GetCancelSpotFleetRequestsRequest.prototype, "headers", void 0);
    return GetCancelSpotFleetRequestsRequest;
}(SpeakeasyBase));
export { GetCancelSpotFleetRequestsRequest };
var GetCancelSpotFleetRequestsResponse = /** @class */ (function (_super) {
    __extends(GetCancelSpotFleetRequestsResponse, _super);
    function GetCancelSpotFleetRequestsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCancelSpotFleetRequestsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCancelSpotFleetRequestsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCancelSpotFleetRequestsResponse.prototype, "statusCode", void 0);
    return GetCancelSpotFleetRequestsResponse;
}(SpeakeasyBase));
export { GetCancelSpotFleetRequestsResponse };
