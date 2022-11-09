import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteManagedEndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=virtualClusterId" })
  virtualClusterId?: string;
}
