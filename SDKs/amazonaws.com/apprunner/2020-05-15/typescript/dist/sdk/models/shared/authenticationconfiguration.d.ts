import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider.
**/
export declare class AuthenticationConfiguration extends SpeakeasyBase {
    accessRoleArn?: string;
    connectionArn?: string;
}
