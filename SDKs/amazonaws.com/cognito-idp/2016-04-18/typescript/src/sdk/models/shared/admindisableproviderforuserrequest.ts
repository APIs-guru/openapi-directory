import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProviderUserIdentifierType } from "./provideruseridentifiertype";


export class AdminDisableProviderForUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=User" })
  user: ProviderUserIdentifierType;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
