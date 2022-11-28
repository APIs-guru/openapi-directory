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
import * as shared from "../shared";
var JobsPutJobPathParams = /** @class */ (function (_super) {
    __extends(JobsPutJobPathParams, _super);
    function JobsPutJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobID" }),
        __metadata("design:type", Number)
    ], JobsPutJobPathParams.prototype, "jobId", void 0);
    return JobsPutJobPathParams;
}(SpeakeasyBase));
export { JobsPutJobPathParams };
var JobsPutJobRequestsInput = /** @class */ (function (_super) {
    __extends(JobsPutJobRequestsInput, _super);
    function JobsPutJobRequestsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], JobsPutJobRequestsInput.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BuildSystemSharedDtoJobInput)
    ], JobsPutJobRequestsInput.prototype, "buildSystemSharedDtoJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.BuildSystemSharedDtoJobInput)
    ], JobsPutJobRequestsInput.prototype, "buildSystemSharedDtoJob1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.BuildSystemSharedDtoJobInput)
    ], JobsPutJobRequestsInput.prototype, "buildSystemSharedDtoJob2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], JobsPutJobRequestsInput.prototype, "textXml", void 0);
    return JobsPutJobRequestsInput;
}(SpeakeasyBase));
export { JobsPutJobRequestsInput };
var JobsPutJobRequest = /** @class */ (function (_super) {
    __extends(JobsPutJobRequest, _super);
    function JobsPutJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsPutJobPathParams)
    ], JobsPutJobRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsPutJobRequestsInput)
    ], JobsPutJobRequest.prototype, "request", void 0);
    return JobsPutJobRequest;
}(SpeakeasyBase));
export { JobsPutJobRequest };
var JobsPutJobResponse = /** @class */ (function (_super) {
    __extends(JobsPutJobResponse, _super);
    function JobsPutJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], JobsPutJobResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsPutJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsPutJobResponse.prototype, "statusCode", void 0);
    return JobsPutJobResponse;
}(SpeakeasyBase));
export { JobsPutJobResponse };
