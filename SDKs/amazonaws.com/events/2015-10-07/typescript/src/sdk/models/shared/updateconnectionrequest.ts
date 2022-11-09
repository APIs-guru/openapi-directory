import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateConnectionAuthRequestParameters } from "./updateconnectionauthrequestparameters";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";


export class UpdateConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthParameters" })
  authParameters?: UpdateConnectionAuthRequestParameters;

  @Metadata({ data: "json, name=AuthorizationType" })
  authorizationType?: ConnectionAuthorizationTypeEnum;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
