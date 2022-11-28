import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistryListItem } from "./registrylistitem";



export class ListRegistriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Registries", elemType: RegistryListItem })
  registries?: RegistryListItem[];
}
