import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationStateEnum } from "./applicationstateenum";
/**
 * <p>A summary of information about a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
**/
export declare class ApplicationSummary extends SpeakeasyBase {
    applicationCreationDate?: number;
    applicationDescription?: string;
    applicationId: string;
    applicationLastUpdateDate?: number;
    applicationName: string;
    applicationState?: ApplicationStateEnum;
    applicationUrl: string;
}
