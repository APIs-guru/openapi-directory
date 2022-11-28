import { SpeakeasyBase } from "../../../internal/utils";
import { ProviderUserIdentifierType } from "./provideruseridentifiertype";
export declare class AdminLinkProviderForUserRequest extends SpeakeasyBase {
    destinationUser: ProviderUserIdentifierType;
    sourceUser: ProviderUserIdentifierType;
    userPoolId: string;
}
