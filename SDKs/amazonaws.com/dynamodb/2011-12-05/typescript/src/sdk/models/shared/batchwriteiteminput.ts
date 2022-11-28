import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WriteRequest } from "./writerequest";



export class BatchWriteItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RequestItems", elemType: WriteRequest, elemDepth: 2 })
  requestItems: Map<string, WriteRequest[]>;
}
