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
export var GetGetShippingLabelActionEnum;
(function (GetGetShippingLabelActionEnum) {
    GetGetShippingLabelActionEnum["GetShippingLabel"] = "GetShippingLabel";
})(GetGetShippingLabelActionEnum || (GetGetShippingLabelActionEnum = {}));
export var GetGetShippingLabelOperationEnum;
(function (GetGetShippingLabelOperationEnum) {
    GetGetShippingLabelOperationEnum["GetShippingLabel"] = "GetShippingLabel";
})(GetGetShippingLabelOperationEnum || (GetGetShippingLabelOperationEnum = {}));
export var GetGetShippingLabelVersionEnum;
(function (GetGetShippingLabelVersionEnum) {
    GetGetShippingLabelVersionEnum["TwoThousandAndTen0601"] = "2010-06-01";
})(GetGetShippingLabelVersionEnum || (GetGetShippingLabelVersionEnum = {}));
var GetGetShippingLabelQueryParams = /** @class */ (function (_super) {
    __extends(GetGetShippingLabelQueryParams, _super);
    function GetGetShippingLabelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=APIVersion" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "awsAccessKeyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Operation" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "operation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Signature" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "signature", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "signatureMethod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "signatureVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Timestamp" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "timestamp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "city", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=company" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "company", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=jobIds" }),
        __metadata("design:type", Array)
    ], GetGetShippingLabelQueryParams.prototype, "jobIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=phoneNumber" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=postalCode" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "postalCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=stateOrProvince" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "stateOrProvince", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=street1" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "street1", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=street2" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "street2", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=street3" }),
        __metadata("design:type", String)
    ], GetGetShippingLabelQueryParams.prototype, "street3", void 0);
    return GetGetShippingLabelQueryParams;
}(SpeakeasyBase));
export { GetGetShippingLabelQueryParams };
var GetGetShippingLabelRequest = /** @class */ (function (_super) {
    __extends(GetGetShippingLabelRequest, _super);
    function GetGetShippingLabelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetShippingLabelQueryParams)
    ], GetGetShippingLabelRequest.prototype, "queryParams", void 0);
    return GetGetShippingLabelRequest;
}(SpeakeasyBase));
export { GetGetShippingLabelRequest };
var GetGetShippingLabelResponse = /** @class */ (function (_super) {
    __extends(GetGetShippingLabelResponse, _super);
    function GetGetShippingLabelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetShippingLabelResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetShippingLabelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetShippingLabelResponse.prototype, "statusCode", void 0);
    return GetGetShippingLabelResponse;
}(SpeakeasyBase));
export { GetGetShippingLabelResponse };
