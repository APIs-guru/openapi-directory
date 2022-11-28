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
import { TestTypeEnum } from "./testtypeenum";
// ScheduleRunTest
/**
 * Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>.
**/
var ScheduleRunTest = /** @class */ (function (_super) {
    __extends(ScheduleRunTest, _super);
    function ScheduleRunTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], ScheduleRunTest.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], ScheduleRunTest.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testPackageArn" }),
        __metadata("design:type", String)
    ], ScheduleRunTest.prototype, "testPackageArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testSpecArn" }),
        __metadata("design:type", String)
    ], ScheduleRunTest.prototype, "testSpecArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ScheduleRunTest.prototype, "type", void 0);
    return ScheduleRunTest;
}(SpeakeasyBase));
export { ScheduleRunTest };
