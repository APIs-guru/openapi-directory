import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationItemStatusEnum } from "./configurationitemstatusenum";
import { Relationship } from "./relationship";
import { ResourceTypeEnum } from "./resourcetypeenum";



// ConfigurationItem
/** 
 * A list that contains detailed configurations of a specified resource.
**/
export class ConfigurationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=availabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: string;

  @SpeakeasyMetadata({ data: "json, name=configurationItemCaptureTime" })
  configurationItemCaptureTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=configurationItemMD5Hash" })
  configurationItemMd5Hash?: string;

  @SpeakeasyMetadata({ data: "json, name=configurationItemStatus" })
  configurationItemStatus?: ConfigurationItemStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=configurationStateId" })
  configurationStateId?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedEvents" })
  relatedEvents?: string[];

  @SpeakeasyMetadata({ data: "json, name=relationships", elemType: Relationship })
  relationships?: Relationship[];

  @SpeakeasyMetadata({ data: "json, name=resourceCreationTime" })
  resourceCreationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=supplementaryConfiguration" })
  supplementaryConfiguration?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
