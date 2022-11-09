import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationStateEnum } from "./applicationstateenum";
export declare class DescribeApplicationResponse extends SpeakeasyBase {
    applicationArn: string;
    applicationCreationDate: number;
    applicationDescription?: string;
    applicationId: string;
    applicationLastUpdateDate: number;
    applicationName: string;
    applicationState: ApplicationStateEnum;
    applicationUrl: string;
    errorMessage?: string;
    roleArn: string;
    ssoClientId?: string;
    tags?: Map<string, string>;
}
