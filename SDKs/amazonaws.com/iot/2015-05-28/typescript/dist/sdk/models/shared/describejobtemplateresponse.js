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
import { AbortConfig } from "./abortconfig";
import { JobExecutionsRolloutConfig } from "./jobexecutionsrolloutconfig";
import { PresignedUrlConfig } from "./presignedurlconfig";
import { TimeoutConfig } from "./timeoutconfig";
var DescribeJobTemplateResponse = /** @class */ (function (_super) {
    __extends(DescribeJobTemplateResponse, _super);
    function DescribeJobTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abortConfig" }),
        __metadata("design:type", AbortConfig)
    ], DescribeJobTemplateResponse.prototype, "abortConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], DescribeJobTemplateResponse.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DescribeJobTemplateResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document" }),
        __metadata("design:type", String)
    ], DescribeJobTemplateResponse.prototype, "document", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentSource" }),
        __metadata("design:type", String)
    ], DescribeJobTemplateResponse.prototype, "documentSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobExecutionsRolloutConfig" }),
        __metadata("design:type", JobExecutionsRolloutConfig)
    ], DescribeJobTemplateResponse.prototype, "jobExecutionsRolloutConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobTemplateArn" }),
        __metadata("design:type", String)
    ], DescribeJobTemplateResponse.prototype, "jobTemplateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobTemplateId" }),
        __metadata("design:type", String)
    ], DescribeJobTemplateResponse.prototype, "jobTemplateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=presignedUrlConfig" }),
        __metadata("design:type", PresignedUrlConfig)
    ], DescribeJobTemplateResponse.prototype, "presignedUrlConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutConfig" }),
        __metadata("design:type", TimeoutConfig)
    ], DescribeJobTemplateResponse.prototype, "timeoutConfig", void 0);
    return DescribeJobTemplateResponse;
}(SpeakeasyBase));
export { DescribeJobTemplateResponse };
