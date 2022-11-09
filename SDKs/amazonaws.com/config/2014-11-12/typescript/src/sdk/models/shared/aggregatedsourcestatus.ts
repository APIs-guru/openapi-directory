import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregatedSourceStatusTypeEnum } from "./aggregatedsourcestatustypeenum";
import { AggregatedSourceTypeEnum } from "./aggregatedsourcetypeenum";


// AggregatedSourceStatus
/** 
 * The current sync status between the source and the aggregator account.
**/
export class AggregatedSourceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;

  @Metadata({ data: "json, name=LastErrorCode" })
  lastErrorCode?: string;

  @Metadata({ data: "json, name=LastErrorMessage" })
  lastErrorMessage?: string;

  @Metadata({ data: "json, name=LastUpdateStatus" })
  lastUpdateStatus?: AggregatedSourceStatusTypeEnum;

  @Metadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=SourceId" })
  sourceId?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: AggregatedSourceTypeEnum;
}
