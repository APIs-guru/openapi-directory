import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectorConfigResponse
/** 
 * The full description of your connected cluster.
**/
export class ConnectorConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationCode" })
  activationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=activationExpiry" })
  activationExpiry?: Date;

  @SpeakeasyMetadata({ data: "json, name=activationId" })
  activationId?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
