import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateConnectionAuthRequestParameters } from "./createconnectionauthrequestparameters";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";


export class CreateConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthParameters" })
  authParameters: CreateConnectionAuthRequestParameters;

  @Metadata({ data: "json, name=AuthorizationType" })
  authorizationType: ConnectionAuthorizationTypeEnum;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
