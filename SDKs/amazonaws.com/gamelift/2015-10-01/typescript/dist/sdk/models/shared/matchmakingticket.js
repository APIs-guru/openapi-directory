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
import { GameSessionConnectionInfo } from "./gamesessionconnectioninfo";
import { Player } from "./player";
import { MatchmakingConfigurationStatusEnum } from "./matchmakingconfigurationstatusenum";
// MatchmakingTicket
/**
 * Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by calling <a>DescribeMatchmaking</a> with the ticket ID.
**/
var MatchmakingTicket = /** @class */ (function (_super) {
    __extends(MatchmakingTicket, _super);
    function MatchmakingTicket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigurationArn" }),
        __metadata("design:type", String)
    ], MatchmakingTicket.prototype, "configurationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigurationName" }),
        __metadata("design:type", String)
    ], MatchmakingTicket.prototype, "configurationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], MatchmakingTicket.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EstimatedWaitTime" }),
        __metadata("design:type", Number)
    ], MatchmakingTicket.prototype, "estimatedWaitTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameSessionConnectionInfo" }),
        __metadata("design:type", GameSessionConnectionInfo)
    ], MatchmakingTicket.prototype, "gameSessionConnectionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Players", elemType: Player }),
        __metadata("design:type", Array)
    ], MatchmakingTicket.prototype, "players", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], MatchmakingTicket.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], MatchmakingTicket.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], MatchmakingTicket.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusReason" }),
        __metadata("design:type", String)
    ], MatchmakingTicket.prototype, "statusReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TicketId" }),
        __metadata("design:type", String)
    ], MatchmakingTicket.prototype, "ticketId", void 0);
    return MatchmakingTicket;
}(SpeakeasyBase));
export { MatchmakingTicket };
