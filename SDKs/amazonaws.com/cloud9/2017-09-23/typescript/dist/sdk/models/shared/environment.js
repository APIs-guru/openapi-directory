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
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { EnvironmentLifecycle } from "./environmentlifecycle";
import { ManagedCredentialsStatusEnum } from "./managedcredentialsstatusenum";
import { EnvironmentTypeEnum } from "./environmenttypeenum";
// Environment
/**
 * Information about an Cloud9 development environment.
**/
var Environment = /** @class */ (function (_super) {
    __extends(Environment, _super);
    function Environment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Environment.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionType" }),
        __metadata("design:type", String)
    ], Environment.prototype, "connectionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Environment.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Environment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycle" }),
        __metadata("design:type", EnvironmentLifecycle)
    ], Environment.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedCredentialsStatus" }),
        __metadata("design:type", String)
    ], Environment.prototype, "managedCredentialsStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Environment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerArn" }),
        __metadata("design:type", String)
    ], Environment.prototype, "ownerArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Environment.prototype, "type", void 0);
    return Environment;
}(SpeakeasyBase));
export { Environment };
