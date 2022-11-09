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
// Statistics
/**
 * Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a>CreateDatasetImportJob</a> operation.
**/
var Statistics = /** @class */ (function (_super) {
    __extends(Statistics, _super);
    function Statistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Avg" }),
        __metadata("design:type", Number)
    ], Statistics.prototype, "avg", void 0);
    __decorate([
        Metadata({ data: "json, name=Count" }),
        __metadata("design:type", Number)
    ], Statistics.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "json, name=CountDistinct" }),
        __metadata("design:type", Number)
    ], Statistics.prototype, "countDistinct", void 0);
    __decorate([
        Metadata({ data: "json, name=CountDistinctLong" }),
        __metadata("design:type", Number)
    ], Statistics.prototype, "countDistinctLong", void 0);
    __decorate([
        Metadata({ data: "json, name=CountLong" }),
        __metadata("design:type", Number)
    ], Statistics.prototype, "countLong", void 0);
    __decorate([
        Metadata({ data: "json, name=CountNan" }),
        __metadata("design:type", Number)
    ], Statistics.prototype, "countNan", void 0);
    __decorate([
        Metadata({ data: "json, name=CountNanLong" }),
        __metadata("design:type", Number)
    ], Statistics.prototype, "countNanLong", void 0);
    __decorate([
        Metadata({ data: "json, name=CountNull" }),
        __metadata("design:type", Number)
    ], Statistics.prototype, "countNull", void 0);
    __decorate([
        Metadata({ data: "json, name=CountNullLong" }),
        __metadata("design:type", Number)
    ], Statistics.prototype, "countNullLong", void 0);
    __decorate([
        Metadata({ data: "json, name=Max" }),
        __metadata("design:type", String)
    ], Statistics.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "json, name=Min" }),
        __metadata("design:type", String)
    ], Statistics.prototype, "min", void 0);
    __decorate([
        Metadata({ data: "json, name=Stddev" }),
        __metadata("design:type", Number)
    ], Statistics.prototype, "stddev", void 0);
    return Statistics;
}(SpeakeasyBase));
export { Statistics };
