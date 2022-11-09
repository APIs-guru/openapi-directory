import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Logging } from "./logging";


// InfrastructureConfiguration
/** 
 * Details of the infrastructure configuration.
**/
export class InfrastructureConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @Metadata({ data: "json, name=dateUpdated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=instanceProfileName" })
  instanceProfileName?: string;

  @Metadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @Metadata({ data: "json, name=keyPair" })
  keyPair?: string;

  @Metadata({ data: "json, name=logging" })
  logging?: Logging;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceTags" })
  resourceTags?: Map<string, string>;

  @Metadata({ data: "json, name=securityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=snsTopicArn" })
  snsTopicArn?: string;

  @Metadata({ data: "json, name=subnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=terminateInstanceOnFailure" })
  terminateInstanceOnFailure?: boolean;
}
