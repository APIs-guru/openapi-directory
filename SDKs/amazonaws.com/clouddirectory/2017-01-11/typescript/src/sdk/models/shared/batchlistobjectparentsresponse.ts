import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectIdentifierAndLinkNameTuple } from "./objectidentifierandlinknametuple";



// BatchListObjectParentsResponse
/** 
 * Represents the output of a <a>ListObjectParents</a> response operation.
**/
export class BatchListObjectParentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentLinks", elemType: ObjectIdentifierAndLinkNameTuple })
  parentLinks?: ObjectIdentifierAndLinkNameTuple[];
}
