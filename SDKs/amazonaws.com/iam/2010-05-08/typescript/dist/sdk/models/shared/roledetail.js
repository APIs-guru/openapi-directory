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
import { AttachedPolicy } from "./attachedpolicy";
import { InstanceProfile } from "./instanceprofile";
import { AttachedPermissionsBoundary } from "./attachedpermissionsboundary";
import { RoleLastUsed } from "./rolelastused";
import { PolicyDetail } from "./policydetail";
import { Tag } from "./tag";
// RoleDetail
/**
 * <p>Contains information about an IAM role, including all of the role's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
var RoleDetail = /** @class */ (function (_super) {
    __extends(RoleDetail, _super);
    function RoleDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RoleDetail.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RoleDetail.prototype, "assumeRolePolicyDocument", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: AttachedPolicy }),
        __metadata("design:type", Array)
    ], RoleDetail.prototype, "attachedManagedPolicies", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], RoleDetail.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: InstanceProfile }),
        __metadata("design:type", Array)
    ], RoleDetail.prototype, "instanceProfileList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RoleDetail.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AttachedPermissionsBoundary)
    ], RoleDetail.prototype, "permissionsBoundary", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RoleDetail.prototype, "roleId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RoleLastUsed)
    ], RoleDetail.prototype, "roleLastUsed", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RoleDetail.prototype, "roleName", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PolicyDetail }),
        __metadata("design:type", Array)
    ], RoleDetail.prototype, "rolePolicyList", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Tag }),
        __metadata("design:type", Array)
    ], RoleDetail.prototype, "tags", void 0);
    return RoleDetail;
}(SpeakeasyBase));
export { RoleDetail };
