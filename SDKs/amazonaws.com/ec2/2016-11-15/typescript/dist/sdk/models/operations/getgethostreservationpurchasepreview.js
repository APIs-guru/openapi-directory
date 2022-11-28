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
export var GetGetHostReservationPurchasePreviewActionEnum;
(function (GetGetHostReservationPurchasePreviewActionEnum) {
    GetGetHostReservationPurchasePreviewActionEnum["GetHostReservationPurchasePreview"] = "GetHostReservationPurchasePreview";
})(GetGetHostReservationPurchasePreviewActionEnum || (GetGetHostReservationPurchasePreviewActionEnum = {}));
export var GetGetHostReservationPurchasePreviewVersionEnum;
(function (GetGetHostReservationPurchasePreviewVersionEnum) {
    GetGetHostReservationPurchasePreviewVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetGetHostReservationPurchasePreviewVersionEnum || (GetGetHostReservationPurchasePreviewVersionEnum = {}));
var GetGetHostReservationPurchasePreviewQueryParams = /** @class */ (function (_super) {
    __extends(GetGetHostReservationPurchasePreviewQueryParams, _super);
    function GetGetHostReservationPurchasePreviewQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetHostReservationPurchasePreviewQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HostIdSet" }),
        __metadata("design:type", Array)
    ], GetGetHostReservationPurchasePreviewQueryParams.prototype, "hostIdSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OfferingId" }),
        __metadata("design:type", String)
    ], GetGetHostReservationPurchasePreviewQueryParams.prototype, "offeringId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetHostReservationPurchasePreviewQueryParams.prototype, "version", void 0);
    return GetGetHostReservationPurchasePreviewQueryParams;
}(SpeakeasyBase));
export { GetGetHostReservationPurchasePreviewQueryParams };
var GetGetHostReservationPurchasePreviewHeaders = /** @class */ (function (_super) {
    __extends(GetGetHostReservationPurchasePreviewHeaders, _super);
    function GetGetHostReservationPurchasePreviewHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetHostReservationPurchasePreviewHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetHostReservationPurchasePreviewHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetHostReservationPurchasePreviewHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetHostReservationPurchasePreviewHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetHostReservationPurchasePreviewHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetHostReservationPurchasePreviewHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetHostReservationPurchasePreviewHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetHostReservationPurchasePreviewHeaders;
}(SpeakeasyBase));
export { GetGetHostReservationPurchasePreviewHeaders };
var GetGetHostReservationPurchasePreviewRequest = /** @class */ (function (_super) {
    __extends(GetGetHostReservationPurchasePreviewRequest, _super);
    function GetGetHostReservationPurchasePreviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetHostReservationPurchasePreviewQueryParams)
    ], GetGetHostReservationPurchasePreviewRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetHostReservationPurchasePreviewHeaders)
    ], GetGetHostReservationPurchasePreviewRequest.prototype, "headers", void 0);
    return GetGetHostReservationPurchasePreviewRequest;
}(SpeakeasyBase));
export { GetGetHostReservationPurchasePreviewRequest };
var GetGetHostReservationPurchasePreviewResponse = /** @class */ (function (_super) {
    __extends(GetGetHostReservationPurchasePreviewResponse, _super);
    function GetGetHostReservationPurchasePreviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetHostReservationPurchasePreviewResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetHostReservationPurchasePreviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetHostReservationPurchasePreviewResponse.prototype, "statusCode", void 0);
    return GetGetHostReservationPurchasePreviewResponse;
}(SpeakeasyBase));
export { GetGetHostReservationPurchasePreviewResponse };
