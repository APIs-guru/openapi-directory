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
export var GetModifyNetworkInterfaceAttributeActionEnum;
(function (GetModifyNetworkInterfaceAttributeActionEnum) {
    GetModifyNetworkInterfaceAttributeActionEnum["ModifyNetworkInterfaceAttribute"] = "ModifyNetworkInterfaceAttribute";
})(GetModifyNetworkInterfaceAttributeActionEnum || (GetModifyNetworkInterfaceAttributeActionEnum = {}));
// GetModifyNetworkInterfaceAttributeAttachment
/**
 * Describes an attachment change.
**/
var GetModifyNetworkInterfaceAttributeAttachment = /** @class */ (function (_super) {
    __extends(GetModifyNetworkInterfaceAttributeAttachment, _super);
    function GetModifyNetworkInterfaceAttributeAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=AttachmentId" }),
        __metadata("design:type", String)
    ], GetModifyNetworkInterfaceAttributeAttachment.prototype, "attachmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=DeleteOnTermination" }),
        __metadata("design:type", Boolean)
    ], GetModifyNetworkInterfaceAttributeAttachment.prototype, "deleteOnTermination", void 0);
    return GetModifyNetworkInterfaceAttributeAttachment;
}(SpeakeasyBase));
export { GetModifyNetworkInterfaceAttributeAttachment };
// GetModifyNetworkInterfaceAttributeDescription
/**
 * Describes a value for a resource attribute that is a String.
**/
var GetModifyNetworkInterfaceAttributeDescription = /** @class */ (function (_super) {
    __extends(GetModifyNetworkInterfaceAttributeDescription, _super);
    function GetModifyNetworkInterfaceAttributeDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=Value" }),
        __metadata("design:type", String)
    ], GetModifyNetworkInterfaceAttributeDescription.prototype, "value", void 0);
    return GetModifyNetworkInterfaceAttributeDescription;
}(SpeakeasyBase));
export { GetModifyNetworkInterfaceAttributeDescription };
// GetModifyNetworkInterfaceAttributeSourceDestCheck
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
var GetModifyNetworkInterfaceAttributeSourceDestCheck = /** @class */ (function (_super) {
    __extends(GetModifyNetworkInterfaceAttributeSourceDestCheck, _super);
    function GetModifyNetworkInterfaceAttributeSourceDestCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=Value" }),
        __metadata("design:type", Boolean)
    ], GetModifyNetworkInterfaceAttributeSourceDestCheck.prototype, "value", void 0);
    return GetModifyNetworkInterfaceAttributeSourceDestCheck;
}(SpeakeasyBase));
export { GetModifyNetworkInterfaceAttributeSourceDestCheck };
export var GetModifyNetworkInterfaceAttributeVersionEnum;
(function (GetModifyNetworkInterfaceAttributeVersionEnum) {
    GetModifyNetworkInterfaceAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyNetworkInterfaceAttributeVersionEnum || (GetModifyNetworkInterfaceAttributeVersionEnum = {}));
var GetModifyNetworkInterfaceAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyNetworkInterfaceAttributeQueryParams, _super);
    function GetModifyNetworkInterfaceAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyNetworkInterfaceAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Attachment" }),
        __metadata("design:type", GetModifyNetworkInterfaceAttributeAttachment)
    ], GetModifyNetworkInterfaceAttributeQueryParams.prototype, "attachment", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Description" }),
        __metadata("design:type", GetModifyNetworkInterfaceAttributeDescription)
    ], GetModifyNetworkInterfaceAttributeQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyNetworkInterfaceAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], GetModifyNetworkInterfaceAttributeQueryParams.prototype, "networkInterfaceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SecurityGroupId" }),
        __metadata("design:type", Array)
    ], GetModifyNetworkInterfaceAttributeQueryParams.prototype, "securityGroupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceDestCheck" }),
        __metadata("design:type", GetModifyNetworkInterfaceAttributeSourceDestCheck)
    ], GetModifyNetworkInterfaceAttributeQueryParams.prototype, "sourceDestCheck", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyNetworkInterfaceAttributeQueryParams.prototype, "version", void 0);
    return GetModifyNetworkInterfaceAttributeQueryParams;
}(SpeakeasyBase));
export { GetModifyNetworkInterfaceAttributeQueryParams };
var GetModifyNetworkInterfaceAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetModifyNetworkInterfaceAttributeHeaders, _super);
    function GetModifyNetworkInterfaceAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyNetworkInterfaceAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyNetworkInterfaceAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyNetworkInterfaceAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyNetworkInterfaceAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyNetworkInterfaceAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyNetworkInterfaceAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyNetworkInterfaceAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyNetworkInterfaceAttributeHeaders;
}(SpeakeasyBase));
export { GetModifyNetworkInterfaceAttributeHeaders };
var GetModifyNetworkInterfaceAttributeRequest = /** @class */ (function (_super) {
    __extends(GetModifyNetworkInterfaceAttributeRequest, _super);
    function GetModifyNetworkInterfaceAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyNetworkInterfaceAttributeQueryParams)
    ], GetModifyNetworkInterfaceAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyNetworkInterfaceAttributeHeaders)
    ], GetModifyNetworkInterfaceAttributeRequest.prototype, "headers", void 0);
    return GetModifyNetworkInterfaceAttributeRequest;
}(SpeakeasyBase));
export { GetModifyNetworkInterfaceAttributeRequest };
var GetModifyNetworkInterfaceAttributeResponse = /** @class */ (function (_super) {
    __extends(GetModifyNetworkInterfaceAttributeResponse, _super);
    function GetModifyNetworkInterfaceAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyNetworkInterfaceAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyNetworkInterfaceAttributeResponse.prototype, "statusCode", void 0);
    return GetModifyNetworkInterfaceAttributeResponse;
}(SpeakeasyBase));
export { GetModifyNetworkInterfaceAttributeResponse };
