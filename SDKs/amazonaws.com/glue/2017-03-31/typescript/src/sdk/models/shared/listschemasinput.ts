import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistryId } from "./registryid";



export class ListSchemasInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryId" })
  registryId?: RegistryId;
}
