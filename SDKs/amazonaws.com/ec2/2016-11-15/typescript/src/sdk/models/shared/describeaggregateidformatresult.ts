import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdFormat } from "./idformat";



export class DescribeAggregateIdFormatResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: IdFormat })
  statuses?: IdFormat[];

  @SpeakeasyMetadata()
  useLongIdsAggregated?: boolean;
}
