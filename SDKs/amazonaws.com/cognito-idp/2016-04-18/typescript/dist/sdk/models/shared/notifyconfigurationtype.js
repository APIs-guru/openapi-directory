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
import { NotifyEmailType } from "./notifyemailtype";
// NotifyConfigurationType
/**
 * The notify configuration type.
**/
var NotifyConfigurationType = /** @class */ (function (_super) {
    __extends(NotifyConfigurationType, _super);
    function NotifyConfigurationType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockEmail" }),
        __metadata("design:type", NotifyEmailType)
    ], NotifyConfigurationType.prototype, "blockEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=From" }),
        __metadata("design:type", String)
    ], NotifyConfigurationType.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MfaEmail" }),
        __metadata("design:type", NotifyEmailType)
    ], NotifyConfigurationType.prototype, "mfaEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NoActionEmail" }),
        __metadata("design:type", NotifyEmailType)
    ], NotifyConfigurationType.prototype, "noActionEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplyTo" }),
        __metadata("design:type", String)
    ], NotifyConfigurationType.prototype, "replyTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceArn" }),
        __metadata("design:type", String)
    ], NotifyConfigurationType.prototype, "sourceArn", void 0);
    return NotifyConfigurationType;
}(SpeakeasyBase));
export { NotifyConfigurationType };
