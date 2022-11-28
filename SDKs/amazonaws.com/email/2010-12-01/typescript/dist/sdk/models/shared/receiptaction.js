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
import { AddHeaderAction } from "./addheaderaction";
import { BounceAction } from "./bounceaction";
import { LambdaAction } from "./lambdaaction";
import { S3Action } from "./s3action";
import { SnsAction } from "./snsaction";
import { StopAction } from "./stopaction";
import { WorkmailAction } from "./workmailaction";
// ReceiptAction
/**
 * <p>An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
**/
var ReceiptAction = /** @class */ (function (_super) {
    __extends(ReceiptAction, _super);
    function ReceiptAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddHeaderAction)
    ], ReceiptAction.prototype, "addHeaderAction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BounceAction)
    ], ReceiptAction.prototype, "bounceAction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LambdaAction)
    ], ReceiptAction.prototype, "lambdaAction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", S3Action)
    ], ReceiptAction.prototype, "s3Action", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SnsAction)
    ], ReceiptAction.prototype, "snsAction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopAction)
    ], ReceiptAction.prototype, "stopAction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkmailAction)
    ], ReceiptAction.prototype, "workmailAction", void 0);
    return ReceiptAction;
}(SpeakeasyBase));
export { ReceiptAction };
