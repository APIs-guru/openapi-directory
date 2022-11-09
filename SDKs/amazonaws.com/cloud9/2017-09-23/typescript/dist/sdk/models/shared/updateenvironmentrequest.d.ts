import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedCredentialsActionEnum } from "./managedcredentialsactionenum";
export declare class UpdateEnvironmentRequest extends SpeakeasyBase {
    description?: string;
    environmentId: string;
    managedCredentialsAction?: ManagedCredentialsActionEnum;
    name?: string;
}
