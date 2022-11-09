import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Bucket } from "./bucket";


export class GetBucketsAggregationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=buckets", elemType: shared.Bucket })
  buckets?: Bucket[];

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
