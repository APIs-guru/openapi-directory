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
import { ProviderTypeEnum } from "./providertypeenum";
import { VpcConfiguration } from "./vpcconfiguration";
// Host
/**
 * <p>A resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>
**/
var Host = /** @class */ (function (_super) {
    __extends(Host, _super);
    function Host() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=HostArn" }),
        __metadata("design:type", String)
    ], Host.prototype, "hostArn", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Host.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=ProviderEndpoint" }),
        __metadata("design:type", String)
    ], Host.prototype, "providerEndpoint", void 0);
    __decorate([
        Metadata({ data: "json, name=ProviderType" }),
        __metadata("design:type", String)
    ], Host.prototype, "providerType", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Host.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], Host.prototype, "statusMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=VpcConfiguration" }),
        __metadata("design:type", VpcConfiguration)
    ], Host.prototype, "vpcConfiguration", void 0);
    return Host;
}(SpeakeasyBase));
export { Host };
