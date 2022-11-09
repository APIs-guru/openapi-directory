import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualRouterRef
/** 
 * An object that represents a virtual router returned by a list operation.
**/
export class VirtualRouterRef extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=virtualRouterName" })
  virtualRouterName: string;
}
