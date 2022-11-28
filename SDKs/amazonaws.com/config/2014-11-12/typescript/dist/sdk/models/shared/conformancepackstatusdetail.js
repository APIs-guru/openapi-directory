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
import { ConformancePackStateEnum } from "./conformancepackstateenum";
// ConformancePackStatusDetail
/**
 * Status details of a conformance pack.
**/
var ConformancePackStatusDetail = /** @class */ (function (_super) {
    __extends(ConformancePackStatusDetail, _super);
    function ConformancePackStatusDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConformancePackArn" }),
        __metadata("design:type", String)
    ], ConformancePackStatusDetail.prototype, "conformancePackArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConformancePackId" }),
        __metadata("design:type", String)
    ], ConformancePackStatusDetail.prototype, "conformancePackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConformancePackName" }),
        __metadata("design:type", String)
    ], ConformancePackStatusDetail.prototype, "conformancePackName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConformancePackState" }),
        __metadata("design:type", String)
    ], ConformancePackStatusDetail.prototype, "conformancePackState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConformancePackStatusReason" }),
        __metadata("design:type", String)
    ], ConformancePackStatusDetail.prototype, "conformancePackStatusReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateCompletedTime" }),
        __metadata("design:type", Date)
    ], ConformancePackStatusDetail.prototype, "lastUpdateCompletedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateRequestedTime" }),
        __metadata("design:type", Date)
    ], ConformancePackStatusDetail.prototype, "lastUpdateRequestedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StackArn" }),
        __metadata("design:type", String)
    ], ConformancePackStatusDetail.prototype, "stackArn", void 0);
    return ConformancePackStatusDetail;
}(SpeakeasyBase));
export { ConformancePackStatusDetail };
