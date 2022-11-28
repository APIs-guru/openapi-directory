import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryMediumTypeEnum } from "./deliverymediumtypeenum";
import { MessageActionTypeEnum } from "./messageactiontypeenum";
import { AttributeType } from "./attributetype";



// AdminCreateUserRequest
/** 
 * Represents the request to create a user in the specified user pool.
**/
export class AdminCreateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=DesiredDeliveryMediums" })
  desiredDeliveryMediums?: DeliveryMediumTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=ForceAliasCreation" })
  forceAliasCreation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MessageAction" })
  messageAction?: MessageActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TemporaryPassword" })
  temporaryPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=UserAttributes", elemType: AttributeType })
  userAttributes?: AttributeType[];

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationData", elemType: AttributeType })
  validationData?: AttributeType[];
}
