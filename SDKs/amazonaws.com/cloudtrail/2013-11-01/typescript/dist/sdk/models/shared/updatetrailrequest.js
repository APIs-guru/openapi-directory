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
// UpdateTrailRequest
/**
 * Specifies settings to update for the trail.
**/
var UpdateTrailRequest = /** @class */ (function (_super) {
    __extends(UpdateTrailRequest, _super);
    function UpdateTrailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CloudWatchLogsLogGroupArn" }),
        __metadata("design:type", String)
    ], UpdateTrailRequest.prototype, "cloudWatchLogsLogGroupArn", void 0);
    __decorate([
        Metadata({ data: "json, name=CloudWatchLogsRoleArn" }),
        __metadata("design:type", String)
    ], UpdateTrailRequest.prototype, "cloudWatchLogsRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=EnableLogFileValidation" }),
        __metadata("design:type", Boolean)
    ], UpdateTrailRequest.prototype, "enableLogFileValidation", void 0);
    __decorate([
        Metadata({ data: "json, name=IncludeGlobalServiceEvents" }),
        __metadata("design:type", Boolean)
    ], UpdateTrailRequest.prototype, "includeGlobalServiceEvents", void 0);
    __decorate([
        Metadata({ data: "json, name=IsMultiRegionTrail" }),
        __metadata("design:type", Boolean)
    ], UpdateTrailRequest.prototype, "isMultiRegionTrail", void 0);
    __decorate([
        Metadata({ data: "json, name=IsOrganizationTrail" }),
        __metadata("design:type", Boolean)
    ], UpdateTrailRequest.prototype, "isOrganizationTrail", void 0);
    __decorate([
        Metadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], UpdateTrailRequest.prototype, "kmsKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateTrailRequest.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=S3BucketName" }),
        __metadata("design:type", String)
    ], UpdateTrailRequest.prototype, "s3BucketName", void 0);
    __decorate([
        Metadata({ data: "json, name=S3KeyPrefix" }),
        __metadata("design:type", String)
    ], UpdateTrailRequest.prototype, "s3KeyPrefix", void 0);
    __decorate([
        Metadata({ data: "json, name=SnsTopicName" }),
        __metadata("design:type", String)
    ], UpdateTrailRequest.prototype, "snsTopicName", void 0);
    return UpdateTrailRequest;
}(SpeakeasyBase));
export { UpdateTrailRequest };
