import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionAuthResponseParameters } from "./connectionauthresponseparameters";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";
import { ConnectionStateEnum } from "./connectionstateenum";


export class DescribeConnectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthParameters" })
  authParameters?: ConnectionAuthResponseParameters;

  @Metadata({ data: "json, name=AuthorizationType" })
  authorizationType?: ConnectionAuthorizationTypeEnum;

  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @Metadata({ data: "json, name=ConnectionState" })
  connectionState?: ConnectionStateEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LastAuthorizedTime" })
  lastAuthorizedTime?: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SecretArn" })
  secretArn?: string;

  @Metadata({ data: "json, name=StateReason" })
  stateReason?: string;
}
