import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateManagedEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualClusterId" })
  virtualClusterId?: string;
}
