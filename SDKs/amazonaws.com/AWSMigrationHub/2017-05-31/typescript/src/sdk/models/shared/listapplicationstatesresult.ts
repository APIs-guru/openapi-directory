import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationState } from "./applicationstate";



export class ListApplicationStatesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationStateList", elemType: ApplicationState })
  applicationStateList?: ApplicationState[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
