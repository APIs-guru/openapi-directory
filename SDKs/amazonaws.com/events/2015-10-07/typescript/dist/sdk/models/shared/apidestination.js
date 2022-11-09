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
import { ApiDestinationStateEnum } from "./apidestinationstateenum";
import { ApiDestinationHttpMethodEnum } from "./apidestinationhttpmethodenum";
// ApiDestination
/**
 * Contains details about an API destination.
**/
var ApiDestination = /** @class */ (function (_super) {
    __extends(ApiDestination, _super);
    function ApiDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ApiDestinationArn" }),
        __metadata("design:type", String)
    ], ApiDestination.prototype, "apiDestinationArn", void 0);
    __decorate([
        Metadata({ data: "json, name=ApiDestinationState" }),
        __metadata("design:type", String)
    ], ApiDestination.prototype, "apiDestinationState", void 0);
    __decorate([
        Metadata({ data: "json, name=ConnectionArn" }),
        __metadata("design:type", String)
    ], ApiDestination.prototype, "connectionArn", void 0);
    __decorate([
        Metadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], ApiDestination.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=HttpMethod" }),
        __metadata("design:type", String)
    ], ApiDestination.prototype, "httpMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=InvocationEndpoint" }),
        __metadata("design:type", String)
    ], ApiDestination.prototype, "invocationEndpoint", void 0);
    __decorate([
        Metadata({ data: "json, name=InvocationRateLimitPerSecond" }),
        __metadata("design:type", Number)
    ], ApiDestination.prototype, "invocationRateLimitPerSecond", void 0);
    __decorate([
        Metadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], ApiDestination.prototype, "lastModifiedTime", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ApiDestination.prototype, "name", void 0);
    return ApiDestination;
}(SpeakeasyBase));
export { ApiDestination };
