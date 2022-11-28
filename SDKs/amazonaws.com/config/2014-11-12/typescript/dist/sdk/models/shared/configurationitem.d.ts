import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationItemStatusEnum } from "./configurationitemstatusenum";
import { Relationship } from "./relationship";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * A list that contains detailed configurations of a specified resource.
**/
export declare class ConfigurationItem extends SpeakeasyBase {
    accountId?: string;
    arn?: string;
    availabilityZone?: string;
    awsRegion?: string;
    configuration?: string;
    configurationItemCaptureTime?: Date;
    configurationItemMd5Hash?: string;
    configurationItemStatus?: ConfigurationItemStatusEnum;
    configurationStateId?: string;
    relatedEvents?: string[];
    relationships?: Relationship[];
    resourceCreationTime?: Date;
    resourceId?: string;
    resourceName?: string;
    resourceType?: ResourceTypeEnum;
    supplementaryConfiguration?: Map<string, string>;
    tags?: Map<string, string>;
    version?: string;
}
