import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAggregationAuthorizationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizedAccountId" })
  authorizedAccountId: string;

  @Metadata({ data: "json, name=AuthorizedAwsRegion" })
  authorizedAwsRegion: string;
}
