import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdFormat } from "./idformat";



export class DescribeIdentityIdFormatResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: IdFormat })
  statuses?: IdFormat[];
}
