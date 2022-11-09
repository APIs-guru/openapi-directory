import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { ConnectionStatusEnum } from "./connectionstatusenum";


// ConnectionSummary
/** 
 * Provides summary information about an AWS App Runner connection resource.
**/
export class ConnectionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @Metadata({ data: "json, name=ConnectionName" })
  connectionName?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=ProviderType" })
  providerType?: ProviderTypeEnum;

  @Metadata({ data: "json, name=Status" })
  status?: ConnectionStatusEnum;
}
