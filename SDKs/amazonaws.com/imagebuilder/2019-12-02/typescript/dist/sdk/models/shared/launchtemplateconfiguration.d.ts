import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies an Amazon EC2 launch template to use for a specific account.
**/
export declare class LaunchTemplateConfiguration extends SpeakeasyBase {
    accountId?: string;
    launchTemplateId: string;
    setDefaultVersion?: boolean;
}
