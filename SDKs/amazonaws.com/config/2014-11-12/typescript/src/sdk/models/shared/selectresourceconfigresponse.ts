import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryInfo } from "./queryinfo";


export class SelectResourceConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=QueryInfo" })
  queryInfo?: QueryInfo;

  @Metadata({ data: "json, name=Results" })
  results?: string[];
}
