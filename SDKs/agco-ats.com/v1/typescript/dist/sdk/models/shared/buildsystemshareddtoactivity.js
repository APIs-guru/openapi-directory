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
import { BuildSystemSharedDtoParameter } from "./buildsystemshareddtoparameter";
import { BuildSystemSharedDtoActivityStep } from "./buildsystemshareddtoactivitystep";
// BuildSystemSharedDtoActivityInput
/**
 * A DTO for an IActivity
**/
var BuildSystemSharedDtoActivityInput = /** @class */ (function (_super) {
    __extends(BuildSystemSharedDtoActivityInput, _super);
    function BuildSystemSharedDtoActivityInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivityID, form, name=ActivityID;" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoActivityInput.prototype, "activityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deleted, form, name=Deleted;" }),
        __metadata("design:type", Boolean)
    ], BuildSystemSharedDtoActivityInput.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" }),
        __metadata("design:type", String)
    ], BuildSystemSharedDtoActivityInput.prototype, "name", void 0);
    return BuildSystemSharedDtoActivityInput;
}(SpeakeasyBase));
export { BuildSystemSharedDtoActivityInput };
// BuildSystemSharedDtoActivity
/**
 * A DTO for an IActivity
**/
var BuildSystemSharedDtoActivity = /** @class */ (function (_super) {
    __extends(BuildSystemSharedDtoActivity, _super);
    function BuildSystemSharedDtoActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivityID" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoActivity.prototype, "activityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deleted" }),
        __metadata("design:type", Boolean)
    ], BuildSystemSharedDtoActivity.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], BuildSystemSharedDtoActivity.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters", elemType: BuildSystemSharedDtoParameter }),
        __metadata("design:type", Array)
    ], BuildSystemSharedDtoActivity.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Steps", elemType: BuildSystemSharedDtoActivityStep }),
        __metadata("design:type", Array)
    ], BuildSystemSharedDtoActivity.prototype, "steps", void 0);
    return BuildSystemSharedDtoActivity;
}(SpeakeasyBase));
export { BuildSystemSharedDtoActivity };
