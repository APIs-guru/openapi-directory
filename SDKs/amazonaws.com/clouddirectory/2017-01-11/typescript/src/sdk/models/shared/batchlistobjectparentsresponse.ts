import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObjectIdentifierAndLinkNameTuple } from "./objectidentifierandlinknametuple";


// BatchListObjectParentsResponse
/** 
 * Represents the output of a <a>ListObjectParents</a> response operation.
**/
export class BatchListObjectParentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ParentLinks", elemType: shared.ObjectIdentifierAndLinkNameTuple })
  parentLinks?: ObjectIdentifierAndLinkNameTuple[];
}
