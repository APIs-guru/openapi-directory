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
import { CustomEmailLambdaVersionConfigType } from "./customemaillambdaversionconfigtype";
import { CustomSmsLambdaVersionConfigType } from "./customsmslambdaversionconfigtype";
// LambdaConfigType
/**
 * Specifies the configuration for Lambda triggers.
**/
var LambdaConfigType = /** @class */ (function (_super) {
    __extends(LambdaConfigType, _super);
    function LambdaConfigType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateAuthChallenge" }),
        __metadata("design:type", String)
    ], LambdaConfigType.prototype, "createAuthChallenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomEmailSender" }),
        __metadata("design:type", CustomEmailLambdaVersionConfigType)
    ], LambdaConfigType.prototype, "customEmailSender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomMessage" }),
        __metadata("design:type", String)
    ], LambdaConfigType.prototype, "customMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomSMSSender" }),
        __metadata("design:type", CustomSmsLambdaVersionConfigType)
    ], LambdaConfigType.prototype, "customSmsSender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefineAuthChallenge" }),
        __metadata("design:type", String)
    ], LambdaConfigType.prototype, "defineAuthChallenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KMSKeyID" }),
        __metadata("design:type", String)
    ], LambdaConfigType.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostAuthentication" }),
        __metadata("design:type", String)
    ], LambdaConfigType.prototype, "postAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostConfirmation" }),
        __metadata("design:type", String)
    ], LambdaConfigType.prototype, "postConfirmation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreAuthentication" }),
        __metadata("design:type", String)
    ], LambdaConfigType.prototype, "preAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreSignUp" }),
        __metadata("design:type", String)
    ], LambdaConfigType.prototype, "preSignUp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreTokenGeneration" }),
        __metadata("design:type", String)
    ], LambdaConfigType.prototype, "preTokenGeneration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserMigration" }),
        __metadata("design:type", String)
    ], LambdaConfigType.prototype, "userMigration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerifyAuthChallengeResponse" }),
        __metadata("design:type", String)
    ], LambdaConfigType.prototype, "verifyAuthChallengeResponse", void 0);
    return LambdaConfigType;
}(SpeakeasyBase));
export { LambdaConfigType };
