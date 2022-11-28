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
import { ProjectStatus } from "./projectstatus";
var DescribeProjectResult = /** @class */ (function (_super) {
    __extends(DescribeProjectResult, _super);
    function DescribeProjectResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], DescribeProjectResult.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], DescribeProjectResult.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdTimeStamp" }),
        __metadata("design:type", Date)
    ], DescribeProjectResult.prototype, "createdTimeStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DescribeProjectResult.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DescribeProjectResult.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DescribeProjectResult.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectTemplateId" }),
        __metadata("design:type", String)
    ], DescribeProjectResult.prototype, "projectTemplateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stackId" }),
        __metadata("design:type", String)
    ], DescribeProjectResult.prototype, "stackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", ProjectStatus)
    ], DescribeProjectResult.prototype, "status", void 0);
    return DescribeProjectResult;
}(SpeakeasyBase));
export { DescribeProjectResult };
