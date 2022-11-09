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
export var GetDeregisterInstanceEventNotificationAttributesActionEnum;
(function (GetDeregisterInstanceEventNotificationAttributesActionEnum) {
    GetDeregisterInstanceEventNotificationAttributesActionEnum["DeregisterInstanceEventNotificationAttributes"] = "DeregisterInstanceEventNotificationAttributes";
})(GetDeregisterInstanceEventNotificationAttributesActionEnum || (GetDeregisterInstanceEventNotificationAttributesActionEnum = {}));
// GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute
/**
 * Information about the tag keys to deregister for the current Region. You can either specify individual tag keys or deregister all tag keys in the current Region. You must specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request
**/
var GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute = /** @class */ (function (_super) {
    __extends(GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute, _super);
    function GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, name=IncludeAllTagsOfInstance" }),
        __metadata("design:type", Boolean)
    ], GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute.prototype, "includeAllTagsOfInstance", void 0);
    __decorate([
        Metadata({ data: "queryParam, name=InstanceTagKeys" }),
        __metadata("design:type", Array)
    ], GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute.prototype, "instanceTagKeys", void 0);
    return GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute;
}(SpeakeasyBase));
export { GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute };
export var GetDeregisterInstanceEventNotificationAttributesVersionEnum;
(function (GetDeregisterInstanceEventNotificationAttributesVersionEnum) {
    GetDeregisterInstanceEventNotificationAttributesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeregisterInstanceEventNotificationAttributesVersionEnum || (GetDeregisterInstanceEventNotificationAttributesVersionEnum = {}));
var GetDeregisterInstanceEventNotificationAttributesQueryParams = /** @class */ (function (_super) {
    __extends(GetDeregisterInstanceEventNotificationAttributesQueryParams, _super);
    function GetDeregisterInstanceEventNotificationAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeregisterInstanceEventNotificationAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeregisterInstanceEventNotificationAttributesQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceTagAttribute" }),
        __metadata("design:type", GetDeregisterInstanceEventNotificationAttributesInstanceTagAttribute)
    ], GetDeregisterInstanceEventNotificationAttributesQueryParams.prototype, "instanceTagAttribute", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeregisterInstanceEventNotificationAttributesQueryParams.prototype, "version", void 0);
    return GetDeregisterInstanceEventNotificationAttributesQueryParams;
}(SpeakeasyBase));
export { GetDeregisterInstanceEventNotificationAttributesQueryParams };
var GetDeregisterInstanceEventNotificationAttributesHeaders = /** @class */ (function (_super) {
    __extends(GetDeregisterInstanceEventNotificationAttributesHeaders, _super);
    function GetDeregisterInstanceEventNotificationAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeregisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeregisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeregisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeregisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeregisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeregisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeregisterInstanceEventNotificationAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeregisterInstanceEventNotificationAttributesHeaders;
}(SpeakeasyBase));
export { GetDeregisterInstanceEventNotificationAttributesHeaders };
var GetDeregisterInstanceEventNotificationAttributesRequest = /** @class */ (function (_super) {
    __extends(GetDeregisterInstanceEventNotificationAttributesRequest, _super);
    function GetDeregisterInstanceEventNotificationAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeregisterInstanceEventNotificationAttributesQueryParams)
    ], GetDeregisterInstanceEventNotificationAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeregisterInstanceEventNotificationAttributesHeaders)
    ], GetDeregisterInstanceEventNotificationAttributesRequest.prototype, "headers", void 0);
    return GetDeregisterInstanceEventNotificationAttributesRequest;
}(SpeakeasyBase));
export { GetDeregisterInstanceEventNotificationAttributesRequest };
var GetDeregisterInstanceEventNotificationAttributesResponse = /** @class */ (function (_super) {
    __extends(GetDeregisterInstanceEventNotificationAttributesResponse, _super);
    function GetDeregisterInstanceEventNotificationAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeregisterInstanceEventNotificationAttributesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeregisterInstanceEventNotificationAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeregisterInstanceEventNotificationAttributesResponse.prototype, "statusCode", void 0);
    return GetDeregisterInstanceEventNotificationAttributesResponse;
}(SpeakeasyBase));
export { GetDeregisterInstanceEventNotificationAttributesResponse };
