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
export var GetDeleteTrafficMirrorFilterRuleActionEnum;
(function (GetDeleteTrafficMirrorFilterRuleActionEnum) {
    GetDeleteTrafficMirrorFilterRuleActionEnum["DeleteTrafficMirrorFilterRule"] = "DeleteTrafficMirrorFilterRule";
})(GetDeleteTrafficMirrorFilterRuleActionEnum || (GetDeleteTrafficMirrorFilterRuleActionEnum = {}));
export var GetDeleteTrafficMirrorFilterRuleVersionEnum;
(function (GetDeleteTrafficMirrorFilterRuleVersionEnum) {
    GetDeleteTrafficMirrorFilterRuleVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteTrafficMirrorFilterRuleVersionEnum || (GetDeleteTrafficMirrorFilterRuleVersionEnum = {}));
var GetDeleteTrafficMirrorFilterRuleQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteTrafficMirrorFilterRuleQueryParams, _super);
    function GetDeleteTrafficMirrorFilterRuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorFilterRuleQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteTrafficMirrorFilterRuleQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorFilterRuleId" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorFilterRuleQueryParams.prototype, "trafficMirrorFilterRuleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorFilterRuleQueryParams.prototype, "version", void 0);
    return GetDeleteTrafficMirrorFilterRuleQueryParams;
}(SpeakeasyBase));
export { GetDeleteTrafficMirrorFilterRuleQueryParams };
var GetDeleteTrafficMirrorFilterRuleHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteTrafficMirrorFilterRuleHeaders, _super);
    function GetDeleteTrafficMirrorFilterRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorFilterRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteTrafficMirrorFilterRuleHeaders;
}(SpeakeasyBase));
export { GetDeleteTrafficMirrorFilterRuleHeaders };
var GetDeleteTrafficMirrorFilterRuleRequest = /** @class */ (function (_super) {
    __extends(GetDeleteTrafficMirrorFilterRuleRequest, _super);
    function GetDeleteTrafficMirrorFilterRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteTrafficMirrorFilterRuleQueryParams)
    ], GetDeleteTrafficMirrorFilterRuleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteTrafficMirrorFilterRuleHeaders)
    ], GetDeleteTrafficMirrorFilterRuleRequest.prototype, "headers", void 0);
    return GetDeleteTrafficMirrorFilterRuleRequest;
}(SpeakeasyBase));
export { GetDeleteTrafficMirrorFilterRuleRequest };
var GetDeleteTrafficMirrorFilterRuleResponse = /** @class */ (function (_super) {
    __extends(GetDeleteTrafficMirrorFilterRuleResponse, _super);
    function GetDeleteTrafficMirrorFilterRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteTrafficMirrorFilterRuleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteTrafficMirrorFilterRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteTrafficMirrorFilterRuleResponse.prototype, "statusCode", void 0);
    return GetDeleteTrafficMirrorFilterRuleResponse;
}(SpeakeasyBase));
export { GetDeleteTrafficMirrorFilterRuleResponse };
