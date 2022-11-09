import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationState } from "./applicationstate";


export class ListApplicationStatesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationStateList", elemType: shared.ApplicationState })
  applicationStateList?: ApplicationState[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
