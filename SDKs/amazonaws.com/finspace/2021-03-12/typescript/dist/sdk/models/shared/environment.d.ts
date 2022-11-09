import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FederationModeEnum } from "./federationmodeenum";
import { FederationParameters } from "./federationparameters";
import { EnvironmentStatusEnum } from "./environmentstatusenum";
/**
 * Represents an FinSpace environment.
**/
export declare class Environment extends SpeakeasyBase {
    awsAccountId?: string;
    dedicatedServiceAccountId?: string;
    description?: string;
    environmentArn?: string;
    environmentId?: string;
    environmentUrl?: string;
    federationMode?: FederationModeEnum;
    federationParameters?: FederationParameters;
    kmsKeyId?: string;
    name?: string;
    sageMakerStudioDomainUrl?: string;
    status?: EnvironmentStatusEnum;
}
