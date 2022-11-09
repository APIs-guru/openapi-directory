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
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { LambdaAuthorizerConfig } from "./lambdaauthorizerconfig";
import { LogConfig } from "./logconfig";
import { OpenIdConnectConfig } from "./openidconnectconfig";
import { UserPoolConfig } from "./userpoolconfig";
// GraphqlApi
/**
 * Describes a GraphQL API.
**/
var GraphqlApi = /** @class */ (function (_super) {
    __extends(GraphqlApi, _super);
    function GraphqlApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=additionalAuthenticationProviders", elemType: shared.AdditionalAuthenticationProvider }),
        __metadata("design:type", Array)
    ], GraphqlApi.prototype, "additionalAuthenticationProviders", void 0);
    __decorate([
        Metadata({ data: "json, name=apiId" }),
        __metadata("design:type", String)
    ], GraphqlApi.prototype, "apiId", void 0);
    __decorate([
        Metadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], GraphqlApi.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=authenticationType" }),
        __metadata("design:type", String)
    ], GraphqlApi.prototype, "authenticationType", void 0);
    __decorate([
        Metadata({ data: "json, name=lambdaAuthorizerConfig" }),
        __metadata("design:type", LambdaAuthorizerConfig)
    ], GraphqlApi.prototype, "lambdaAuthorizerConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=logConfig" }),
        __metadata("design:type", LogConfig)
    ], GraphqlApi.prototype, "logConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GraphqlApi.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=openIDConnectConfig" }),
        __metadata("design:type", OpenIdConnectConfig)
    ], GraphqlApi.prototype, "openIdConnectConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], GraphqlApi.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=uris" }),
        __metadata("design:type", Map)
    ], GraphqlApi.prototype, "uris", void 0);
    __decorate([
        Metadata({ data: "json, name=userPoolConfig" }),
        __metadata("design:type", UserPoolConfig)
    ], GraphqlApi.prototype, "userPoolConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=wafWebAclArn" }),
        __metadata("design:type", String)
    ], GraphqlApi.prototype, "wafWebAclArn", void 0);
    __decorate([
        Metadata({ data: "json, name=xrayEnabled" }),
        __metadata("design:type", Boolean)
    ], GraphqlApi.prototype, "xrayEnabled", void 0);
    return GraphqlApi;
}(SpeakeasyBase));
export { GraphqlApi };
