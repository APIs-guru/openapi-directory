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
export var GetRegisterInstanceEventNotificationAttributesActionEnum;
(function (GetRegisterInstanceEventNotificationAttributesActionEnum) {
    GetRegisterInstanceEventNotificationAttributesActionEnum["RegisterInstanceEventNotificationAttributes"] = "RegisterInstanceEventNotificationAttributes";
})(GetRegisterInstanceEventNotificationAttributesActionEnum || (GetRegisterInstanceEventNotificationAttributesActionEnum = {}));
// GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute
/**
 * Information about the tag keys to register for the current Region. You can either specify individual tag keys or register all tag keys in the current Region. You must specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request
**/
var GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute = /** @class */ (function (_super) {
    __extends(GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute, _super);
    function GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=IncludeAllTagsOfInstance" }),
        __metadata("design:type", Boolean)
    ], GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute.prototype, "includeAllTagsOfInstance", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=InstanceTagKeys" }),
        __metadata("design:type", Array)
    ], GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute.prototype, "instanceTagKeys", void 0);
    return GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute;
}(SpeakeasyBase));
export { GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute };
export var GetRegisterInstanceEventNotificationAttributesVersionEnum;
(function (GetRegisterInstanceEventNotificationAttributesVersionEnum) {
    GetRegisterInstanceEventNotificationAttributesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetRegisterInstanceEventNotificationAttributesVersionEnum || (GetRegisterInstanceEventNotificationAttributesVersionEnum = {}));
var GetRegisterInstanceEventNotificationAttributesQueryParams = /** @class */ (function (_super) {
    __extends(GetRegisterInstanceEventNotificationAttributesQueryParams, _super);
    function GetRegisterInstanceEventNotificationAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRegisterInstanceEventNotificationAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetRegisterInstanceEventNotificationAttributesQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceTagAttribute" }),
        __metadata("design:type", GetRegisterInstanceEventNotificationAttributesInstanceTagAttribute)
    ], GetRegisterInstanceEventNotificationAttributesQueryParams.prototype, "instanceTagAttribute", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRegisterInstanceEventNotificationAttributesQueryParams.prototype, "version", void 0);
    return GetRegisterInstanceEventNotificationAttributesQueryParams;
}(SpeakeasyBase));
export { GetRegisterInstanceEventNotificationAttributesQueryParams };
var GetRegisterInstanceEventNotificationAttributesHeaders = /** @class */ (function (_super) {
    __extends(GetRegisterInstanceEventNotificationAttributesHeaders, _super);
    function GetRegisterInstanceEventNotificationAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRegisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRegisterInstanceEventNotificationAttributesHeaders;
}(SpeakeasyBase));
export { GetRegisterInstanceEventNotificationAttributesHeaders };
var GetRegisterInstanceEventNotificationAttributesRequest = /** @class */ (function (_super) {
    __extends(GetRegisterInstanceEventNotificationAttributesRequest, _super);
    function GetRegisterInstanceEventNotificationAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRegisterInstanceEventNotificationAttributesQueryParams)
    ], GetRegisterInstanceEventNotificationAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRegisterInstanceEventNotificationAttributesHeaders)
    ], GetRegisterInstanceEventNotificationAttributesRequest.prototype, "headers", void 0);
    return GetRegisterInstanceEventNotificationAttributesRequest;
}(SpeakeasyBase));
export { GetRegisterInstanceEventNotificationAttributesRequest };
var GetRegisterInstanceEventNotificationAttributesResponse = /** @class */ (function (_super) {
    __extends(GetRegisterInstanceEventNotificationAttributesResponse, _super);
    function GetRegisterInstanceEventNotificationAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRegisterInstanceEventNotificationAttributesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRegisterInstanceEventNotificationAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRegisterInstanceEventNotificationAttributesResponse.prototype, "statusCode", void 0);
    return GetRegisterInstanceEventNotificationAttributesResponse;
}(SpeakeasyBase));
export { GetRegisterInstanceEventNotificationAttributesResponse };
