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
import { ChallengeResponseType } from "./challengeresponsetype";
import { EventContextDataType } from "./eventcontextdatatype";
import { EventFeedbackType } from "./eventfeedbacktype";
import { EventResponseTypeEnum } from "./eventresponsetypeenum";
import { EventRiskType } from "./eventrisktype";
import { EventTypeEnum } from "./eventtypeenum";
// AuthEventType
/**
 * The authentication event type.
**/
var AuthEventType = /** @class */ (function (_super) {
    __extends(AuthEventType, _super);
    function AuthEventType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChallengeResponses", elemType: ChallengeResponseType }),
        __metadata("design:type", Array)
    ], AuthEventType.prototype, "challengeResponses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], AuthEventType.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventContextData" }),
        __metadata("design:type", EventContextDataType)
    ], AuthEventType.prototype, "eventContextData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventFeedback" }),
        __metadata("design:type", EventFeedbackType)
    ], AuthEventType.prototype, "eventFeedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventId" }),
        __metadata("design:type", String)
    ], AuthEventType.prototype, "eventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventResponse" }),
        __metadata("design:type", String)
    ], AuthEventType.prototype, "eventResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventRisk" }),
        __metadata("design:type", EventRiskType)
    ], AuthEventType.prototype, "eventRisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventType" }),
        __metadata("design:type", String)
    ], AuthEventType.prototype, "eventType", void 0);
    return AuthEventType;
}(SpeakeasyBase));
export { AuthEventType };
