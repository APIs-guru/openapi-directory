import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerTypeEnum } from "./workertypeenum";



export class CreateDevEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arguments" })
  arguments?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName?: string;

  @SpeakeasyMetadata({ data: "json, name=ExtraJarsS3Path" })
  extraJarsS3Path?: string;

  @SpeakeasyMetadata({ data: "json, name=ExtraPythonLibsS3Path" })
  extraPythonLibsS3Path?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=GlueVersion" })
  glueVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfNodes" })
  numberOfNodes?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfWorkers" })
  numberOfWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkerType" })
  workerType?: WorkerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=YarnEndpointAddress" })
  yarnEndpointAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ZeppelinRemoteSparkInterpreterPort" })
  zeppelinRemoteSparkInterpreterPort?: number;
}
