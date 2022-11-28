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
import { MatchedPlayerSession } from "./matchedplayersession";
// GameSessionConnectionInfo
/**
 * Connection information for a new game session that is created in response to a <a>StartMatchmaking</a> request. Once a match is made, the FlexMatch engine creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the <a>MatchmakingTicket</a>, which can be retrieved by calling <a>DescribeMatchmaking</a>.
**/
var GameSessionConnectionInfo = /** @class */ (function (_super) {
    __extends(GameSessionConnectionInfo, _super);
    function GameSessionConnectionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsName" }),
        __metadata("design:type", String)
    ], GameSessionConnectionInfo.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameSessionArn" }),
        __metadata("design:type", String)
    ], GameSessionConnectionInfo.prototype, "gameSessionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpAddress" }),
        __metadata("design:type", String)
    ], GameSessionConnectionInfo.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MatchedPlayerSessions", elemType: MatchedPlayerSession }),
        __metadata("design:type", Array)
    ], GameSessionConnectionInfo.prototype, "matchedPlayerSessions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], GameSessionConnectionInfo.prototype, "port", void 0);
    return GameSessionConnectionInfo;
}(SpeakeasyBase));
export { GameSessionConnectionInfo };
