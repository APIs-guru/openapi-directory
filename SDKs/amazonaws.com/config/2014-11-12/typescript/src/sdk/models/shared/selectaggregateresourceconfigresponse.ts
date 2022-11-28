import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryInfo } from "./queryinfo";



export class SelectAggregateResourceConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=QueryInfo" })
  queryInfo?: QueryInfo;

  @SpeakeasyMetadata({ data: "json, name=Results" })
  results?: string[];
}
