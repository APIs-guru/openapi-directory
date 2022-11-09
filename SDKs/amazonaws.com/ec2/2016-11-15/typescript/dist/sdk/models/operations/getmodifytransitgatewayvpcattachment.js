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
import * as shared from "../shared";
export var GetModifyTransitGatewayVpcAttachmentActionEnum;
(function (GetModifyTransitGatewayVpcAttachmentActionEnum) {
    GetModifyTransitGatewayVpcAttachmentActionEnum["ModifyTransitGatewayVpcAttachment"] = "ModifyTransitGatewayVpcAttachment";
})(GetModifyTransitGatewayVpcAttachmentActionEnum || (GetModifyTransitGatewayVpcAttachmentActionEnum = {}));
// GetModifyTransitGatewayVpcAttachmentOptions
/**
 * Describes the options for a VPC attachment.
**/
var GetModifyTransitGatewayVpcAttachmentOptions = /** @class */ (function (_super) {
    __extends(GetModifyTransitGatewayVpcAttachmentOptions, _super);
    function GetModifyTransitGatewayVpcAttachmentOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=ApplianceModeSupport" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentOptions.prototype, "applianceModeSupport", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=DnsSupport" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentOptions.prototype, "dnsSupport", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=Ipv6Support" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentOptions.prototype, "ipv6Support", void 0);
    return GetModifyTransitGatewayVpcAttachmentOptions;
}(SpeakeasyBase));
export { GetModifyTransitGatewayVpcAttachmentOptions };
export var GetModifyTransitGatewayVpcAttachmentVersionEnum;
(function (GetModifyTransitGatewayVpcAttachmentVersionEnum) {
    GetModifyTransitGatewayVpcAttachmentVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyTransitGatewayVpcAttachmentVersionEnum || (GetModifyTransitGatewayVpcAttachmentVersionEnum = {}));
var GetModifyTransitGatewayVpcAttachmentQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyTransitGatewayVpcAttachmentQueryParams, _super);
    function GetModifyTransitGatewayVpcAttachmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AddSubnetIds" }),
        __metadata("design:type", Array)
    ], GetModifyTransitGatewayVpcAttachmentQueryParams.prototype, "addSubnetIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyTransitGatewayVpcAttachmentQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Options" }),
        __metadata("design:type", GetModifyTransitGatewayVpcAttachmentOptions)
    ], GetModifyTransitGatewayVpcAttachmentQueryParams.prototype, "options", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RemoveSubnetIds" }),
        __metadata("design:type", Array)
    ], GetModifyTransitGatewayVpcAttachmentQueryParams.prototype, "removeSubnetIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentQueryParams.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentQueryParams.prototype, "version", void 0);
    return GetModifyTransitGatewayVpcAttachmentQueryParams;
}(SpeakeasyBase));
export { GetModifyTransitGatewayVpcAttachmentQueryParams };
var GetModifyTransitGatewayVpcAttachmentHeaders = /** @class */ (function (_super) {
    __extends(GetModifyTransitGatewayVpcAttachmentHeaders, _super);
    function GetModifyTransitGatewayVpcAttachmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyTransitGatewayVpcAttachmentHeaders;
}(SpeakeasyBase));
export { GetModifyTransitGatewayVpcAttachmentHeaders };
var GetModifyTransitGatewayVpcAttachmentRequest = /** @class */ (function (_super) {
    __extends(GetModifyTransitGatewayVpcAttachmentRequest, _super);
    function GetModifyTransitGatewayVpcAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyTransitGatewayVpcAttachmentQueryParams)
    ], GetModifyTransitGatewayVpcAttachmentRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyTransitGatewayVpcAttachmentHeaders)
    ], GetModifyTransitGatewayVpcAttachmentRequest.prototype, "headers", void 0);
    return GetModifyTransitGatewayVpcAttachmentRequest;
}(SpeakeasyBase));
export { GetModifyTransitGatewayVpcAttachmentRequest };
var GetModifyTransitGatewayVpcAttachmentResponse = /** @class */ (function (_super) {
    __extends(GetModifyTransitGatewayVpcAttachmentResponse, _super);
    function GetModifyTransitGatewayVpcAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyTransitGatewayVpcAttachmentResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyTransitGatewayVpcAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyTransitGatewayVpcAttachmentResponse.prototype, "statusCode", void 0);
    return GetModifyTransitGatewayVpcAttachmentResponse;
}(SpeakeasyBase));
export { GetModifyTransitGatewayVpcAttachmentResponse };
