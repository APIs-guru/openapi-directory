import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";



export class GetBucketsAggregationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buckets", elemType: Bucket })
  buckets?: Bucket[];

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
