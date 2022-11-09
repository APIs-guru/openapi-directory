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
import { UpdateConnectionApiKeyAuthRequestParameters } from "./updateconnectionapikeyauthrequestparameters";
import { UpdateConnectionBasicAuthRequestParameters } from "./updateconnectionbasicauthrequestparameters";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
import { UpdateConnectionOAuthRequestParameters } from "./updateconnectionoauthrequestparameters";
// UpdateConnectionAuthRequestParameters
/**
 * Contains the additional parameters to use for the connection.
**/
var UpdateConnectionAuthRequestParameters = /** @class */ (function (_super) {
    __extends(UpdateConnectionAuthRequestParameters, _super);
    function UpdateConnectionAuthRequestParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ApiKeyAuthParameters" }),
        __metadata("design:type", UpdateConnectionApiKeyAuthRequestParameters)
    ], UpdateConnectionAuthRequestParameters.prototype, "apiKeyAuthParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=BasicAuthParameters" }),
        __metadata("design:type", UpdateConnectionBasicAuthRequestParameters)
    ], UpdateConnectionAuthRequestParameters.prototype, "basicAuthParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=InvocationHttpParameters" }),
        __metadata("design:type", ConnectionHttpParameters)
    ], UpdateConnectionAuthRequestParameters.prototype, "invocationHttpParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=OAuthParameters" }),
        __metadata("design:type", UpdateConnectionOAuthRequestParameters)
    ], UpdateConnectionAuthRequestParameters.prototype, "oAuthParameters", void 0);
    return UpdateConnectionAuthRequestParameters;
}(SpeakeasyBase));
export { UpdateConnectionAuthRequestParameters };
