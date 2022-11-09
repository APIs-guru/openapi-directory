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
export var GetDeleteTransitGatewayPeeringAttachmentActionEnum;
(function (GetDeleteTransitGatewayPeeringAttachmentActionEnum) {
    GetDeleteTransitGatewayPeeringAttachmentActionEnum["DeleteTransitGatewayPeeringAttachment"] = "DeleteTransitGatewayPeeringAttachment";
})(GetDeleteTransitGatewayPeeringAttachmentActionEnum || (GetDeleteTransitGatewayPeeringAttachmentActionEnum = {}));
export var GetDeleteTransitGatewayPeeringAttachmentVersionEnum;
(function (GetDeleteTransitGatewayPeeringAttachmentVersionEnum) {
    GetDeleteTransitGatewayPeeringAttachmentVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteTransitGatewayPeeringAttachmentVersionEnum || (GetDeleteTransitGatewayPeeringAttachmentVersionEnum = {}));
var GetDeleteTransitGatewayPeeringAttachmentQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayPeeringAttachmentQueryParams, _super);
    function GetDeleteTransitGatewayPeeringAttachmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayPeeringAttachmentQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteTransitGatewayPeeringAttachmentQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayPeeringAttachmentQueryParams.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayPeeringAttachmentQueryParams.prototype, "version", void 0);
    return GetDeleteTransitGatewayPeeringAttachmentQueryParams;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayPeeringAttachmentQueryParams };
var GetDeleteTransitGatewayPeeringAttachmentHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayPeeringAttachmentHeaders, _super);
    function GetDeleteTransitGatewayPeeringAttachmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayPeeringAttachmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteTransitGatewayPeeringAttachmentHeaders;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayPeeringAttachmentHeaders };
var GetDeleteTransitGatewayPeeringAttachmentRequest = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayPeeringAttachmentRequest, _super);
    function GetDeleteTransitGatewayPeeringAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTransitGatewayPeeringAttachmentQueryParams)
    ], GetDeleteTransitGatewayPeeringAttachmentRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTransitGatewayPeeringAttachmentHeaders)
    ], GetDeleteTransitGatewayPeeringAttachmentRequest.prototype, "headers", void 0);
    return GetDeleteTransitGatewayPeeringAttachmentRequest;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayPeeringAttachmentRequest };
var GetDeleteTransitGatewayPeeringAttachmentResponse = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayPeeringAttachmentResponse, _super);
    function GetDeleteTransitGatewayPeeringAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteTransitGatewayPeeringAttachmentResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayPeeringAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteTransitGatewayPeeringAttachmentResponse.prototype, "statusCode", void 0);
    return GetDeleteTransitGatewayPeeringAttachmentResponse;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayPeeringAttachmentResponse };
