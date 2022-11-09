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
export var GetModifyDefaultCreditSpecificationActionEnum;
(function (GetModifyDefaultCreditSpecificationActionEnum) {
    GetModifyDefaultCreditSpecificationActionEnum["ModifyDefaultCreditSpecification"] = "ModifyDefaultCreditSpecification";
})(GetModifyDefaultCreditSpecificationActionEnum || (GetModifyDefaultCreditSpecificationActionEnum = {}));
export var GetModifyDefaultCreditSpecificationInstanceFamilyEnum;
(function (GetModifyDefaultCreditSpecificationInstanceFamilyEnum) {
    GetModifyDefaultCreditSpecificationInstanceFamilyEnum["T2"] = "t2";
    GetModifyDefaultCreditSpecificationInstanceFamilyEnum["T3"] = "t3";
    GetModifyDefaultCreditSpecificationInstanceFamilyEnum["T3a"] = "t3a";
    GetModifyDefaultCreditSpecificationInstanceFamilyEnum["T4g"] = "t4g";
})(GetModifyDefaultCreditSpecificationInstanceFamilyEnum || (GetModifyDefaultCreditSpecificationInstanceFamilyEnum = {}));
export var GetModifyDefaultCreditSpecificationVersionEnum;
(function (GetModifyDefaultCreditSpecificationVersionEnum) {
    GetModifyDefaultCreditSpecificationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyDefaultCreditSpecificationVersionEnum || (GetModifyDefaultCreditSpecificationVersionEnum = {}));
var GetModifyDefaultCreditSpecificationQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyDefaultCreditSpecificationQueryParams, _super);
    function GetModifyDefaultCreditSpecificationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyDefaultCreditSpecificationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CpuCredits" }),
        __metadata("design:type", String)
    ], GetModifyDefaultCreditSpecificationQueryParams.prototype, "cpuCredits", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyDefaultCreditSpecificationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceFamily" }),
        __metadata("design:type", String)
    ], GetModifyDefaultCreditSpecificationQueryParams.prototype, "instanceFamily", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyDefaultCreditSpecificationQueryParams.prototype, "version", void 0);
    return GetModifyDefaultCreditSpecificationQueryParams;
}(SpeakeasyBase));
export { GetModifyDefaultCreditSpecificationQueryParams };
var GetModifyDefaultCreditSpecificationHeaders = /** @class */ (function (_super) {
    __extends(GetModifyDefaultCreditSpecificationHeaders, _super);
    function GetModifyDefaultCreditSpecificationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyDefaultCreditSpecificationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyDefaultCreditSpecificationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyDefaultCreditSpecificationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyDefaultCreditSpecificationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyDefaultCreditSpecificationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyDefaultCreditSpecificationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyDefaultCreditSpecificationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyDefaultCreditSpecificationHeaders;
}(SpeakeasyBase));
export { GetModifyDefaultCreditSpecificationHeaders };
var GetModifyDefaultCreditSpecificationRequest = /** @class */ (function (_super) {
    __extends(GetModifyDefaultCreditSpecificationRequest, _super);
    function GetModifyDefaultCreditSpecificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyDefaultCreditSpecificationQueryParams)
    ], GetModifyDefaultCreditSpecificationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyDefaultCreditSpecificationHeaders)
    ], GetModifyDefaultCreditSpecificationRequest.prototype, "headers", void 0);
    return GetModifyDefaultCreditSpecificationRequest;
}(SpeakeasyBase));
export { GetModifyDefaultCreditSpecificationRequest };
var GetModifyDefaultCreditSpecificationResponse = /** @class */ (function (_super) {
    __extends(GetModifyDefaultCreditSpecificationResponse, _super);
    function GetModifyDefaultCreditSpecificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyDefaultCreditSpecificationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyDefaultCreditSpecificationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyDefaultCreditSpecificationResponse.prototype, "statusCode", void 0);
    return GetModifyDefaultCreditSpecificationResponse;
}(SpeakeasyBase));
export { GetModifyDefaultCreditSpecificationResponse };
