import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeBasedCanary } from "./timebasedcanary";
import { TimeBasedLinear } from "./timebasedlinear";
import { TrafficRoutingTypeEnum } from "./trafficroutingtypeenum";


// TrafficRoutingConfig
/** 
 * The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment.
**/
export class TrafficRoutingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=timeBasedCanary" })
  timeBasedCanary?: TimeBasedCanary;

  @Metadata({ data: "json, name=timeBasedLinear" })
  timeBasedLinear?: TimeBasedLinear;

  @Metadata({ data: "json, name=type" })
  type?: TrafficRoutingTypeEnum;
}
