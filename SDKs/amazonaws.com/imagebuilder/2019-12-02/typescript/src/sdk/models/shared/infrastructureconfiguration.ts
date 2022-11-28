import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Logging } from "./logging";



// InfrastructureConfiguration
/** 
 * Details of the infrastructure configuration.
**/
export class InfrastructureConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=dateUpdated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceProfileName" })
  instanceProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=keyPair" })
  keyPair?: string;

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: Logging;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceTags" })
  resourceTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=snsTopicArn" })
  snsTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=terminateInstanceOnFailure" })
  terminateInstanceOnFailure?: boolean;
}
