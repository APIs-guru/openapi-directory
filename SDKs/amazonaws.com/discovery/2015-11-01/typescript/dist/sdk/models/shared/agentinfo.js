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
import { AgentStatusEnum } from "./agentstatusenum";
// AgentInfo
/**
 * Information about agents or connectors associated with the user’s AWS account. Information includes agent or connector IDs, IP addresses, media access control (MAC) addresses, agent or connector health, hostname where the agent or connector resides, and agent version for each agent.
**/
var AgentInfo = /** @class */ (function (_super) {
    __extends(AgentInfo, _super);
    function AgentInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=agentId" }),
        __metadata("design:type", String)
    ], AgentInfo.prototype, "agentId", void 0);
    __decorate([
        Metadata({ data: "json, name=agentNetworkInfoList", elemType: shared.AgentNetworkInfo }),
        __metadata("design:type", Array)
    ], AgentInfo.prototype, "agentNetworkInfoList", void 0);
    __decorate([
        Metadata({ data: "json, name=agentType" }),
        __metadata("design:type", String)
    ], AgentInfo.prototype, "agentType", void 0);
    __decorate([
        Metadata({ data: "json, name=collectionStatus" }),
        __metadata("design:type", String)
    ], AgentInfo.prototype, "collectionStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=connectorId" }),
        __metadata("design:type", String)
    ], AgentInfo.prototype, "connectorId", void 0);
    __decorate([
        Metadata({ data: "json, name=health" }),
        __metadata("design:type", String)
    ], AgentInfo.prototype, "health", void 0);
    __decorate([
        Metadata({ data: "json, name=hostName" }),
        __metadata("design:type", String)
    ], AgentInfo.prototype, "hostName", void 0);
    __decorate([
        Metadata({ data: "json, name=lastHealthPingTime" }),
        __metadata("design:type", String)
    ], AgentInfo.prototype, "lastHealthPingTime", void 0);
    __decorate([
        Metadata({ data: "json, name=registeredTime" }),
        __metadata("design:type", String)
    ], AgentInfo.prototype, "registeredTime", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], AgentInfo.prototype, "version", void 0);
    return AgentInfo;
}(SpeakeasyBase));
export { AgentInfo };
