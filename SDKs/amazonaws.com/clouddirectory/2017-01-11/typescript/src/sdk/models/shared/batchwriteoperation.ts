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
export class BatchWriteOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddFacetToObject" })
  addFacetToObject?: BatchAddFacetToObject;

  @SpeakeasyMetadata({ data: "json, name=AttachObject" })
  attachObject?: BatchAttachObject;

  @SpeakeasyMetadata({ data: "json, name=AttachPolicy" })
  attachPolicy?: BatchAttachPolicy;

  @SpeakeasyMetadata({ data: "json, name=AttachToIndex" })
  attachToIndex?: BatchAttachToIndex;

  @SpeakeasyMetadata({ data: "json, name=AttachTypedLink" })
  attachTypedLink?: BatchAttachTypedLink;

  @SpeakeasyMetadata({ data: "json, name=CreateIndex" })
  createIndex?: BatchCreateIndex;

  @SpeakeasyMetadata({ data: "json, name=CreateObject" })
  createObject?: BatchCreateObject;

  @SpeakeasyMetadata({ data: "json, name=DeleteObject" })
  deleteObject?: BatchDeleteObject;

  @SpeakeasyMetadata({ data: "json, name=DetachFromIndex" })
  detachFromIndex?: BatchDetachFromIndex;

  @SpeakeasyMetadata({ data: "json, name=DetachObject" })
  detachObject?: BatchDetachObject;

  @SpeakeasyMetadata({ data: "json, name=DetachPolicy" })
  detachPolicy?: BatchDetachPolicy;

  @SpeakeasyMetadata({ data: "json, name=DetachTypedLink" })
  detachTypedLink?: BatchDetachTypedLink;

  @SpeakeasyMetadata({ data: "json, name=RemoveFacetFromObject" })
  removeFacetFromObject?: BatchRemoveFacetFromObject;

  @SpeakeasyMetadata({ data: "json, name=UpdateLinkAttributes" })
  updateLinkAttributes?: BatchUpdateLinkAttributes;

  @SpeakeasyMetadata({ data: "json, name=UpdateObjectAttributes" })
  updateObjectAttributes?: BatchUpdateObjectAttributes;
}
