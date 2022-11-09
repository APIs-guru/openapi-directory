import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentityPoolUsage
/** 
 * Usage information for the identity pool.
**/
export class IdentityPoolUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataStorage" })
  dataStorage?: number;

  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=SyncSessionsCount" })
  syncSessionsCount?: number;
}
