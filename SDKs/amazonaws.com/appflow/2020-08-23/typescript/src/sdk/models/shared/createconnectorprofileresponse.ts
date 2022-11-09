import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateConnectorProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorProfileArn" })
  connectorProfileArn?: string;
}
