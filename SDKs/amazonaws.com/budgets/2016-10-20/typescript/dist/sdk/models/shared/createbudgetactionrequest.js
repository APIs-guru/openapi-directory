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
import { ActionThreshold } from "./actionthreshold";
import { ActionTypeEnum } from "./actiontypeenum";
import { ApprovalModelEnum } from "./approvalmodelenum";
import { Definition } from "./definition";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { Subscriber } from "./subscriber";
var CreateBudgetActionRequest = /** @class */ (function (_super) {
    __extends(CreateBudgetActionRequest, _super);
    function CreateBudgetActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], CreateBudgetActionRequest.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActionThreshold" }),
        __metadata("design:type", ActionThreshold)
    ], CreateBudgetActionRequest.prototype, "actionThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActionType" }),
        __metadata("design:type", String)
    ], CreateBudgetActionRequest.prototype, "actionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApprovalModel" }),
        __metadata("design:type", String)
    ], CreateBudgetActionRequest.prototype, "approvalModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BudgetName" }),
        __metadata("design:type", String)
    ], CreateBudgetActionRequest.prototype, "budgetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Definition" }),
        __metadata("design:type", Definition)
    ], CreateBudgetActionRequest.prototype, "definition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" }),
        __metadata("design:type", String)
    ], CreateBudgetActionRequest.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotificationType" }),
        __metadata("design:type", String)
    ], CreateBudgetActionRequest.prototype, "notificationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subscribers", elemType: Subscriber }),
        __metadata("design:type", Array)
    ], CreateBudgetActionRequest.prototype, "subscribers", void 0);
    return CreateBudgetActionRequest;
}(SpeakeasyBase));
export { CreateBudgetActionRequest };
