import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationComponent } from "./applicationcomponent";


export class ListComponentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationComponentList", elemType: shared.ApplicationComponent })
  applicationComponentList?: ApplicationComponent[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
