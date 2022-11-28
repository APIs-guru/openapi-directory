import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderUserIdentifierType } from "./provideruseridentifiertype";



export class AdminLinkProviderForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationUser" })
  destinationUser: ProviderUserIdentifierType;

  @SpeakeasyMetadata({ data: "json, name=SourceUser" })
  sourceUser: ProviderUserIdentifierType;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
