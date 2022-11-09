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
// GitHubCodeDestination
/**
 * Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.
**/
var GitHubCodeDestination = /** @class */ (function (_super) {
    __extends(GitHubCodeDestination, _super);
    function GitHubCodeDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GitHubCodeDestination.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=issuesEnabled" }),
        __metadata("design:type", Boolean)
    ], GitHubCodeDestination.prototype, "issuesEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GitHubCodeDestination.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], GitHubCodeDestination.prototype, "owner", void 0);
    __decorate([
        Metadata({ data: "json, name=privateRepository" }),
        __metadata("design:type", Boolean)
    ], GitHubCodeDestination.prototype, "privateRepository", void 0);
    __decorate([
        Metadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], GitHubCodeDestination.prototype, "token", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GitHubCodeDestination.prototype, "type", void 0);
    return GitHubCodeDestination;
}(SpeakeasyBase));
export { GitHubCodeDestination };
