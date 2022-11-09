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
export var GetCreateDefaultSubnetActionEnum;
(function (GetCreateDefaultSubnetActionEnum) {
    GetCreateDefaultSubnetActionEnum["CreateDefaultSubnet"] = "CreateDefaultSubnet";
})(GetCreateDefaultSubnetActionEnum || (GetCreateDefaultSubnetActionEnum = {}));
export var GetCreateDefaultSubnetVersionEnum;
(function (GetCreateDefaultSubnetVersionEnum) {
    GetCreateDefaultSubnetVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCreateDefaultSubnetVersionEnum || (GetCreateDefaultSubnetVersionEnum = {}));
var GetCreateDefaultSubnetQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateDefaultSubnetQueryParams, _super);
    function GetCreateDefaultSubnetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateDefaultSubnetQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], GetCreateDefaultSubnetQueryParams.prototype, "availabilityZone", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCreateDefaultSubnetQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateDefaultSubnetQueryParams.prototype, "version", void 0);
    return GetCreateDefaultSubnetQueryParams;
}(SpeakeasyBase));
export { GetCreateDefaultSubnetQueryParams };
var GetCreateDefaultSubnetHeaders = /** @class */ (function (_super) {
    __extends(GetCreateDefaultSubnetHeaders, _super);
    function GetCreateDefaultSubnetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateDefaultSubnetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateDefaultSubnetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateDefaultSubnetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateDefaultSubnetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateDefaultSubnetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateDefaultSubnetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateDefaultSubnetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateDefaultSubnetHeaders;
}(SpeakeasyBase));
export { GetCreateDefaultSubnetHeaders };
var GetCreateDefaultSubnetRequest = /** @class */ (function (_super) {
    __extends(GetCreateDefaultSubnetRequest, _super);
    function GetCreateDefaultSubnetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateDefaultSubnetQueryParams)
    ], GetCreateDefaultSubnetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateDefaultSubnetHeaders)
    ], GetCreateDefaultSubnetRequest.prototype, "headers", void 0);
    return GetCreateDefaultSubnetRequest;
}(SpeakeasyBase));
export { GetCreateDefaultSubnetRequest };
var GetCreateDefaultSubnetResponse = /** @class */ (function (_super) {
    __extends(GetCreateDefaultSubnetResponse, _super);
    function GetCreateDefaultSubnetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateDefaultSubnetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateDefaultSubnetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateDefaultSubnetResponse.prototype, "statusCode", void 0);
    return GetCreateDefaultSubnetResponse;
}(SpeakeasyBase));
export { GetCreateDefaultSubnetResponse };
