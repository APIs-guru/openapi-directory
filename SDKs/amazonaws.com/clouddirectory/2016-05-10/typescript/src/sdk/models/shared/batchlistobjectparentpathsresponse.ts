import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PathToObjectIdentifiers } from "./pathtoobjectidentifiers";



// BatchListObjectParentPathsResponse
/** 
 * Represents the output of a <a>ListObjectParentPaths</a> response operation.
**/
export class BatchListObjectParentPathsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PathToObjectIdentifiersList", elemType: PathToObjectIdentifiers })
  pathToObjectIdentifiersList?: PathToObjectIdentifiers[];
}
