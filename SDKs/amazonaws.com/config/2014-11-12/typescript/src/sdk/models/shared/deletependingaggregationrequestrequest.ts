import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePendingAggregationRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RequesterAccountId" })
  requesterAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=RequesterAwsRegion" })
  requesterAwsRegion: string;
}
