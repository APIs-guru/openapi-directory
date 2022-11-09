import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoutedResource } from "./routedresource";


export class ListInputRoutingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=routedResources", elemType: shared.RoutedResource })
  routedResources?: RoutedResource[];
}
