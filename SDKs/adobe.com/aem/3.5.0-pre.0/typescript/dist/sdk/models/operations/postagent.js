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
var PostAgentPathParams = /** @class */ (function (_super) {
    __extends(PostAgentPathParams, _super);
    function PostAgentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PostAgentPathParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runmode" }),
        __metadata("design:type", String)
    ], PostAgentPathParams.prototype, "runmode", void 0);
    return PostAgentPathParams;
}(SpeakeasyBase));
export { PostAgentPathParams };
var PostAgentQueryParams = /** @class */ (function (_super) {
    __extends(PostAgentQueryParams, _super);
    function PostAgentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=:operation" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/cq:distribute" }),
        __metadata("design:type", Boolean)
    ], PostAgentQueryParams.prototype, "jcrContentCqDistribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/cq:distribute@TypeHint" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentCqDistributeAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/cq:name" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentCqName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/cq:template" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentCqTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/enabled" }),
        __metadata("design:type", Boolean)
    ], PostAgentQueryParams.prototype, "jcrContentEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:description" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentJcrDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:lastModified" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentJcrLastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:lastModifiedBy" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentJcrLastModifiedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:mixinTypes" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentJcrMixinTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:title" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentJcrTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/logLevel" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentLogLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/noStatusUpdate" }),
        __metadata("design:type", Boolean)
    ], PostAgentQueryParams.prototype, "jcrContentNoStatusUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/noVersioning" }),
        __metadata("design:type", Boolean)
    ], PostAgentQueryParams.prototype, "jcrContentNoVersioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolConnectTimeout" }),
        __metadata("design:type", Number)
    ], PostAgentQueryParams.prototype, "jcrContentProtocolConnectTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPConnectionClosed" }),
        __metadata("design:type", Boolean)
    ], PostAgentQueryParams.prototype, "jcrContentProtocolHttpConnectionClosed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPExpired" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentProtocolHttpExpired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPHeaders" }),
        __metadata("design:type", Array)
    ], PostAgentQueryParams.prototype, "jcrContentProtocolHttpHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPHeaders@TypeHint" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentProtocolHttpHeadersAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPMethod" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentProtocolHttpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPSRelaxed" }),
        __metadata("design:type", Boolean)
    ], PostAgentQueryParams.prototype, "jcrContentProtocolHttpsRelaxed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolInterface" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentProtocolInterface", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolSocketTimeout" }),
        __metadata("design:type", Number)
    ], PostAgentQueryParams.prototype, "jcrContentProtocolSocketTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolVersion" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentProtocolVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyHost" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentProxyHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyNTLMDomain" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentProxyNtlmDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyNTLMHost" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentProxyNtlmHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyPassword" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentProxyPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyPort" }),
        __metadata("design:type", Number)
    ], PostAgentQueryParams.prototype, "jcrContentProxyPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyUser" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentProxyUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/queueBatchMaxSize" }),
        __metadata("design:type", Number)
    ], PostAgentQueryParams.prototype, "jcrContentQueueBatchMaxSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/queueBatchMode" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentQueueBatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/queueBatchWaitTime" }),
        __metadata("design:type", Number)
    ], PostAgentQueryParams.prototype, "jcrContentQueueBatchWaitTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/retryDelay" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentRetryDelay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/reverseReplication" }),
        __metadata("design:type", Boolean)
    ], PostAgentQueryParams.prototype, "jcrContentReverseReplication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/serializationType" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentSerializationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/sling:resourceType" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentSlingResourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/ssl" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentSsl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportNTLMDomain" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentTransportNtlmDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportNTLMHost" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentTransportNtlmHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportPassword" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentTransportPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportUri" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentTransportUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportUser" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentTransportUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerDistribute" }),
        __metadata("design:type", Boolean)
    ], PostAgentQueryParams.prototype, "jcrContentTriggerDistribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerModified" }),
        __metadata("design:type", Boolean)
    ], PostAgentQueryParams.prototype, "jcrContentTriggerModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerOnOffTime" }),
        __metadata("design:type", Boolean)
    ], PostAgentQueryParams.prototype, "jcrContentTriggerOnOffTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerReceive" }),
        __metadata("design:type", Boolean)
    ], PostAgentQueryParams.prototype, "jcrContentTriggerReceive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerSpecific" }),
        __metadata("design:type", Boolean)
    ], PostAgentQueryParams.prototype, "jcrContentTriggerSpecific", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/userId" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrContentUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:primaryType" }),
        __metadata("design:type", String)
    ], PostAgentQueryParams.prototype, "jcrPrimaryType", void 0);
    return PostAgentQueryParams;
}(SpeakeasyBase));
export { PostAgentQueryParams };
var PostAgentRequest = /** @class */ (function (_super) {
    __extends(PostAgentRequest, _super);
    function PostAgentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAgentPathParams)
    ], PostAgentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAgentQueryParams)
    ], PostAgentRequest.prototype, "queryParams", void 0);
    return PostAgentRequest;
}(SpeakeasyBase));
export { PostAgentRequest };
var PostAgentResponse = /** @class */ (function (_super) {
    __extends(PostAgentResponse, _super);
    function PostAgentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAgentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAgentResponse.prototype, "statusCode", void 0);
    return PostAgentResponse;
}(SpeakeasyBase));
export { PostAgentResponse };
