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
import * as shared from "../shared";
export var GetUpdateScalingParametersActionEnum;
(function (GetUpdateScalingParametersActionEnum) {
    GetUpdateScalingParametersActionEnum["UpdateScalingParameters"] = "UpdateScalingParameters";
})(GetUpdateScalingParametersActionEnum || (GetUpdateScalingParametersActionEnum = {}));
// GetUpdateScalingParametersScalingParameters
/**
 * The desired instance type and desired number of replicas of each index partition.
**/
var GetUpdateScalingParametersScalingParameters = /** @class */ (function (_super) {
    __extends(GetUpdateScalingParametersScalingParameters, _super);
    function GetUpdateScalingParametersScalingParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=DesiredInstanceType" }),
        __metadata("design:type", String)
    ], GetUpdateScalingParametersScalingParameters.prototype, "desiredInstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=DesiredPartitionCount" }),
        __metadata("design:type", Number)
    ], GetUpdateScalingParametersScalingParameters.prototype, "desiredPartitionCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, name=DesiredReplicationCount" }),
        __metadata("design:type", Number)
    ], GetUpdateScalingParametersScalingParameters.prototype, "desiredReplicationCount", void 0);
    return GetUpdateScalingParametersScalingParameters;
}(SpeakeasyBase));
export { GetUpdateScalingParametersScalingParameters };
export var GetUpdateScalingParametersVersionEnum;
(function (GetUpdateScalingParametersVersionEnum) {
    GetUpdateScalingParametersVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(GetUpdateScalingParametersVersionEnum || (GetUpdateScalingParametersVersionEnum = {}));
var GetUpdateScalingParametersQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateScalingParametersQueryParams, _super);
    function GetUpdateScalingParametersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateScalingParametersQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetUpdateScalingParametersQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ScalingParameters" }),
        __metadata("design:type", GetUpdateScalingParametersScalingParameters)
    ], GetUpdateScalingParametersQueryParams.prototype, "scalingParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateScalingParametersQueryParams.prototype, "version", void 0);
    return GetUpdateScalingParametersQueryParams;
}(SpeakeasyBase));
export { GetUpdateScalingParametersQueryParams };
var GetUpdateScalingParametersHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateScalingParametersHeaders, _super);
    function GetUpdateScalingParametersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateScalingParametersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateScalingParametersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateScalingParametersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateScalingParametersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateScalingParametersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateScalingParametersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateScalingParametersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateScalingParametersHeaders;
}(SpeakeasyBase));
export { GetUpdateScalingParametersHeaders };
var GetUpdateScalingParametersRequest = /** @class */ (function (_super) {
    __extends(GetUpdateScalingParametersRequest, _super);
    function GetUpdateScalingParametersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateScalingParametersQueryParams)
    ], GetUpdateScalingParametersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateScalingParametersHeaders)
    ], GetUpdateScalingParametersRequest.prototype, "headers", void 0);
    return GetUpdateScalingParametersRequest;
}(SpeakeasyBase));
export { GetUpdateScalingParametersRequest };
var GetUpdateScalingParametersResponse = /** @class */ (function (_super) {
    __extends(GetUpdateScalingParametersResponse, _super);
    function GetUpdateScalingParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateScalingParametersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUpdateScalingParametersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUpdateScalingParametersResponse.prototype, "statusCode", void 0);
    return GetUpdateScalingParametersResponse;
}(SpeakeasyBase));
export { GetUpdateScalingParametersResponse };
