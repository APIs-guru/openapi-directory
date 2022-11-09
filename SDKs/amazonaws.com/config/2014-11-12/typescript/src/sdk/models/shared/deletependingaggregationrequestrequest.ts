import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePendingAggregationRequestRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RequesterAccountId" })
  requesterAccountId: string;

  @Metadata({ data: "json, name=RequesterAwsRegion" })
  requesterAwsRegion: string;
}
