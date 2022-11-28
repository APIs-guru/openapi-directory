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
import { ReplicationScopeEnum } from "./replicationscopeenum";
// ConditionalForwarder
/**
 * Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.
**/
var ConditionalForwarder = /** @class */ (function (_super) {
    __extends(ConditionalForwarder, _super);
    function ConditionalForwarder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsIpAddrs" }),
        __metadata("design:type", Array)
    ], ConditionalForwarder.prototype, "dnsIpAddrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteDomainName" }),
        __metadata("design:type", String)
    ], ConditionalForwarder.prototype, "remoteDomainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationScope" }),
        __metadata("design:type", String)
    ], ConditionalForwarder.prototype, "replicationScope", void 0);
    return ConditionalForwarder;
}(SpeakeasyBase));
export { ConditionalForwarder };
