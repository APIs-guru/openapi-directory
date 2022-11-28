import { SpeakeasyBase } from "../../../internal/utils";
import { OsTypeEnum } from "./ostypeenum";
import { TierEnum } from "./tierenum";
/**
 * Describes a standalone resource or similarly grouped resources that the application is made up of.
**/
export declare class ApplicationComponent extends SpeakeasyBase {
    componentName?: string;
    componentRemarks?: string;
    detectedWorkload?: Map<string, Map<string, string>>;
    monitor?: boolean;
    osType?: OsTypeEnum;
    resourceType?: string;
    tier?: TierEnum;
}
