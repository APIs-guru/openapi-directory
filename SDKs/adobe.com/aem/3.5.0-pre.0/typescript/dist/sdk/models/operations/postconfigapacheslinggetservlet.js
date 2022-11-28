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
var PostConfigApacheSlingGetServletQueryParams = /** @class */ (function (_super) {
    __extends(PostConfigApacheSlingGetServletQueryParams, _super);
    function PostConfigApacheSlingGetServletQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enable.html" }),
        __metadata("design:type", Boolean)
    ], PostConfigApacheSlingGetServletQueryParams.prototype, "enableHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enable.html@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingGetServletQueryParams.prototype, "enableHtmlAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enable.txt" }),
        __metadata("design:type", Boolean)
    ], PostConfigApacheSlingGetServletQueryParams.prototype, "enableTxt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enable.txt@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingGetServletQueryParams.prototype, "enableTxtAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enable.xml" }),
        __metadata("design:type", Boolean)
    ], PostConfigApacheSlingGetServletQueryParams.prototype, "enableXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enable.xml@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingGetServletQueryParams.prototype, "enableXmlAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=json.maximumresults" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingGetServletQueryParams.prototype, "jsonMaximumresults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=json.maximumresults@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheSlingGetServletQueryParams.prototype, "jsonMaximumresultsAtTypeHint", void 0);
    return PostConfigApacheSlingGetServletQueryParams;
}(SpeakeasyBase));
export { PostConfigApacheSlingGetServletQueryParams };
var PostConfigApacheSlingGetServletRequest = /** @class */ (function (_super) {
    __extends(PostConfigApacheSlingGetServletRequest, _super);
    function PostConfigApacheSlingGetServletRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostConfigApacheSlingGetServletQueryParams)
    ], PostConfigApacheSlingGetServletRequest.prototype, "queryParams", void 0);
    return PostConfigApacheSlingGetServletRequest;
}(SpeakeasyBase));
export { PostConfigApacheSlingGetServletRequest };
var PostConfigApacheSlingGetServletResponse = /** @class */ (function (_super) {
    __extends(PostConfigApacheSlingGetServletResponse, _super);
    function PostConfigApacheSlingGetServletResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostConfigApacheSlingGetServletResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostConfigApacheSlingGetServletResponse.prototype, "statusCode", void 0);
    return PostConfigApacheSlingGetServletResponse;
}(SpeakeasyBase));
export { PostConfigApacheSlingGetServletResponse };
