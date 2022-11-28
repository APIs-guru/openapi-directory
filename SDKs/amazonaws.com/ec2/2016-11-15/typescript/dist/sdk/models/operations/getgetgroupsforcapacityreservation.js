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
export var GetGetGroupsForCapacityReservationActionEnum;
(function (GetGetGroupsForCapacityReservationActionEnum) {
    GetGetGroupsForCapacityReservationActionEnum["GetGroupsForCapacityReservation"] = "GetGroupsForCapacityReservation";
})(GetGetGroupsForCapacityReservationActionEnum || (GetGetGroupsForCapacityReservationActionEnum = {}));
export var GetGetGroupsForCapacityReservationVersionEnum;
(function (GetGetGroupsForCapacityReservationVersionEnum) {
    GetGetGroupsForCapacityReservationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetGetGroupsForCapacityReservationVersionEnum || (GetGetGroupsForCapacityReservationVersionEnum = {}));
var GetGetGroupsForCapacityReservationQueryParams = /** @class */ (function (_super) {
    __extends(GetGetGroupsForCapacityReservationQueryParams, _super);
    function GetGetGroupsForCapacityReservationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetGroupsForCapacityReservationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CapacityReservationId" }),
        __metadata("design:type", String)
    ], GetGetGroupsForCapacityReservationQueryParams.prototype, "capacityReservationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetGetGroupsForCapacityReservationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetGetGroupsForCapacityReservationQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetGetGroupsForCapacityReservationQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetGroupsForCapacityReservationQueryParams.prototype, "version", void 0);
    return GetGetGroupsForCapacityReservationQueryParams;
}(SpeakeasyBase));
export { GetGetGroupsForCapacityReservationQueryParams };
var GetGetGroupsForCapacityReservationHeaders = /** @class */ (function (_super) {
    __extends(GetGetGroupsForCapacityReservationHeaders, _super);
    function GetGetGroupsForCapacityReservationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetGroupsForCapacityReservationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetGroupsForCapacityReservationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetGroupsForCapacityReservationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetGroupsForCapacityReservationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetGroupsForCapacityReservationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetGroupsForCapacityReservationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetGroupsForCapacityReservationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetGroupsForCapacityReservationHeaders;
}(SpeakeasyBase));
export { GetGetGroupsForCapacityReservationHeaders };
var GetGetGroupsForCapacityReservationRequest = /** @class */ (function (_super) {
    __extends(GetGetGroupsForCapacityReservationRequest, _super);
    function GetGetGroupsForCapacityReservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetGroupsForCapacityReservationQueryParams)
    ], GetGetGroupsForCapacityReservationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetGroupsForCapacityReservationHeaders)
    ], GetGetGroupsForCapacityReservationRequest.prototype, "headers", void 0);
    return GetGetGroupsForCapacityReservationRequest;
}(SpeakeasyBase));
export { GetGetGroupsForCapacityReservationRequest };
var GetGetGroupsForCapacityReservationResponse = /** @class */ (function (_super) {
    __extends(GetGetGroupsForCapacityReservationResponse, _super);
    function GetGetGroupsForCapacityReservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetGroupsForCapacityReservationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetGroupsForCapacityReservationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetGroupsForCapacityReservationResponse.prototype, "statusCode", void 0);
    return GetGetGroupsForCapacityReservationResponse;
}(SpeakeasyBase));
export { GetGetGroupsForCapacityReservationResponse };
