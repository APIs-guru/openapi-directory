import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigurationItemStatusEnum } from "./configurationitemstatusenum";
import { Relationship } from "./relationship";
import { ResourceTypeEnum } from "./resourcetypeenum";


// ConfigurationItem
/** 
 * A list that contains detailed configurations of a specified resource.
**/
export class ConfigurationItem extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=configurationItemMD5Hash" })
  configurationItemMd5Hash?: string;

  @Metadata({ data: "json, name=configurationItemStatus" })
  configurationItemStatus?: ConfigurationItemStatusEnum;

  @Metadata({ data: "json, name=configurationStateId" })
  configurationStateId?: string;

  @Metadata({ data: "json, name=relatedEvents" })
  relatedEvents?: string[];

  @Metadata({ data: "json, name=relationships", elemType: shared.Relationship })
  relationships?: Relationship[];

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

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
