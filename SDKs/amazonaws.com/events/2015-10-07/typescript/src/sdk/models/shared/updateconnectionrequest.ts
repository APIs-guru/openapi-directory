import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateConnectionAuthRequestParameters } from "./updateconnectionauthrequestparameters";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";



export class UpdateConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthParameters" })
  authParameters?: UpdateConnectionAuthRequestParameters;

  @SpeakeasyMetadata({ data: "json, name=AuthorizationType" })
  authorizationType?: ConnectionAuthorizationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
