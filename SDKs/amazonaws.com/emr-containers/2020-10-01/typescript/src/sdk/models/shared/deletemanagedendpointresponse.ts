import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteManagedEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualClusterId" })
  virtualClusterId?: string;
}
