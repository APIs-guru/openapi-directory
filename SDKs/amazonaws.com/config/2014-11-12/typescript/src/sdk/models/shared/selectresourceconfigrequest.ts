import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SelectResourceConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Expression" })
  expression: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
