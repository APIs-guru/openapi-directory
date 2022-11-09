import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FederationModeEnum } from "./federationmodeenum";
import { FederationParameters } from "./federationparameters";
import { EnvironmentStatusEnum } from "./environmentstatusenum";


// Environment
/** 
 * Represents an FinSpace environment.
**/
export class Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsAccountId" })
  awsAccountId?: string;

  @Metadata({ data: "json, name=dedicatedServiceAccountId" })
  dedicatedServiceAccountId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environmentArn" })
  environmentArn?: string;

  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=environmentUrl" })
  environmentUrl?: string;

  @Metadata({ data: "json, name=federationMode" })
  federationMode?: FederationModeEnum;

  @Metadata({ data: "json, name=federationParameters" })
  federationParameters?: FederationParameters;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sageMakerStudioDomainUrl" })
  sageMakerStudioDomainUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: EnvironmentStatusEnum;
}
