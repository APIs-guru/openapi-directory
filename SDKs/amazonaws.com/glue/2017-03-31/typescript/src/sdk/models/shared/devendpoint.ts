import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkerTypeEnum } from "./workertypeenum";


// DevEndpoint
/** 
 * A development endpoint where a developer can remotely debug extract, transform, and load (ETL) scripts.
**/
export class DevEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arguments" })
  arguments?: Map<string, string>;

  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName?: string;

  @Metadata({ data: "json, name=ExtraJarsS3Path" })
  extraJarsS3Path?: string;

  @Metadata({ data: "json, name=ExtraPythonLibsS3Path" })
  extraPythonLibsS3Path?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=GlueVersion" })
  glueVersion?: string;

  @Metadata({ data: "json, name=LastModifiedTimestamp" })
  lastModifiedTimestamp?: Date;

  @Metadata({ data: "json, name=LastUpdateStatus" })
  lastUpdateStatus?: string;

  @Metadata({ data: "json, name=NumberOfNodes" })
  numberOfNodes?: number;

  @Metadata({ data: "json, name=NumberOfWorkers" })
  numberOfWorkers?: number;

  @Metadata({ data: "json, name=PrivateAddress" })
  privateAddress?: string;

  @Metadata({ data: "json, name=PublicAddress" })
  publicAddress?: string;

  @Metadata({ data: "json, name=PublicKey" })
  publicKey?: string;

  @Metadata({ data: "json, name=PublicKeys" })
  publicKeys?: string[];

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;

  @Metadata({ data: "json, name=WorkerType" })
  workerType?: WorkerTypeEnum;

  @Metadata({ data: "json, name=YarnEndpointAddress" })
  yarnEndpointAddress?: string;

  @Metadata({ data: "json, name=ZeppelinRemoteSparkInterpreterPort" })
  zeppelinRemoteSparkInterpreterPort?: number;
}
