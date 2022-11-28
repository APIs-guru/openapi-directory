import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexStatusEnum } from "./indexstatusenum";



export class DescribeIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=indexStatus" })
  indexStatus?: IndexStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;
}
