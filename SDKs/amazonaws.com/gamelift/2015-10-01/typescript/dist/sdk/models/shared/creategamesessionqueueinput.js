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
import { GameSessionQueueDestination } from "./gamesessionqueuedestination";
import { FilterConfiguration } from "./filterconfiguration";
import { PlayerLatencyPolicy } from "./playerlatencypolicy";
import { PriorityConfiguration } from "./priorityconfiguration";
import { Tag } from "./tag";
// CreateGameSessionQueueInput
/**
 * Represents the input for a request operation.
**/
var CreateGameSessionQueueInput = /** @class */ (function (_super) {
    __extends(CreateGameSessionQueueInput, _super);
    function CreateGameSessionQueueInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomEventData" }),
        __metadata("design:type", String)
    ], CreateGameSessionQueueInput.prototype, "customEventData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Destinations", elemType: GameSessionQueueDestination }),
        __metadata("design:type", Array)
    ], CreateGameSessionQueueInput.prototype, "destinations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FilterConfiguration" }),
        __metadata("design:type", FilterConfiguration)
    ], CreateGameSessionQueueInput.prototype, "filterConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateGameSessionQueueInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationTarget" }),
        __metadata("design:type", String)
    ], CreateGameSessionQueueInput.prototype, "notificationTarget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayerLatencyPolicies", elemType: PlayerLatencyPolicy }),
        __metadata("design:type", Array)
    ], CreateGameSessionQueueInput.prototype, "playerLatencyPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PriorityConfiguration" }),
        __metadata("design:type", PriorityConfiguration)
    ], CreateGameSessionQueueInput.prototype, "priorityConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateGameSessionQueueInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeoutInSeconds" }),
        __metadata("design:type", Number)
    ], CreateGameSessionQueueInput.prototype, "timeoutInSeconds", void 0);
    return CreateGameSessionQueueInput;
}(SpeakeasyBase));
export { CreateGameSessionQueueInput };
