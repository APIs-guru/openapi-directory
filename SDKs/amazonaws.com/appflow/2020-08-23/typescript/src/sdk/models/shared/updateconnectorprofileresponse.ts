import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateConnectorProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorProfileArn" })
  connectorProfileArn?: string;
}
