import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateConnectorProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorProfileArn" })
  connectorProfileArn?: string;
}
