import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FederationModeEnum } from "./federationmodeenum";
import { FederationParameters } from "./federationparameters";
import { EnvironmentStatusEnum } from "./environmentstatusenum";



// Environment
/** 
 * Represents an FinSpace environment.
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsAccountId" })
  awsAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=dedicatedServiceAccountId" })
  dedicatedServiceAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentArn" })
  environmentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentUrl" })
  environmentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=federationMode" })
  federationMode?: FederationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=federationParameters" })
  federationParameters?: FederationParameters;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sageMakerStudioDomainUrl" })
  sageMakerStudioDomainUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: EnvironmentStatusEnum;
}
