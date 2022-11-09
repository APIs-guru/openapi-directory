import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchAttachObjectResponse } from "./batchattachobjectresponse";
import { BatchAttachToIndexResponse } from "./batchattachtoindexresponse";
import { BatchAttachTypedLinkResponse } from "./batchattachtypedlinkresponse";
import { BatchCreateIndexResponse } from "./batchcreateindexresponse";
import { BatchCreateObjectResponse } from "./batchcreateobjectresponse";
import { BatchDetachFromIndexResponse } from "./batchdetachfromindexresponse";
import { BatchDetachObjectResponse } from "./batchdetachobjectresponse";
import { BatchUpdateObjectAttributesResponse } from "./batchupdateobjectattributesresponse";


// BatchWriteOperationResponse
/** 
 * Represents the output of a <code>BatchWrite</code> response operation.
**/
export class BatchWriteOperationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddFacetToObject" })
  addFacetToObject?: Map<string, any>;

  @Metadata({ data: "json, name=AttachObject" })
  attachObject?: BatchAttachObjectResponse;

  @Metadata({ data: "json, name=AttachPolicy" })
  attachPolicy?: Map<string, any>;

  @Metadata({ data: "json, name=AttachToIndex" })
  attachToIndex?: BatchAttachToIndexResponse;

  @Metadata({ data: "json, name=AttachTypedLink" })
  attachTypedLink?: BatchAttachTypedLinkResponse;

  @Metadata({ data: "json, name=CreateIndex" })
  createIndex?: BatchCreateIndexResponse;

  @Metadata({ data: "json, name=CreateObject" })
  createObject?: BatchCreateObjectResponse;

  @Metadata({ data: "json, name=DeleteObject" })
  deleteObject?: Map<string, any>;

  @Metadata({ data: "json, name=DetachFromIndex" })
  detachFromIndex?: BatchDetachFromIndexResponse;

  @Metadata({ data: "json, name=DetachObject" })
  detachObject?: BatchDetachObjectResponse;

  @Metadata({ data: "json, name=DetachPolicy" })
  detachPolicy?: Map<string, any>;

  @Metadata({ data: "json, name=DetachTypedLink" })
  detachTypedLink?: Map<string, any>;

  @Metadata({ data: "json, name=RemoveFacetFromObject" })
  removeFacetFromObject?: Map<string, any>;

  @Metadata({ data: "json, name=UpdateLinkAttributes" })
  updateLinkAttributes?: Map<string, any>;

  @Metadata({ data: "json, name=UpdateObjectAttributes" })
  updateObjectAttributes?: BatchUpdateObjectAttributesResponse;
}
