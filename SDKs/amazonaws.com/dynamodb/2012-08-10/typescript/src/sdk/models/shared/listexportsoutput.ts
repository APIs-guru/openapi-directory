import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportSummary } from "./exportsummary";



export class ListExportsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExportSummaries", elemType: ExportSummary })
  exportSummaries?: ExportSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
