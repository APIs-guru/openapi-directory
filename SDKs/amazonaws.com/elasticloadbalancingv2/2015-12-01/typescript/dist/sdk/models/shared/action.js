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
import { AuthenticateCognitoActionConfig } from "./authenticatecognitoactionconfig";
import { AuthenticateOidcActionConfig } from "./authenticateoidcactionconfig";
import { FixedResponseActionConfig } from "./fixedresponseactionconfig";
import { ForwardActionConfig } from "./forwardactionconfig";
import { RedirectActionConfig } from "./redirectactionconfig";
import { ActionTypeEnumEnum } from "./actiontypeenumenum";
// Action
/**
 * <p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>
**/
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthenticateCognitoActionConfig)
    ], Action.prototype, "authenticateCognitoConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthenticateOidcActionConfig)
    ], Action.prototype, "authenticateOidcConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FixedResponseActionConfig)
    ], Action.prototype, "fixedResponseConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ForwardActionConfig)
    ], Action.prototype, "forwardConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Action.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RedirectActionConfig)
    ], Action.prototype, "redirectConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Action.prototype, "targetGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Action.prototype, "type", void 0);
    return Action;
}(SpeakeasyBase));
export { Action };
