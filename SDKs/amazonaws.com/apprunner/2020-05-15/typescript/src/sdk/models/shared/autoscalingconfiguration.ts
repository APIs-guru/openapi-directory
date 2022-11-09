import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingConfigurationStatusEnum } from "./autoscalingconfigurationstatusenum";


// AutoScalingConfiguration
/** 
 * <p>Describes an AWS App Runner automatic scaling configuration resource. Multiple revisions of a configuration have the same <code>AutoScalingConfigurationName</code> and different <code>AutoScalingConfigurationRevision</code> values.</p> <p>A higher <code>MinSize</code> increases the spread of your App Runner service over more Availability Zones in the AWS Region. The tradeoff is a higher minimal cost.</p> <p>A lower <code>MaxSize</code> controls your cost. The tradeoff is lower responsiveness during peak demand.</p>
**/
export class AutoScalingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingConfigurationArn" })
  autoScalingConfigurationArn?: string;

  @Metadata({ data: "json, name=AutoScalingConfigurationName" })
  autoScalingConfigurationName?: string;

  @Metadata({ data: "json, name=AutoScalingConfigurationRevision" })
  autoScalingConfigurationRevision?: number;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=DeletedAt" })
  deletedAt?: Date;

  @Metadata({ data: "json, name=Latest" })
  latest?: boolean;

  @Metadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: number;

  @Metadata({ data: "json, name=MaxSize" })
  maxSize?: number;

  @Metadata({ data: "json, name=MinSize" })
  minSize?: number;

  @Metadata({ data: "json, name=Status" })
  status?: AutoScalingConfigurationStatusEnum;
}
