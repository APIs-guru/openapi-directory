import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationComponent } from "./applicationcomponent";



export class ListComponentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationComponentList", elemType: ApplicationComponent })
  applicationComponentList?: ApplicationComponent[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
