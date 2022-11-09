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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var MeAccount = /** @class */ (function (_super) {
    __extends(MeAccount, _super);
    function MeAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MeAccount.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MeAccount.prototype, "name", void 0);
    return MeAccount;
}(SpeakeasyBase));
export { MeAccount };
var MeToken = /** @class */ (function (_super) {
    __extends(MeToken, _super);
    function MeToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=capabilities" }),
        __metadata("design:type", Array)
    ], MeToken.prototype, "capabilities", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], MeToken.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MeToken.prototype, "name", void 0);
    return MeToken;
}(SpeakeasyBase));
export { MeToken };
var MeUser = /** @class */ (function (_super) {
    __extends(MeUser, _super);
    function MeUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeUser.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], MeUser.prototype, "id", void 0);
    return MeUser;
}(SpeakeasyBase));
export { MeUser };
var Me = /** @class */ (function (_super) {
    __extends(Me, _super);
    function Me() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account" }),
        __metadata("design:type", MeAccount)
    ], Me.prototype, "account", void 0);
    __decorate([
        Metadata({ data: "json, name=token" }),
        __metadata("design:type", MeToken)
    ], Me.prototype, "token", void 0);
    __decorate([
        Metadata({ data: "json, name=user" }),
        __metadata("design:type", MeUser)
    ], Me.prototype, "user", void 0);
    return Me;
}(SpeakeasyBase));
export { Me };
