import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MeshRef
/** 
 * An object that represents a service mesh returned by a list operation.
**/
export class MeshRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt: Date;

  @Metadata({ data: "json, name=meshName" })
  meshName: string;

  @Metadata({ data: "json, name=meshOwner" })
  meshOwner: string;

  @Metadata({ data: "json, name=resourceOwner" })
  resourceOwner: string;

  @Metadata({ data: "json, name=version" })
  version: number;
}
