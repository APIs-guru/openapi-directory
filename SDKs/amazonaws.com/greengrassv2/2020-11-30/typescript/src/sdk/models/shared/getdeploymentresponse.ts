import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComponentDeploymentSpecification } from "./componentdeploymentspecification";
import { DeploymentPolicies } from "./deploymentpolicies";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { DeploymentIoTJobConfiguration } from "./deploymentiotjobconfiguration";



export class GetDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components", elemType: ComponentDeploymentSpecification })
  components?: Map<string, ComponentDeploymentSpecification>;

  @SpeakeasyMetadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentName" })
  deploymentName?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentPolicies" })
  deploymentPolicies?: DeploymentPolicies;

  @SpeakeasyMetadata({ data: "json, name=deploymentStatus" })
  deploymentStatus?: DeploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=iotJobArn" })
  iotJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=iotJobConfiguration" })
  iotJobConfiguration?: DeploymentIoTJobConfiguration;

  @SpeakeasyMetadata({ data: "json, name=iotJobId" })
  iotJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=isLatestForTarget" })
  isLatestForTarget?: boolean;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn?: string;
}
