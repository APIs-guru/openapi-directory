import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationOverrides } from "./configurationoverrides";
import { FailureReasonEnum } from "./failurereasonenum";
import { EndpointStateEnum } from "./endpointstateenum";



// Endpoint
/** 
 * This entity represents the endpoint that is managed by Amazon EMR on EKS.
**/
export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=configurationOverrides" })
  configurationOverrides?: ConfigurationOverrides;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=executionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: FailureReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseLabel" })
  releaseLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=securityGroup" })
  securityGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=serverUrl" })
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: EndpointStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateDetails" })
  stateDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualClusterId" })
  virtualClusterId?: string;
}
