import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class PutAggregationAuthorizationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizedAccountId" })
  authorizedAccountId: string;

  @Metadata({ data: "json, name=AuthorizedAwsRegion" })
  authorizedAwsRegion: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
