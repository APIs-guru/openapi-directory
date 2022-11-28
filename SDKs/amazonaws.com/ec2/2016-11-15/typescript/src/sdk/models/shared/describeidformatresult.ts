import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdFormat } from "./idformat";



export class DescribeIdFormatResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: IdFormat })
  statuses?: IdFormat[];
}
