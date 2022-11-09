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
export var GetDeleteTransitGatewayVpcAttachmentActionEnum;
(function (GetDeleteTransitGatewayVpcAttachmentActionEnum) {
    GetDeleteTransitGatewayVpcAttachmentActionEnum["DeleteTransitGatewayVpcAttachment"] = "DeleteTransitGatewayVpcAttachment";
})(GetDeleteTransitGatewayVpcAttachmentActionEnum || (GetDeleteTransitGatewayVpcAttachmentActionEnum = {}));
export var GetDeleteTransitGatewayVpcAttachmentVersionEnum;
(function (GetDeleteTransitGatewayVpcAttachmentVersionEnum) {
    GetDeleteTransitGatewayVpcAttachmentVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteTransitGatewayVpcAttachmentVersionEnum || (GetDeleteTransitGatewayVpcAttachmentVersionEnum = {}));
var GetDeleteTransitGatewayVpcAttachmentQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayVpcAttachmentQueryParams, _super);
    function GetDeleteTransitGatewayVpcAttachmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayVpcAttachmentQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteTransitGatewayVpcAttachmentQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayVpcAttachmentQueryParams.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayVpcAttachmentQueryParams.prototype, "version", void 0);
    return GetDeleteTransitGatewayVpcAttachmentQueryParams;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayVpcAttachmentQueryParams };
var GetDeleteTransitGatewayVpcAttachmentHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayVpcAttachmentHeaders, _super);
    function GetDeleteTransitGatewayVpcAttachmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayVpcAttachmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayVpcAttachmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayVpcAttachmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayVpcAttachmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteTransitGatewayVpcAttachmentHeaders;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayVpcAttachmentHeaders };
var GetDeleteTransitGatewayVpcAttachmentRequest = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayVpcAttachmentRequest, _super);
    function GetDeleteTransitGatewayVpcAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTransitGatewayVpcAttachmentQueryParams)
    ], GetDeleteTransitGatewayVpcAttachmentRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteTransitGatewayVpcAttachmentHeaders)
    ], GetDeleteTransitGatewayVpcAttachmentRequest.prototype, "headers", void 0);
    return GetDeleteTransitGatewayVpcAttachmentRequest;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayVpcAttachmentRequest };
var GetDeleteTransitGatewayVpcAttachmentResponse = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayVpcAttachmentResponse, _super);
    function GetDeleteTransitGatewayVpcAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteTransitGatewayVpcAttachmentResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayVpcAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteTransitGatewayVpcAttachmentResponse.prototype, "statusCode", void 0);
    return GetDeleteTransitGatewayVpcAttachmentResponse;
}(SpeakeasyBase));
export { GetDeleteTransitGatewayVpcAttachmentResponse };
