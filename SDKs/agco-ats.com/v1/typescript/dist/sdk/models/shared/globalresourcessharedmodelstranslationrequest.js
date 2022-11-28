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
export var GlobalResourcesSharedModelsTranslationRequestStateEnum;
(function (GlobalResourcesSharedModelsTranslationRequestStateEnum) {
    GlobalResourcesSharedModelsTranslationRequestStateEnum["NotSubmitted"] = "NotSubmitted";
    GlobalResourcesSharedModelsTranslationRequestStateEnum["Submitted"] = "Submitted";
    GlobalResourcesSharedModelsTranslationRequestStateEnum["Cancelled"] = "Cancelled";
    GlobalResourcesSharedModelsTranslationRequestStateEnum["Completed"] = "Completed";
})(GlobalResourcesSharedModelsTranslationRequestStateEnum || (GlobalResourcesSharedModelsTranslationRequestStateEnum = {}));
// GlobalResourcesSharedModelsTranslationRequest
/**
 * A request to translate specified strings into specified locales
**/
var GlobalResourcesSharedModelsTranslationRequest = /** @class */ (function (_super) {
    __extends(GlobalResourcesSharedModelsTranslationRequest, _super);
    function GlobalResourcesSharedModelsTranslationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApprovalUserId, form, name=ApprovalUserId;" }),
        __metadata("design:type", Number)
    ], GlobalResourcesSharedModelsTranslationRequest.prototype, "approvalUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CCEmailAddresses, form, name=CCEmailAddresses;" }),
        __metadata("design:type", Array)
    ], GlobalResourcesSharedModelsTranslationRequest.prototype, "ccEmailAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeToAccount, form, name=ChargeToAccount;" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsTranslationRequest.prototype, "chargeToAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deadline, form, name=Deadline;" }),
        __metadata("design:type", Date)
    ], GlobalResourcesSharedModelsTranslationRequest.prototype, "deadline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" }),
        __metadata("design:type", Number)
    ], GlobalResourcesSharedModelsTranslationRequest.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocaleIds, form, name=LocaleIds;" }),
        __metadata("design:type", Array)
    ], GlobalResourcesSharedModelsTranslationRequest.prototype, "localeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes, form, name=Notes;" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsTranslationRequest.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QuestionsUserId, form, name=QuestionsUserId;" }),
        __metadata("design:type", Number)
    ], GlobalResourcesSharedModelsTranslationRequest.prototype, "questionsUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State, form, name=State;" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsTranslationRequest.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubmittedBy, form, name=SubmittedBy;" }),
        __metadata("design:type", Number)
    ], GlobalResourcesSharedModelsTranslationRequest.prototype, "submittedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranslatorEmail, form, name=TranslatorEmail;" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsTranslationRequest.prototype, "translatorEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranslatorName, form, name=TranslatorName;" }),
        __metadata("design:type", String)
    ], GlobalResourcesSharedModelsTranslationRequest.prototype, "translatorName", void 0);
    return GlobalResourcesSharedModelsTranslationRequest;
}(SpeakeasyBase));
export { GlobalResourcesSharedModelsTranslationRequest };
