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
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { ContentHandlingStrategyEnum } from "./contenthandlingstrategyenum";
import { TlsConfig } from "./tlsconfig";
import { IntegrationTypeEnum } from "./integrationtypeenum";
// Integration
/**
 * <p>Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.</p> <div class="remarks">In the API Gateway console, the built-in Lambda integration is an AWS integration.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div>
**/
var Integration = /** @class */ (function (_super) {
    __extends(Integration, _super);
    function Integration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cacheKeyParameters" }),
        __metadata("design:type", Array)
    ], Integration.prototype, "cacheKeyParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=cacheNamespace" }),
        __metadata("design:type", String)
    ], Integration.prototype, "cacheNamespace", void 0);
    __decorate([
        Metadata({ data: "json, name=connectionId" }),
        __metadata("design:type", String)
    ], Integration.prototype, "connectionId", void 0);
    __decorate([
        Metadata({ data: "json, name=connectionType" }),
        __metadata("design:type", String)
    ], Integration.prototype, "connectionType", void 0);
    __decorate([
        Metadata({ data: "json, name=contentHandling" }),
        __metadata("design:type", String)
    ], Integration.prototype, "contentHandling", void 0);
    __decorate([
        Metadata({ data: "json, name=credentials" }),
        __metadata("design:type", String)
    ], Integration.prototype, "credentials", void 0);
    __decorate([
        Metadata({ data: "json, name=httpMethod" }),
        __metadata("design:type", String)
    ], Integration.prototype, "httpMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=integrationResponses", elemType: shared.IntegrationResponse }),
        __metadata("design:type", Map)
    ], Integration.prototype, "integrationResponses", void 0);
    __decorate([
        Metadata({ data: "json, name=passthroughBehavior" }),
        __metadata("design:type", String)
    ], Integration.prototype, "passthroughBehavior", void 0);
    __decorate([
        Metadata({ data: "json, name=requestParameters" }),
        __metadata("design:type", Map)
    ], Integration.prototype, "requestParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=requestTemplates" }),
        __metadata("design:type", Map)
    ], Integration.prototype, "requestTemplates", void 0);
    __decorate([
        Metadata({ data: "json, name=timeoutInMillis" }),
        __metadata("design:type", Number)
    ], Integration.prototype, "timeoutInMillis", void 0);
    __decorate([
        Metadata({ data: "json, name=tlsConfig" }),
        __metadata("design:type", TlsConfig)
    ], Integration.prototype, "tlsConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Integration.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Integration.prototype, "uri", void 0);
    return Integration;
}(SpeakeasyBase));
export { Integration };
