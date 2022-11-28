import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";



export class BatchGetReportsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reports", elemType: Report })
  reports?: Report[];

  @SpeakeasyMetadata({ data: "json, name=reportsNotFound" })
  reportsNotFound?: string[];
}
