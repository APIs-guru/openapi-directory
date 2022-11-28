import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAggregationAuthorizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizedAccountId" })
  authorizedAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=AuthorizedAwsRegion" })
  authorizedAwsRegion: string;
}
