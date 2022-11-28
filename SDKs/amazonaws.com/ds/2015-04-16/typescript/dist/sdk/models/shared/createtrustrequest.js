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
import { SelectiveAuthEnum } from "./selectiveauthenum";
import { TrustDirectionEnum } from "./trustdirectionenum";
import { TrustTypeEnum } from "./trusttypeenum";
// CreateTrustRequest
/**
 * <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain.</p>
**/
var CreateTrustRequest = /** @class */ (function (_super) {
    __extends(CreateTrustRequest, _super);
    function CreateTrustRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConditionalForwarderIpAddrs" }),
        __metadata("design:type", Array)
    ], CreateTrustRequest.prototype, "conditionalForwarderIpAddrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectoryId" }),
        __metadata("design:type", String)
    ], CreateTrustRequest.prototype, "directoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteDomainName" }),
        __metadata("design:type", String)
    ], CreateTrustRequest.prototype, "remoteDomainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SelectiveAuth" }),
        __metadata("design:type", String)
    ], CreateTrustRequest.prototype, "selectiveAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrustDirection" }),
        __metadata("design:type", String)
    ], CreateTrustRequest.prototype, "trustDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrustPassword" }),
        __metadata("design:type", String)
    ], CreateTrustRequest.prototype, "trustPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrustType" }),
        __metadata("design:type", String)
    ], CreateTrustRequest.prototype, "trustType", void 0);
    return CreateTrustRequest;
}(SpeakeasyBase));
export { CreateTrustRequest };
