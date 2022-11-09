import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeliveryMediumTypeEnum } from "./deliverymediumtypeenum";
import { MessageActionTypeEnum } from "./messageactiontypeenum";
import { AttributeType } from "./attributetype";
import { AttributeType } from "./attributetype";


// AdminCreateUserRequest
/** 
 * Represents the request to create a user in the specified user pool.
**/
export class AdminCreateUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @Metadata({ data: "json, name=DesiredDeliveryMediums" })
  desiredDeliveryMediums?: DeliveryMediumTypeEnum[];

  @Metadata({ data: "json, name=ForceAliasCreation" })
  forceAliasCreation?: boolean;

  @Metadata({ data: "json, name=MessageAction" })
  messageAction?: MessageActionTypeEnum;

  @Metadata({ data: "json, name=TemporaryPassword" })
  temporaryPassword?: string;

  @Metadata({ data: "json, name=UserAttributes", elemType: shared.AttributeType })
  userAttributes?: AttributeType[];

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;

  @Metadata({ data: "json, name=ValidationData", elemType: shared.AttributeType })
  validationData?: AttributeType[];
}
