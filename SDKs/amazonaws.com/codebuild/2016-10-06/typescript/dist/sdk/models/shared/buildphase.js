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
import { PhaseContext } from "./phasecontext";
import { StatusTypeEnum } from "./statustypeenum";
import { BuildPhaseTypeEnum } from "./buildphasetypeenum";
// BuildPhase
/**
 * Information about a stage for a build.
**/
var BuildPhase = /** @class */ (function (_super) {
    __extends(BuildPhase, _super);
    function BuildPhase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contexts", elemType: PhaseContext }),
        __metadata("design:type", Array)
    ], BuildPhase.prototype, "contexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationInSeconds" }),
        __metadata("design:type", Number)
    ], BuildPhase.prototype, "durationInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], BuildPhase.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phaseStatus" }),
        __metadata("design:type", String)
    ], BuildPhase.prototype, "phaseStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phaseType" }),
        __metadata("design:type", String)
    ], BuildPhase.prototype, "phaseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], BuildPhase.prototype, "startTime", void 0);
    return BuildPhase;
}(SpeakeasyBase));
export { BuildPhase };
