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
export var GetPutScheduledUpdateGroupActionActionEnum;
(function (GetPutScheduledUpdateGroupActionActionEnum) {
    GetPutScheduledUpdateGroupActionActionEnum["PutScheduledUpdateGroupAction"] = "PutScheduledUpdateGroupAction";
})(GetPutScheduledUpdateGroupActionActionEnum || (GetPutScheduledUpdateGroupActionActionEnum = {}));
export var GetPutScheduledUpdateGroupActionVersionEnum;
(function (GetPutScheduledUpdateGroupActionVersionEnum) {
    GetPutScheduledUpdateGroupActionVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetPutScheduledUpdateGroupActionVersionEnum || (GetPutScheduledUpdateGroupActionVersionEnum = {}));
var GetPutScheduledUpdateGroupActionQueryParams = /** @class */ (function (_super) {
    __extends(GetPutScheduledUpdateGroupActionQueryParams, _super);
    function GetPutScheduledUpdateGroupActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DesiredCapacity" }),
        __metadata("design:type", Number)
    ], GetPutScheduledUpdateGroupActionQueryParams.prototype, "desiredCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndTime" }),
        __metadata("design:type", Date)
    ], GetPutScheduledUpdateGroupActionQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxSize" }),
        __metadata("design:type", Number)
    ], GetPutScheduledUpdateGroupActionQueryParams.prototype, "maxSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MinSize" }),
        __metadata("design:type", Number)
    ], GetPutScheduledUpdateGroupActionQueryParams.prototype, "minSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Recurrence" }),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionQueryParams.prototype, "recurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ScheduledActionName" }),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionQueryParams.prototype, "scheduledActionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" }),
        __metadata("design:type", Date)
    ], GetPutScheduledUpdateGroupActionQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Time" }),
        __metadata("design:type", Date)
    ], GetPutScheduledUpdateGroupActionQueryParams.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TimeZone" }),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionQueryParams.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionQueryParams.prototype, "version", void 0);
    return GetPutScheduledUpdateGroupActionQueryParams;
}(SpeakeasyBase));
export { GetPutScheduledUpdateGroupActionQueryParams };
var GetPutScheduledUpdateGroupActionHeaders = /** @class */ (function (_super) {
    __extends(GetPutScheduledUpdateGroupActionHeaders, _super);
    function GetPutScheduledUpdateGroupActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPutScheduledUpdateGroupActionHeaders;
}(SpeakeasyBase));
export { GetPutScheduledUpdateGroupActionHeaders };
var GetPutScheduledUpdateGroupActionRequest = /** @class */ (function (_super) {
    __extends(GetPutScheduledUpdateGroupActionRequest, _super);
    function GetPutScheduledUpdateGroupActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPutScheduledUpdateGroupActionQueryParams)
    ], GetPutScheduledUpdateGroupActionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPutScheduledUpdateGroupActionHeaders)
    ], GetPutScheduledUpdateGroupActionRequest.prototype, "headers", void 0);
    return GetPutScheduledUpdateGroupActionRequest;
}(SpeakeasyBase));
export { GetPutScheduledUpdateGroupActionRequest };
var GetPutScheduledUpdateGroupActionResponse = /** @class */ (function (_super) {
    __extends(GetPutScheduledUpdateGroupActionResponse, _super);
    function GetPutScheduledUpdateGroupActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPutScheduledUpdateGroupActionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPutScheduledUpdateGroupActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPutScheduledUpdateGroupActionResponse.prototype, "statusCode", void 0);
    return GetPutScheduledUpdateGroupActionResponse;
}(SpeakeasyBase));
export { GetPutScheduledUpdateGroupActionResponse };
