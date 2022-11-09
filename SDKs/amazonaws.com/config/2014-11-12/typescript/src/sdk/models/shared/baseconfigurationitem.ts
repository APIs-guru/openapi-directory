import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationItemStatusEnum } from "./configurationitemstatusenum";
import { ResourceTypeEnum } from "./resourcetypeenum";


// BaseConfigurationItem
/** 
 * The detailed configuration of a specified resource.
**/
export class BaseConfigurationItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=availabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @Metadata({ data: "json, name=configuration" })
  configuration?: string;

  @Metadata({ data: "json, name=configurationItemCaptureTime" })
  configurationItemCaptureTime?: Date;

  @Metadata({ data: "json, name=configurationItemStatus" })
  configurationItemStatus?: ConfigurationItemStatusEnum;

  @Metadata({ data: "json, name=configurationStateId" })
  configurationStateId?: string;

  @Metadata({ data: "json, name=resourceCreationTime" })
  resourceCreationTime?: Date;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=supplementaryConfiguration" })
  supplementaryConfiguration?: Map<string, string>;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
