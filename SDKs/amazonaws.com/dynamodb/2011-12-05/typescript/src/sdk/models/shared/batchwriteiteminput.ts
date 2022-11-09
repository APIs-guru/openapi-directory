import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WriteRequest } from "./writerequest";


export class BatchWriteItemInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RequestItems", elemType: shared.WriteRequest, elemDepth: 2 })
  requestItems: Map<string, WriteRequest[]>;
}
