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
import { BatchAddFacetToObject } from "./batchaddfacettoobject";
import { BatchAttachObject } from "./batchattachobject";
import { BatchAttachPolicy } from "./batchattachpolicy";
import { BatchAttachToIndex } from "./batchattachtoindex";
import { BatchAttachTypedLink } from "./batchattachtypedlink";
import { BatchCreateIndex } from "./batchcreateindex";
import { BatchCreateObject } from "./batchcreateobject";
import { BatchDeleteObject } from "./batchdeleteobject";
import { BatchDetachFromIndex } from "./batchdetachfromindex";
import { BatchDetachObject } from "./batchdetachobject";
import { BatchDetachPolicy } from "./batchdetachpolicy";
import { BatchDetachTypedLink } from "./batchdetachtypedlink";
import { BatchRemoveFacetFromObject } from "./batchremovefacetfromobject";
import { BatchUpdateLinkAttributes } from "./batchupdatelinkattributes";
import { BatchUpdateObjectAttributes } from "./batchupdateobjectattributes";
// BatchWriteOperation
/**
 * Represents the output of a <code>BatchWrite</code> operation.
**/
var BatchWriteOperation = /** @class */ (function (_super) {
    __extends(BatchWriteOperation, _super);
    function BatchWriteOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AddFacetToObject" }),
        __metadata("design:type", BatchAddFacetToObject)
    ], BatchWriteOperation.prototype, "addFacetToObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttachObject" }),
        __metadata("design:type", BatchAttachObject)
    ], BatchWriteOperation.prototype, "attachObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttachPolicy" }),
        __metadata("design:type", BatchAttachPolicy)
    ], BatchWriteOperation.prototype, "attachPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttachToIndex" }),
        __metadata("design:type", BatchAttachToIndex)
    ], BatchWriteOperation.prototype, "attachToIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttachTypedLink" }),
        __metadata("design:type", BatchAttachTypedLink)
    ], BatchWriteOperation.prototype, "attachTypedLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateIndex" }),
        __metadata("design:type", BatchCreateIndex)
    ], BatchWriteOperation.prototype, "createIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateObject" }),
        __metadata("design:type", BatchCreateObject)
    ], BatchWriteOperation.prototype, "createObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeleteObject" }),
        __metadata("design:type", BatchDeleteObject)
    ], BatchWriteOperation.prototype, "deleteObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DetachFromIndex" }),
        __metadata("design:type", BatchDetachFromIndex)
    ], BatchWriteOperation.prototype, "detachFromIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DetachObject" }),
        __metadata("design:type", BatchDetachObject)
    ], BatchWriteOperation.prototype, "detachObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DetachPolicy" }),
        __metadata("design:type", BatchDetachPolicy)
    ], BatchWriteOperation.prototype, "detachPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DetachTypedLink" }),
        __metadata("design:type", BatchDetachTypedLink)
    ], BatchWriteOperation.prototype, "detachTypedLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoveFacetFromObject" }),
        __metadata("design:type", BatchRemoveFacetFromObject)
    ], BatchWriteOperation.prototype, "removeFacetFromObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateLinkAttributes" }),
        __metadata("design:type", BatchUpdateLinkAttributes)
    ], BatchWriteOperation.prototype, "updateLinkAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateObjectAttributes" }),
        __metadata("design:type", BatchUpdateObjectAttributes)
    ], BatchWriteOperation.prototype, "updateObjectAttributes", void 0);
    return BatchWriteOperation;
}(SpeakeasyBase));
export { BatchWriteOperation };
