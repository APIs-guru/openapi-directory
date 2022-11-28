import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PathToObjectIdentifiers } from "./pathtoobjectidentifiers";



export class ListObjectParentPathsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PathToObjectIdentifiersList", elemType: PathToObjectIdentifiers })
  pathToObjectIdentifiersList?: PathToObjectIdentifiers[];
}
