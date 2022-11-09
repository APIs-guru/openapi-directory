import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Report } from "./report";


export class BatchGetReportsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=reports", elemType: shared.Report })
  reports?: Report[];

  @Metadata({ data: "json, name=reportsNotFound" })
  reportsNotFound?: string[];
}
