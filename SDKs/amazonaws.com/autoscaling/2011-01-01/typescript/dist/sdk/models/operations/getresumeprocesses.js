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
export var GetResumeProcessesActionEnum;
(function (GetResumeProcessesActionEnum) {
    GetResumeProcessesActionEnum["ResumeProcesses"] = "ResumeProcesses";
})(GetResumeProcessesActionEnum || (GetResumeProcessesActionEnum = {}));
export var GetResumeProcessesVersionEnum;
(function (GetResumeProcessesVersionEnum) {
    GetResumeProcessesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetResumeProcessesVersionEnum || (GetResumeProcessesVersionEnum = {}));
var GetResumeProcessesQueryParams = /** @class */ (function (_super) {
    __extends(GetResumeProcessesQueryParams, _super);
    function GetResumeProcessesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetResumeProcessesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetResumeProcessesQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ScalingProcesses" }),
        __metadata("design:type", Array)
    ], GetResumeProcessesQueryParams.prototype, "scalingProcesses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetResumeProcessesQueryParams.prototype, "version", void 0);
    return GetResumeProcessesQueryParams;
}(SpeakeasyBase));
export { GetResumeProcessesQueryParams };
var GetResumeProcessesHeaders = /** @class */ (function (_super) {
    __extends(GetResumeProcessesHeaders, _super);
    function GetResumeProcessesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResumeProcessesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResumeProcessesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResumeProcessesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResumeProcessesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResumeProcessesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResumeProcessesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResumeProcessesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResumeProcessesHeaders;
}(SpeakeasyBase));
export { GetResumeProcessesHeaders };
var GetResumeProcessesRequest = /** @class */ (function (_super) {
    __extends(GetResumeProcessesRequest, _super);
    function GetResumeProcessesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResumeProcessesQueryParams)
    ], GetResumeProcessesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResumeProcessesHeaders)
    ], GetResumeProcessesRequest.prototype, "headers", void 0);
    return GetResumeProcessesRequest;
}(SpeakeasyBase));
export { GetResumeProcessesRequest };
var GetResumeProcessesResponse = /** @class */ (function (_super) {
    __extends(GetResumeProcessesResponse, _super);
    function GetResumeProcessesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetResumeProcessesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResumeProcessesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResumeProcessesResponse.prototype, "statusCode", void 0);
    return GetResumeProcessesResponse;
}(SpeakeasyBase));
export { GetResumeProcessesResponse };
