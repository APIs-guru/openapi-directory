import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupVersion
/** 
 * Information about a group version.
**/
export class GroupVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectorDefinitionVersionArn" })
  connectorDefinitionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CoreDefinitionVersionArn" })
  coreDefinitionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceDefinitionVersionArn" })
  deviceDefinitionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionDefinitionVersionArn" })
  functionDefinitionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LoggerDefinitionVersionArn" })
  loggerDefinitionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceDefinitionVersionArn" })
  resourceDefinitionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionDefinitionVersionArn" })
  subscriptionDefinitionVersionArn?: string;
}
