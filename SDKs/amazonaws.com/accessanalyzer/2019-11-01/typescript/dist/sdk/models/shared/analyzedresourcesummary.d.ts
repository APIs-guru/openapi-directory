import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Contains the ARN of the analyzed resource.
**/
export declare class AnalyzedResourceSummary extends SpeakeasyBase {
    resourceArn: string;
    resourceOwnerAccount: string;
    resourceType: ResourceTypeEnum;
}
