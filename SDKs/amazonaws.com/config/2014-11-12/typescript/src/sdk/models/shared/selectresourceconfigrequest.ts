import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SelectResourceConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Expression" })
  expression: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
