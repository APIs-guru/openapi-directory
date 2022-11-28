import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";
import { ConnectionStateEnum } from "./connectionstateenum";



// Connection
/** 
 * Contains information about a connection.
**/
export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizationType" })
  authorizationType?: ConnectionAuthorizationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectionState" })
  connectionState?: ConnectionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastAuthorizedTime" })
  lastAuthorizedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=StateReason" })
  stateReason?: string;
}
