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
export var GetAcceptTransitGatewayPeeringAttachmentActionEnum;
(function (GetAcceptTransitGatewayPeeringAttachmentActionEnum) {
    GetAcceptTransitGatewayPeeringAttachmentActionEnum["AcceptTransitGatewayPeeringAttachment"] = "AcceptTransitGatewayPeeringAttachment";
})(GetAcceptTransitGatewayPeeringAttachmentActionEnum || (GetAcceptTransitGatewayPeeringAttachmentActionEnum = {}));
export var GetAcceptTransitGatewayPeeringAttachmentVersionEnum;
(function (GetAcceptTransitGatewayPeeringAttachmentVersionEnum) {
    GetAcceptTransitGatewayPeeringAttachmentVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetAcceptTransitGatewayPeeringAttachmentVersionEnum || (GetAcceptTransitGatewayPeeringAttachmentVersionEnum = {}));
var GetAcceptTransitGatewayPeeringAttachmentQueryParams = /** @class */ (function (_super) {
    __extends(GetAcceptTransitGatewayPeeringAttachmentQueryParams, _super);
    function GetAcceptTransitGatewayPeeringAttachmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayPeeringAttachmentQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetAcceptTransitGatewayPeeringAttachmentQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayPeeringAttachmentQueryParams.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayPeeringAttachmentQueryParams.prototype, "version", void 0);
    return GetAcceptTransitGatewayPeeringAttachmentQueryParams;
}(SpeakeasyBase));
export { GetAcceptTransitGatewayPeeringAttachmentQueryParams };
var GetAcceptTransitGatewayPeeringAttachmentHeaders = /** @class */ (function (_super) {
    __extends(GetAcceptTransitGatewayPeeringAttachmentHeaders, _super);
    function GetAcceptTransitGatewayPeeringAttachmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAcceptTransitGatewayPeeringAttachmentHeaders;
}(SpeakeasyBase));
export { GetAcceptTransitGatewayPeeringAttachmentHeaders };
var GetAcceptTransitGatewayPeeringAttachmentRequest = /** @class */ (function (_super) {
    __extends(GetAcceptTransitGatewayPeeringAttachmentRequest, _super);
    function GetAcceptTransitGatewayPeeringAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAcceptTransitGatewayPeeringAttachmentQueryParams)
    ], GetAcceptTransitGatewayPeeringAttachmentRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAcceptTransitGatewayPeeringAttachmentHeaders)
    ], GetAcceptTransitGatewayPeeringAttachmentRequest.prototype, "headers", void 0);
    return GetAcceptTransitGatewayPeeringAttachmentRequest;
}(SpeakeasyBase));
export { GetAcceptTransitGatewayPeeringAttachmentRequest };
var GetAcceptTransitGatewayPeeringAttachmentResponse = /** @class */ (function (_super) {
    __extends(GetAcceptTransitGatewayPeeringAttachmentResponse, _super);
    function GetAcceptTransitGatewayPeeringAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAcceptTransitGatewayPeeringAttachmentResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAcceptTransitGatewayPeeringAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAcceptTransitGatewayPeeringAttachmentResponse.prototype, "statusCode", void 0);
    return GetAcceptTransitGatewayPeeringAttachmentResponse;
}(SpeakeasyBase));
export { GetAcceptTransitGatewayPeeringAttachmentResponse };
