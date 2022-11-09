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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var GetPurchaseReservedInstancesOfferingActionEnum;
(function (GetPurchaseReservedInstancesOfferingActionEnum) {
    GetPurchaseReservedInstancesOfferingActionEnum["PurchaseReservedInstancesOffering"] = "PurchaseReservedInstancesOffering";
})(GetPurchaseReservedInstancesOfferingActionEnum || (GetPurchaseReservedInstancesOfferingActionEnum = {}));
// GetPurchaseReservedInstancesOfferingLimitPrice
/**
 * Describes the limit price of a Reserved Instance offering.
**/
var GetPurchaseReservedInstancesOfferingLimitPrice = /** @class */ (function (_super) {
    __extends(GetPurchaseReservedInstancesOfferingLimitPrice, _super);
    function GetPurchaseReservedInstancesOfferingLimitPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=Amount" }),
        __metadata("design:type", Number)
    ], GetPurchaseReservedInstancesOfferingLimitPrice.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=CurrencyCode" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedInstancesOfferingLimitPrice.prototype, "currencyCode", void 0);
    return GetPurchaseReservedInstancesOfferingLimitPrice;
}(SpeakeasyBase));
export { GetPurchaseReservedInstancesOfferingLimitPrice };
export var GetPurchaseReservedInstancesOfferingVersionEnum;
(function (GetPurchaseReservedInstancesOfferingVersionEnum) {
    GetPurchaseReservedInstancesOfferingVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetPurchaseReservedInstancesOfferingVersionEnum || (GetPurchaseReservedInstancesOfferingVersionEnum = {}));
var GetPurchaseReservedInstancesOfferingQueryParams = /** @class */ (function (_super) {
    __extends(GetPurchaseReservedInstancesOfferingQueryParams, _super);
    function GetPurchaseReservedInstancesOfferingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedInstancesOfferingQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetPurchaseReservedInstancesOfferingQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceCount" }),
        __metadata("design:type", Number)
    ], GetPurchaseReservedInstancesOfferingQueryParams.prototype, "instanceCount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LimitPrice" }),
        __metadata("design:type", GetPurchaseReservedInstancesOfferingLimitPrice)
    ], GetPurchaseReservedInstancesOfferingQueryParams.prototype, "limitPrice", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PurchaseTime" }),
        __metadata("design:type", Date)
    ], GetPurchaseReservedInstancesOfferingQueryParams.prototype, "purchaseTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ReservedInstancesOfferingId" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedInstancesOfferingQueryParams.prototype, "reservedInstancesOfferingId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedInstancesOfferingQueryParams.prototype, "version", void 0);
    return GetPurchaseReservedInstancesOfferingQueryParams;
}(SpeakeasyBase));
export { GetPurchaseReservedInstancesOfferingQueryParams };
var GetPurchaseReservedInstancesOfferingHeaders = /** @class */ (function (_super) {
    __extends(GetPurchaseReservedInstancesOfferingHeaders, _super);
    function GetPurchaseReservedInstancesOfferingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedInstancesOfferingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedInstancesOfferingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedInstancesOfferingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedInstancesOfferingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedInstancesOfferingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedInstancesOfferingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedInstancesOfferingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPurchaseReservedInstancesOfferingHeaders;
}(SpeakeasyBase));
export { GetPurchaseReservedInstancesOfferingHeaders };
var GetPurchaseReservedInstancesOfferingRequest = /** @class */ (function (_super) {
    __extends(GetPurchaseReservedInstancesOfferingRequest, _super);
    function GetPurchaseReservedInstancesOfferingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPurchaseReservedInstancesOfferingQueryParams)
    ], GetPurchaseReservedInstancesOfferingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPurchaseReservedInstancesOfferingHeaders)
    ], GetPurchaseReservedInstancesOfferingRequest.prototype, "headers", void 0);
    return GetPurchaseReservedInstancesOfferingRequest;
}(SpeakeasyBase));
export { GetPurchaseReservedInstancesOfferingRequest };
var GetPurchaseReservedInstancesOfferingResponse = /** @class */ (function (_super) {
    __extends(GetPurchaseReservedInstancesOfferingResponse, _super);
    function GetPurchaseReservedInstancesOfferingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPurchaseReservedInstancesOfferingResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPurchaseReservedInstancesOfferingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPurchaseReservedInstancesOfferingResponse.prototype, "statusCode", void 0);
    return GetPurchaseReservedInstancesOfferingResponse;
}(SpeakeasyBase));
export { GetPurchaseReservedInstancesOfferingResponse };
