import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProviderUserIdentifierType } from "./provideruseridentifiertype";
import { ProviderUserIdentifierType } from "./provideruseridentifiertype";


export class AdminLinkProviderForUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationUser" })
  destinationUser: ProviderUserIdentifierType;

  @Metadata({ data: "json, name=SourceUser" })
  sourceUser: ProviderUserIdentifierType;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
