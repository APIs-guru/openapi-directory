import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultSet } from "./resultset";



export class GetScreenDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ResultSet })
  results: Map<string, ResultSet>;

  @SpeakeasyMetadata({ data: "json, name=workbookCursor" })
  workbookCursor: number;
}
