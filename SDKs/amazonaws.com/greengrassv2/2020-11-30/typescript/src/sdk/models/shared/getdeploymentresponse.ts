import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComponentDeploymentSpecification } from "./componentdeploymentspecification";
import { DeploymentPolicies } from "./deploymentpolicies";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { DeploymentIoTJobConfiguration } from "./deploymentiotjobconfiguration";


export class GetDeploymentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=components", elemType: shared.ComponentDeploymentSpecification })
  components?: Map<string, ComponentDeploymentSpecification>;

  @Metadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: Date;

  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=deploymentName" })
  deploymentName?: string;

  @Metadata({ data: "json, name=deploymentPolicies" })
  deploymentPolicies?: DeploymentPolicies;

  @Metadata({ data: "json, name=deploymentStatus" })
  deploymentStatus?: DeploymentStatusEnum;

  @Metadata({ data: "json, name=iotJobArn" })
  iotJobArn?: string;

  @Metadata({ data: "json, name=iotJobConfiguration" })
  iotJobConfiguration?: DeploymentIoTJobConfiguration;

  @Metadata({ data: "json, name=iotJobId" })
  iotJobId?: string;

  @Metadata({ data: "json, name=isLatestForTarget" })
  isLatestForTarget?: boolean;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=targetArn" })
  targetArn?: string;
}
