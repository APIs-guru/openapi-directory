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
import { AuthorizerTypeEnum } from "./authorizertypeenum";
// Authorizer
/**
 * <p>Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
**/
var Authorizer = /** @class */ (function (_super) {
    __extends(Authorizer, _super);
    function Authorizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=authType" }),
        __metadata("design:type", String)
    ], Authorizer.prototype, "authType", void 0);
    __decorate([
        Metadata({ data: "json, name=authorizerCredentials" }),
        __metadata("design:type", String)
    ], Authorizer.prototype, "authorizerCredentials", void 0);
    __decorate([
        Metadata({ data: "json, name=authorizerResultTtlInSeconds" }),
        __metadata("design:type", Number)
    ], Authorizer.prototype, "authorizerResultTtlInSeconds", void 0);
    __decorate([
        Metadata({ data: "json, name=authorizerUri" }),
        __metadata("design:type", String)
    ], Authorizer.prototype, "authorizerUri", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Authorizer.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=identitySource" }),
        __metadata("design:type", String)
    ], Authorizer.prototype, "identitySource", void 0);
    __decorate([
        Metadata({ data: "json, name=identityValidationExpression" }),
        __metadata("design:type", String)
    ], Authorizer.prototype, "identityValidationExpression", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Authorizer.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=providerARNs" }),
        __metadata("design:type", Array)
    ], Authorizer.prototype, "providerArNs", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Authorizer.prototype, "type", void 0);
    return Authorizer;
}(SpeakeasyBase));
export { Authorizer };
