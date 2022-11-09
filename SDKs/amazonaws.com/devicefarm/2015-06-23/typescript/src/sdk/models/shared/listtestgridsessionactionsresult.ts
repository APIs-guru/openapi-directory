import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TestGridSessionAction } from "./testgridsessionaction";


export class ListTestGridSessionActionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.TestGridSessionAction })
  actions?: TestGridSessionAction[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
