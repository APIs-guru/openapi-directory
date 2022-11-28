import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeKeyAndValue } from "./attributekeyandvalue";



// BatchListObjectAttributesResponse
/** 
 * Represents the output of a <a>ListObjectAttributes</a> response operation.
**/
export class BatchListObjectAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: AttributeKeyAndValue })
  attributes?: AttributeKeyAndValue[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
