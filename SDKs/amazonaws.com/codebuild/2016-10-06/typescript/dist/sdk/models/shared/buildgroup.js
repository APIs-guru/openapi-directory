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
import { BuildSummary } from "./buildsummary";
// BuildGroup
/**
 * Contains information about a batch build build group. Build groups are used to combine builds that can run in parallel, while still being able to set dependencies on other build groups.
**/
var BuildGroup = /** @class */ (function (_super) {
    __extends(BuildGroup, _super);
    function BuildGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentBuildSummary" }),
        __metadata("design:type", BuildSummary)
    ], BuildGroup.prototype, "currentBuildSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dependsOn" }),
        __metadata("design:type", Array)
    ], BuildGroup.prototype, "dependsOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], BuildGroup.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreFailure" }),
        __metadata("design:type", Boolean)
    ], BuildGroup.prototype, "ignoreFailure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priorBuildSummaryList", elemType: BuildSummary }),
        __metadata("design:type", Array)
    ], BuildGroup.prototype, "priorBuildSummaryList", void 0);
    return BuildGroup;
}(SpeakeasyBase));
export { BuildGroup };
