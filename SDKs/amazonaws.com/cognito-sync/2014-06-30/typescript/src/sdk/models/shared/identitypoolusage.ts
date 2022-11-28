import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityPoolUsage
/** 
 * Usage information for the identity pool.
**/
export class IdentityPoolUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataStorage" })
  dataStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=SyncSessionsCount" })
  syncSessionsCount?: number;
}
