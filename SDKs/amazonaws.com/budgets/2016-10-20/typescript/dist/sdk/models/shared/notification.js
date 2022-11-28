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
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { NotificationStateEnum } from "./notificationstateenum";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { ThresholdTypeEnum } from "./thresholdtypeenum";
// Notification
/**
 * <p>A notification that is associated with a budget. A budget can have up to ten notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul>
**/
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComparisonOperator" }),
        __metadata("design:type", String)
    ], Notification.prototype, "comparisonOperator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationState" }),
        __metadata("design:type", String)
    ], Notification.prototype, "notificationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationType" }),
        __metadata("design:type", String)
    ], Notification.prototype, "notificationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Threshold" }),
        __metadata("design:type", Number)
    ], Notification.prototype, "threshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThresholdType" }),
        __metadata("design:type", String)
    ], Notification.prototype, "thresholdType", void 0);
    return Notification;
}(SpeakeasyBase));
export { Notification };
