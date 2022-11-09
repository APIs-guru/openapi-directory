import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PathToObjectIdentifiers } from "./pathtoobjectidentifiers";


export class ListObjectParentPathsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PathToObjectIdentifiersList", elemType: shared.PathToObjectIdentifiers })
  pathToObjectIdentifiersList?: PathToObjectIdentifiers[];
}
