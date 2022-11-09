import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectorConfigResponse
/** 
 * The full description of your connected cluster.
**/
export class ConnectorConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activationCode" })
  activationCode?: string;

  @Metadata({ data: "json, name=activationExpiry" })
  activationExpiry?: Date;

  @Metadata({ data: "json, name=activationId" })
  activationId?: string;

  @Metadata({ data: "json, name=provider" })
  provider?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
