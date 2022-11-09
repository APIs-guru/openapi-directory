import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IndexStatusEnum } from "./indexstatusenum";


export class DescribeIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexName" })
  indexName?: string;

  @Metadata({ data: "json, name=indexStatus" })
  indexStatus?: IndexStatusEnum;

  @Metadata({ data: "json, name=schema" })
  schema?: string;
}
