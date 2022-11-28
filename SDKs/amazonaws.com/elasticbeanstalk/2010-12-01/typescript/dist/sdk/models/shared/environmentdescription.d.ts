import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentLink } from "./environmentlink";
import { EnvironmentHealthEnum } from "./environmenthealthenum";
import { EnvironmentHealthStatusEnum } from "./environmenthealthstatusenum";
import { EnvironmentResourcesDescription } from "./environmentresourcesdescription";
import { EnvironmentStatusEnum } from "./environmentstatusenum";
import { EnvironmentTier } from "./environmenttier";
/**
 * Describes the properties of an environment.
**/
export declare class EnvironmentDescription extends SpeakeasyBase {
    abortableOperationInProgress?: boolean;
    applicationName?: string;
    cname?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    description?: string;
    endpointUrl?: string;
    environmentArn?: string;
    environmentId?: string;
    environmentLinks?: EnvironmentLink[];
    environmentName?: string;
    health?: EnvironmentHealthEnum;
    healthStatus?: EnvironmentHealthStatusEnum;
    operationsRole?: string;
    platformArn?: string;
    resources?: EnvironmentResourcesDescription;
    solutionStackName?: string;
    status?: EnvironmentStatusEnum;
    templateName?: string;
    tier?: EnvironmentTier;
    versionLabel?: string;
}
