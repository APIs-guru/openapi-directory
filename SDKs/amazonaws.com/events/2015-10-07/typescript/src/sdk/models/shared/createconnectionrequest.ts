import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateConnectionAuthRequestParameters } from "./createconnectionauthrequestparameters";
import { ConnectionAuthorizationTypeEnum } from "./connectionauthorizationtypeenum";



export class CreateConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthParameters" })
  authParameters: CreateConnectionAuthRequestParameters;

  @SpeakeasyMetadata({ data: "json, name=AuthorizationType" })
  authorizationType: ConnectionAuthorizationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
