import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistryId } from "./registryid";


export class ListSchemasInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RegistryId" })
  registryId?: RegistryId;
}
