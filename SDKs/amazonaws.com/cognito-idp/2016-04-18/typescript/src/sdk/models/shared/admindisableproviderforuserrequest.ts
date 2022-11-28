import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderUserIdentifierType } from "./provideruseridentifiertype";



export class AdminDisableProviderForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=User" })
  user: ProviderUserIdentifierType;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
