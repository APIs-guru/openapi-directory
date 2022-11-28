import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingConfigurationStatusEnum } from "./autoscalingconfigurationstatusenum";
/**
 * <p>Describes an AWS App Runner automatic scaling configuration resource. Multiple revisions of a configuration have the same <code>AutoScalingConfigurationName</code> and different <code>AutoScalingConfigurationRevision</code> values.</p> <p>A higher <code>MinSize</code> increases the spread of your App Runner service over more Availability Zones in the AWS Region. The tradeoff is a higher minimal cost.</p> <p>A lower <code>MaxSize</code> controls your cost. The tradeoff is lower responsiveness during peak demand.</p>
**/
export declare class AutoScalingConfiguration extends SpeakeasyBase {
    autoScalingConfigurationArn?: string;
    autoScalingConfigurationName?: string;
    autoScalingConfigurationRevision?: number;
    createdAt?: Date;
    deletedAt?: Date;
    latest?: boolean;
    maxConcurrency?: number;
    maxSize?: number;
    minSize?: number;
    status?: AutoScalingConfigurationStatusEnum;
}
