import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregatedSourceStatusTypeEnum } from "./aggregatedsourcestatustypeenum";
import { AggregatedSourceTypeEnum } from "./aggregatedsourcetypeenum";



// AggregatedSourceStatus
/** 
 * The current sync status between the source and the aggregator account.
**/
export class AggregatedSourceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=LastErrorCode" })
  lastErrorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=LastErrorMessage" })
  lastErrorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateStatus" })
  lastUpdateStatus?: AggregatedSourceStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SourceId" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: AggregatedSourceTypeEnum;
}
