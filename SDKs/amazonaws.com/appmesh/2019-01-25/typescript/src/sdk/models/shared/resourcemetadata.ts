import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceMetadata
/** 
 * An object that represents metadata for a resource.
**/
export class ResourceMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt: Date;

  @Metadata({ data: "json, name=meshOwner" })
  meshOwner: string;

  @Metadata({ data: "json, name=resourceOwner" })
  resourceOwner: string;

  @Metadata({ data: "json, name=uid" })
  uid: string;

  @Metadata({ data: "json, name=version" })
  version: number;
}
