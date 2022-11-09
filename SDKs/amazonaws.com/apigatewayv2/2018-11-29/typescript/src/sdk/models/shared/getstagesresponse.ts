import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Stage } from "./stage";


export class GetStagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.Stage })
  items?: Stage[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
