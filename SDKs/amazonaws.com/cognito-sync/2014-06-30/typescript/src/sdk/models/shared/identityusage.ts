import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentityUsage
/** 
 * Usage information for the identity.
**/
export class IdentityUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataStorage" })
  dataStorage?: number;

  @Metadata({ data: "json, name=DatasetCount" })
  datasetCount?: number;

  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;
}
