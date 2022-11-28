import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentLink } from "./environmentlink";
import { EnvironmentHealthEnum } from "./environmenthealthenum";
import { EnvironmentHealthStatusEnum } from "./environmenthealthstatusenum";
import { EnvironmentResourcesDescription } from "./environmentresourcesdescription";
import { EnvironmentStatusEnum } from "./environmentstatusenum";
import { EnvironmentTier } from "./environmenttier";



// EnvironmentDescription
/** 
 * Describes the properties of an environment.
**/
export class EnvironmentDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  abortableOperationInProgress?: boolean;

  @SpeakeasyMetadata()
  applicationName?: string;

  @SpeakeasyMetadata()
  cname?: string;

  @SpeakeasyMetadata()
  dateCreated?: Date;

  @SpeakeasyMetadata()
  dateUpdated?: Date;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  endpointUrl?: string;

  @SpeakeasyMetadata()
  environmentArn?: string;

  @SpeakeasyMetadata()
  environmentId?: string;

  @SpeakeasyMetadata({ elemType: EnvironmentLink })
  environmentLinks?: EnvironmentLink[];

  @SpeakeasyMetadata()
  environmentName?: string;

  @SpeakeasyMetadata()
  health?: EnvironmentHealthEnum;

  @SpeakeasyMetadata()
  healthStatus?: EnvironmentHealthStatusEnum;

  @SpeakeasyMetadata()
  operationsRole?: string;

  @SpeakeasyMetadata()
  platformArn?: string;

  @SpeakeasyMetadata()
  resources?: EnvironmentResourcesDescription;

  @SpeakeasyMetadata()
  solutionStackName?: string;

  @SpeakeasyMetadata()
  status?: EnvironmentStatusEnum;

  @SpeakeasyMetadata()
  templateName?: string;

  @SpeakeasyMetadata()
  tier?: EnvironmentTier;

  @SpeakeasyMetadata()
  versionLabel?: string;
}
