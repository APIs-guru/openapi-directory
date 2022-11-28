import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestGridSessionAction } from "./testgridsessionaction";



export class ListTestGridSessionActionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: TestGridSessionAction })
  actions?: TestGridSessionAction[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
