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
import { ReplayDestination } from "./replaydestination";
import { ReplayStateEnum } from "./replaystateenum";
var DescribeReplayResponse = /** @class */ (function (_super) {
    __extends(DescribeReplayResponse, _super);
    function DescribeReplayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], DescribeReplayResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Destination" }),
        __metadata("design:type", ReplayDestination)
    ], DescribeReplayResponse.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventEndTime" }),
        __metadata("design:type", Date)
    ], DescribeReplayResponse.prototype, "eventEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventLastReplayedTime" }),
        __metadata("design:type", Date)
    ], DescribeReplayResponse.prototype, "eventLastReplayedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventSourceArn" }),
        __metadata("design:type", String)
    ], DescribeReplayResponse.prototype, "eventSourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventStartTime" }),
        __metadata("design:type", Date)
    ], DescribeReplayResponse.prototype, "eventStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplayArn" }),
        __metadata("design:type", String)
    ], DescribeReplayResponse.prototype, "replayArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplayEndTime" }),
        __metadata("design:type", Date)
    ], DescribeReplayResponse.prototype, "replayEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplayName" }),
        __metadata("design:type", String)
    ], DescribeReplayResponse.prototype, "replayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplayStartTime" }),
        __metadata("design:type", Date)
    ], DescribeReplayResponse.prototype, "replayStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], DescribeReplayResponse.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StateReason" }),
        __metadata("design:type", String)
    ], DescribeReplayResponse.prototype, "stateReason", void 0);
    return DescribeReplayResponse;
}(SpeakeasyBase));
export { DescribeReplayResponse };
