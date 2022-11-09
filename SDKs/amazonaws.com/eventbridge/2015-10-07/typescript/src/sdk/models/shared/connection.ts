import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";
import { ConnectionStateEnum } from "./connectionstateenum";


// Connection
/** 
 * Contains information about a connection.
**/
export class Connection extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizationType" })
  authorizationType?: ConnectionAuthorizationTypeEnum;

  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @Metadata({ data: "json, name=ConnectionState" })
  connectionState?: ConnectionStateEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastAuthorizedTime" })
  lastAuthorizedTime?: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=StateReason" })
  stateReason?: string;
}
