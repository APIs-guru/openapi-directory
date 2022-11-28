import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains information about the last time that an IAM role was used. This includes the date and time and the Region in which the role was last used. Activity is only reported for the trailing 400 days. This period can be shorter if your Region began supporting these features within the last year. The role might have been used more than 400 days ago. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions where data is tracked</a> in the <i>IAM User Guide</i>.</p> <p>This data type is returned as a response element in the <a>GetRole</a> and <a>GetAccountAuthorizationDetails</a> operations.</p>
**/
export declare class RoleLastUsed extends SpeakeasyBase {
    lastUsedDate?: Date;
    region?: string;
}
