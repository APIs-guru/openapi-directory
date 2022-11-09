import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationOverrides } from "./configurationoverrides";
import { FailureReasonEnum } from "./failurereasonenum";
import { EndpointStateEnum } from "./endpointstateenum";


// Endpoint
/** 
 * This entity represents the endpoint that is managed by Amazon EMR on EKS.
**/
export class Endpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=configurationOverrides" })
  configurationOverrides?: ConfigurationOverrides;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: FailureReasonEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=releaseLabel" })
  releaseLabel?: string;

  @Metadata({ data: "json, name=securityGroup" })
  securityGroup?: string;

  @Metadata({ data: "json, name=serverUrl" })
  serverUrl?: string;

  @Metadata({ data: "json, name=state" })
  state?: EndpointStateEnum;

  @Metadata({ data: "json, name=stateDetails" })
  stateDetails?: string;

  @Metadata({ data: "json, name=subnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=virtualClusterId" })
  virtualClusterId?: string;
}
