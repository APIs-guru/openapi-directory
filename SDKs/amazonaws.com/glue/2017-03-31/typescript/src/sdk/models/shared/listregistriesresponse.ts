import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegistryListItem } from "./registrylistitem";


export class ListRegistriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Registries", elemType: shared.RegistryListItem })
  registries?: RegistryListItem[];
}
