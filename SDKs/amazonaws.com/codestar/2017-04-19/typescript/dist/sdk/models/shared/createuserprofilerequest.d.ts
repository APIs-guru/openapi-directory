import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateUserProfileRequest extends SpeakeasyBase {
    displayName: string;
    emailAddress: string;
    sshPublicKey?: string;
    userArn: string;
}
