import { SpeakeasyBase } from "../../../internal/utils";
import { TimeBasedCanary } from "./timebasedcanary";
import { TimeBasedLinear } from "./timebasedlinear";
import { TrafficRoutingTypeEnum } from "./trafficroutingtypeenum";
/**
 * The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment.
**/
export declare class TrafficRoutingConfig extends SpeakeasyBase {
    timeBasedCanary?: TimeBasedCanary;
    timeBasedLinear?: TimeBasedLinear;
    type?: TrafficRoutingTypeEnum;
}
