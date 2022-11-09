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
export var GetGetDefaultCreditSpecificationActionEnum;
(function (GetGetDefaultCreditSpecificationActionEnum) {
    GetGetDefaultCreditSpecificationActionEnum["GetDefaultCreditSpecification"] = "GetDefaultCreditSpecification";
})(GetGetDefaultCreditSpecificationActionEnum || (GetGetDefaultCreditSpecificationActionEnum = {}));
export var GetGetDefaultCreditSpecificationInstanceFamilyEnum;
(function (GetGetDefaultCreditSpecificationInstanceFamilyEnum) {
    GetGetDefaultCreditSpecificationInstanceFamilyEnum["T2"] = "t2";
    GetGetDefaultCreditSpecificationInstanceFamilyEnum["T3"] = "t3";
    GetGetDefaultCreditSpecificationInstanceFamilyEnum["T3a"] = "t3a";
    GetGetDefaultCreditSpecificationInstanceFamilyEnum["T4g"] = "t4g";
})(GetGetDefaultCreditSpecificationInstanceFamilyEnum || (GetGetDefaultCreditSpecificationInstanceFamilyEnum = {}));
export var GetGetDefaultCreditSpecificationVersionEnum;
(function (GetGetDefaultCreditSpecificationVersionEnum) {
    GetGetDefaultCreditSpecificationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetGetDefaultCreditSpecificationVersionEnum || (GetGetDefaultCreditSpecificationVersionEnum = {}));
var GetGetDefaultCreditSpecificationQueryParams = /** @class */ (function (_super) {
    __extends(GetGetDefaultCreditSpecificationQueryParams, _super);
    function GetGetDefaultCreditSpecificationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetDefaultCreditSpecificationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetGetDefaultCreditSpecificationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceFamily" }),
        __metadata("design:type", String)
    ], GetGetDefaultCreditSpecificationQueryParams.prototype, "instanceFamily", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetDefaultCreditSpecificationQueryParams.prototype, "version", void 0);
    return GetGetDefaultCreditSpecificationQueryParams;
}(SpeakeasyBase));
export { GetGetDefaultCreditSpecificationQueryParams };
var GetGetDefaultCreditSpecificationHeaders = /** @class */ (function (_super) {
    __extends(GetGetDefaultCreditSpecificationHeaders, _super);
    function GetGetDefaultCreditSpecificationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetDefaultCreditSpecificationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetDefaultCreditSpecificationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetDefaultCreditSpecificationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetDefaultCreditSpecificationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetDefaultCreditSpecificationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetDefaultCreditSpecificationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetDefaultCreditSpecificationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetDefaultCreditSpecificationHeaders;
}(SpeakeasyBase));
export { GetGetDefaultCreditSpecificationHeaders };
var GetGetDefaultCreditSpecificationRequest = /** @class */ (function (_super) {
    __extends(GetGetDefaultCreditSpecificationRequest, _super);
    function GetGetDefaultCreditSpecificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetDefaultCreditSpecificationQueryParams)
    ], GetGetDefaultCreditSpecificationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetDefaultCreditSpecificationHeaders)
    ], GetGetDefaultCreditSpecificationRequest.prototype, "headers", void 0);
    return GetGetDefaultCreditSpecificationRequest;
}(SpeakeasyBase));
export { GetGetDefaultCreditSpecificationRequest };
var GetGetDefaultCreditSpecificationResponse = /** @class */ (function (_super) {
    __extends(GetGetDefaultCreditSpecificationResponse, _super);
    function GetGetDefaultCreditSpecificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetDefaultCreditSpecificationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetDefaultCreditSpecificationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetDefaultCreditSpecificationResponse.prototype, "statusCode", void 0);
    return GetGetDefaultCreditSpecificationResponse;
}(SpeakeasyBase));
export { GetGetDefaultCreditSpecificationResponse };
