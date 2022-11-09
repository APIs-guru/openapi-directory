import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExportSummary } from "./exportsummary";


export class ListExportsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExportSummaries", elemType: shared.ExportSummary })
  exportSummaries?: ExportSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
