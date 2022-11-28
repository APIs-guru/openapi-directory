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
import { ExecutorConfiguration } from "./executorconfiguration";
import { ExecutorTypeEnum } from "./executortypeenum";
// ActionTypeExecutor
/**
 * The action engine, or executor, for an action type created for a provider, where the action is to be used by customers of the provider. The action engine is associated with the model used to create and update the action, such as the Lambda integration model.
**/
var ActionTypeExecutor = /** @class */ (function (_super) {
    __extends(ActionTypeExecutor, _super);
    function ActionTypeExecutor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configuration" }),
        __metadata("design:type", ExecutorConfiguration)
    ], ActionTypeExecutor.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobTimeout" }),
        __metadata("design:type", Number)
    ], ActionTypeExecutor.prototype, "jobTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyStatementsTemplate" }),
        __metadata("design:type", String)
    ], ActionTypeExecutor.prototype, "policyStatementsTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ActionTypeExecutor.prototype, "type", void 0);
    return ActionTypeExecutor;
}(SpeakeasyBase));
export { ActionTypeExecutor };
