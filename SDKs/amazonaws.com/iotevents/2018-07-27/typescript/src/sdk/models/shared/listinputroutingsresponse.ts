import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoutedResource } from "./routedresource";



export class ListInputRoutingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=routedResources", elemType: RoutedResource })
  routedResources?: RoutedResource[];
}
