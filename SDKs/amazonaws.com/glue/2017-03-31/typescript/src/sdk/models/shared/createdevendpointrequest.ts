import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkerTypeEnum } from "./workertypeenum";


export class CreateDevEndpointRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arguments" })
  arguments?: Map<string, string>;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @Metadata({ data: "json, name=ExtraJarsS3Path" })
  extraJarsS3Path?: string;

  @Metadata({ data: "json, name=ExtraPythonLibsS3Path" })
  extraPythonLibsS3Path?: string;

  @Metadata({ data: "json, name=GlueVersion" })
  glueVersion?: string;

  @Metadata({ data: "json, name=NumberOfNodes" })
  numberOfNodes?: number;

  @Metadata({ data: "json, name=NumberOfWorkers" })
  numberOfWorkers?: number;

  @Metadata({ data: "json, name=PublicKey" })
  publicKey?: string;

  @Metadata({ data: "json, name=PublicKeys" })
  publicKeys?: string[];

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=WorkerType" })
  workerType?: WorkerTypeEnum;
}
