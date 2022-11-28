import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Stage } from "./stage";



export class GetStagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: Stage })
  items?: Stage[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
