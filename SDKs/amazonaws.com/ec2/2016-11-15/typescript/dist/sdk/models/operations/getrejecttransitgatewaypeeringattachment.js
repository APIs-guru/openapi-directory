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
export var GetRejectTransitGatewayPeeringAttachmentActionEnum;
(function (GetRejectTransitGatewayPeeringAttachmentActionEnum) {
    GetRejectTransitGatewayPeeringAttachmentActionEnum["RejectTransitGatewayPeeringAttachment"] = "RejectTransitGatewayPeeringAttachment";
})(GetRejectTransitGatewayPeeringAttachmentActionEnum || (GetRejectTransitGatewayPeeringAttachmentActionEnum = {}));
export var GetRejectTransitGatewayPeeringAttachmentVersionEnum;
(function (GetRejectTransitGatewayPeeringAttachmentVersionEnum) {
    GetRejectTransitGatewayPeeringAttachmentVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetRejectTransitGatewayPeeringAttachmentVersionEnum || (GetRejectTransitGatewayPeeringAttachmentVersionEnum = {}));
var GetRejectTransitGatewayPeeringAttachmentQueryParams = /** @class */ (function (_super) {
    __extends(GetRejectTransitGatewayPeeringAttachmentQueryParams, _super);
    function GetRejectTransitGatewayPeeringAttachmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayPeeringAttachmentQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetRejectTransitGatewayPeeringAttachmentQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayPeeringAttachmentQueryParams.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayPeeringAttachmentQueryParams.prototype, "version", void 0);
    return GetRejectTransitGatewayPeeringAttachmentQueryParams;
}(SpeakeasyBase));
export { GetRejectTransitGatewayPeeringAttachmentQueryParams };
var GetRejectTransitGatewayPeeringAttachmentHeaders = /** @class */ (function (_super) {
    __extends(GetRejectTransitGatewayPeeringAttachmentHeaders, _super);
    function GetRejectTransitGatewayPeeringAttachmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRejectTransitGatewayPeeringAttachmentHeaders;
}(SpeakeasyBase));
export { GetRejectTransitGatewayPeeringAttachmentHeaders };
var GetRejectTransitGatewayPeeringAttachmentRequest = /** @class */ (function (_super) {
    __extends(GetRejectTransitGatewayPeeringAttachmentRequest, _super);
    function GetRejectTransitGatewayPeeringAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRejectTransitGatewayPeeringAttachmentQueryParams)
    ], GetRejectTransitGatewayPeeringAttachmentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRejectTransitGatewayPeeringAttachmentHeaders)
    ], GetRejectTransitGatewayPeeringAttachmentRequest.prototype, "headers", void 0);
    return GetRejectTransitGatewayPeeringAttachmentRequest;
}(SpeakeasyBase));
export { GetRejectTransitGatewayPeeringAttachmentRequest };
var GetRejectTransitGatewayPeeringAttachmentResponse = /** @class */ (function (_super) {
    __extends(GetRejectTransitGatewayPeeringAttachmentResponse, _super);
    function GetRejectTransitGatewayPeeringAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRejectTransitGatewayPeeringAttachmentResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayPeeringAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRejectTransitGatewayPeeringAttachmentResponse.prototype, "statusCode", void 0);
    return GetRejectTransitGatewayPeeringAttachmentResponse;
}(SpeakeasyBase));
export { GetRejectTransitGatewayPeeringAttachmentResponse };
