import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PathToObjectIdentifiers } from "./pathtoobjectidentifiers";


// BatchListObjectParentPathsResponse
/** 
 * Represents the output of a <a>ListObjectParentPaths</a> response operation.
**/
export class BatchListObjectParentPathsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PathToObjectIdentifiersList", elemType: shared.PathToObjectIdentifiers })
  pathToObjectIdentifiersList?: PathToObjectIdentifiers[];
}
