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
import { ApiKeySourceTypeEnum } from "./apikeysourcetypeenum";
import { EndpointConfiguration } from "./endpointconfiguration";
// RestApi
/**
 * <p>Represents a REST API.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
**/
var RestApi = /** @class */ (function (_super) {
    __extends(RestApi, _super);
    function RestApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=apiKeySource" }),
        __metadata("design:type", String)
    ], RestApi.prototype, "apiKeySource", void 0);
    __decorate([
        Metadata({ data: "json, name=binaryMediaTypes" }),
        __metadata("design:type", Array)
    ], RestApi.prototype, "binaryMediaTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], RestApi.prototype, "createdDate", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], RestApi.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=disableExecuteApiEndpoint" }),
        __metadata("design:type", Boolean)
    ], RestApi.prototype, "disableExecuteApiEndpoint", void 0);
    __decorate([
        Metadata({ data: "json, name=endpointConfiguration" }),
        __metadata("design:type", EndpointConfiguration)
    ], RestApi.prototype, "endpointConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RestApi.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=minimumCompressionSize" }),
        __metadata("design:type", Number)
    ], RestApi.prototype, "minimumCompressionSize", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RestApi.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], RestApi.prototype, "policy", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], RestApi.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], RestApi.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "json, name=warnings" }),
        __metadata("design:type", Array)
    ], RestApi.prototype, "warnings", void 0);
    return RestApi;
}(SpeakeasyBase));
export { RestApi };
