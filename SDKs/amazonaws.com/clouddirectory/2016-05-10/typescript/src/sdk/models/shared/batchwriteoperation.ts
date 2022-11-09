import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=AddFacetToObject" })
  addFacetToObject?: BatchAddFacetToObject;

  @Metadata({ data: "json, name=AttachObject" })
  attachObject?: BatchAttachObject;

  @Metadata({ data: "json, name=AttachPolicy" })
  attachPolicy?: BatchAttachPolicy;

  @Metadata({ data: "json, name=AttachToIndex" })
  attachToIndex?: BatchAttachToIndex;

  @Metadata({ data: "json, name=AttachTypedLink" })
  attachTypedLink?: BatchAttachTypedLink;

  @Metadata({ data: "json, name=CreateIndex" })
  createIndex?: BatchCreateIndex;

  @Metadata({ data: "json, name=CreateObject" })
  createObject?: BatchCreateObject;

  @Metadata({ data: "json, name=DeleteObject" })
  deleteObject?: BatchDeleteObject;

  @Metadata({ data: "json, name=DetachFromIndex" })
  detachFromIndex?: BatchDetachFromIndex;

  @Metadata({ data: "json, name=DetachObject" })
  detachObject?: BatchDetachObject;

  @Metadata({ data: "json, name=DetachPolicy" })
  detachPolicy?: BatchDetachPolicy;

  @Metadata({ data: "json, name=DetachTypedLink" })
  detachTypedLink?: BatchDetachTypedLink;

  @Metadata({ data: "json, name=RemoveFacetFromObject" })
  removeFacetFromObject?: BatchRemoveFacetFromObject;

  @Metadata({ data: "json, name=UpdateLinkAttributes" })
  updateLinkAttributes?: BatchUpdateLinkAttributes;

  @Metadata({ data: "json, name=UpdateObjectAttributes" })
  updateObjectAttributes?: BatchUpdateObjectAttributes;
}
