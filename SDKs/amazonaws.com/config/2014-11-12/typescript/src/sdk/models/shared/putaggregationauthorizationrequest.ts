import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class PutAggregationAuthorizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizedAccountId" })
  authorizedAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=AuthorizedAwsRegion" })
  authorizedAwsRegion: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
