import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackInputParameter } from "./conformancepackinputparameter";
/**
 * An organization conformance pack that has information about conformance packs that Config creates in member accounts.
**/
export declare class OrganizationConformancePack extends SpeakeasyBase {
    conformancePackInputParameters?: ConformancePackInputParameter[];
    deliveryS3Bucket?: string;
    deliveryS3KeyPrefix?: string;
    excludedAccounts?: string[];
    lastUpdateTime: Date;
    organizationConformancePackArn: string;
    organizationConformancePackName: string;
}
