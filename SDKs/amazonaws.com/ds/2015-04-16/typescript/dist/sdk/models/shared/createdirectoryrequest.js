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
import * as shared from "../shared";
import { DirectorySizeEnum } from "./directorysizeenum";
import { DirectoryVpcSettings } from "./directoryvpcsettings";
// CreateDirectoryRequest
/**
 * Contains the inputs for the <a>CreateDirectory</a> operation.
**/
var CreateDirectoryRequest = /** @class */ (function (_super) {
    __extends(CreateDirectoryRequest, _super);
    function CreateDirectoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateDirectoryRequest.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateDirectoryRequest.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], CreateDirectoryRequest.prototype, "password", void 0);
    __decorate([
        Metadata({ data: "json, name=ShortName" }),
        __metadata("design:type", String)
    ], CreateDirectoryRequest.prototype, "shortName", void 0);
    __decorate([
        Metadata({ data: "json, name=Size" }),
        __metadata("design:type", String)
    ], CreateDirectoryRequest.prototype, "size", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateDirectoryRequest.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=VpcSettings" }),
        __metadata("design:type", DirectoryVpcSettings)
    ], CreateDirectoryRequest.prototype, "vpcSettings", void 0);
    return CreateDirectoryRequest;
}(SpeakeasyBase));
export { CreateDirectoryRequest };
