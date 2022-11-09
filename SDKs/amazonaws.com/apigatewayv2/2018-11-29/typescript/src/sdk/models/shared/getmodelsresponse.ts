import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Model } from "./model";


export class GetModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.Model })
  items?: Model[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
