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
export var GetCancelCapacityReservationActionEnum;
(function (GetCancelCapacityReservationActionEnum) {
    GetCancelCapacityReservationActionEnum["CancelCapacityReservation"] = "CancelCapacityReservation";
})(GetCancelCapacityReservationActionEnum || (GetCancelCapacityReservationActionEnum = {}));
export var GetCancelCapacityReservationVersionEnum;
(function (GetCancelCapacityReservationVersionEnum) {
    GetCancelCapacityReservationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCancelCapacityReservationVersionEnum || (GetCancelCapacityReservationVersionEnum = {}));
var GetCancelCapacityReservationQueryParams = /** @class */ (function (_super) {
    __extends(GetCancelCapacityReservationQueryParams, _super);
    function GetCancelCapacityReservationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCancelCapacityReservationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CapacityReservationId" }),
        __metadata("design:type", String)
    ], GetCancelCapacityReservationQueryParams.prototype, "capacityReservationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCancelCapacityReservationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCancelCapacityReservationQueryParams.prototype, "version", void 0);
    return GetCancelCapacityReservationQueryParams;
}(SpeakeasyBase));
export { GetCancelCapacityReservationQueryParams };
var GetCancelCapacityReservationHeaders = /** @class */ (function (_super) {
    __extends(GetCancelCapacityReservationHeaders, _super);
    function GetCancelCapacityReservationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCancelCapacityReservationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCancelCapacityReservationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCancelCapacityReservationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCancelCapacityReservationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCancelCapacityReservationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCancelCapacityReservationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCancelCapacityReservationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCancelCapacityReservationHeaders;
}(SpeakeasyBase));
export { GetCancelCapacityReservationHeaders };
var GetCancelCapacityReservationRequest = /** @class */ (function (_super) {
    __extends(GetCancelCapacityReservationRequest, _super);
    function GetCancelCapacityReservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCancelCapacityReservationQueryParams)
    ], GetCancelCapacityReservationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCancelCapacityReservationHeaders)
    ], GetCancelCapacityReservationRequest.prototype, "headers", void 0);
    return GetCancelCapacityReservationRequest;
}(SpeakeasyBase));
export { GetCancelCapacityReservationRequest };
var GetCancelCapacityReservationResponse = /** @class */ (function (_super) {
    __extends(GetCancelCapacityReservationResponse, _super);
    function GetCancelCapacityReservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCancelCapacityReservationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCancelCapacityReservationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCancelCapacityReservationResponse.prototype, "statusCode", void 0);
    return GetCancelCapacityReservationResponse;
}(SpeakeasyBase));
export { GetCancelCapacityReservationResponse };
