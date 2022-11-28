import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationItemStatusEnum } from "./configurationitemstatusenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * The detailed configuration of a specified resource.
**/
export declare class BaseConfigurationItem extends SpeakeasyBase {
    accountId?: string;
    arn?: string;
    availabilityZone?: string;
    awsRegion?: string;
    configuration?: string;
    configurationItemCaptureTime?: Date;
    configurationItemStatus?: ConfigurationItemStatusEnum;
    configurationStateId?: string;
    resourceCreationTime?: Date;
    resourceId?: string;
    resourceName?: string;
    resourceType?: ResourceTypeEnum;
    supplementaryConfiguration?: Map<string, string>;
    version?: string;
}
