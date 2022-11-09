import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResultSet } from "./resultset";


export class GetScreenDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=results", elemType: shared.ResultSet })
  results: Map<string, ResultSet>;

  @Metadata({ data: "json, name=workbookCursor" })
  workbookCursor: number;
}
