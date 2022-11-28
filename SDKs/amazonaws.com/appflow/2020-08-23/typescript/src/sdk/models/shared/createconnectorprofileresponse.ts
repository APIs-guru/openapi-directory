import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateConnectorProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorProfileArn" })
  connectorProfileArn?: string;
}
