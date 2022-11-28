import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityUsage
/** 
 * Usage information for the identity.
**/
export class IdentityUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataStorage" })
  dataStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=DatasetCount" })
  datasetCount?: number;

  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;
}
