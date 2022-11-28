import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualRouterRef
/** 
 * An object that represents a virtual router returned by a list operation.
**/
export class VirtualRouterRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "json, name=meshOwner" })
  meshOwner: string;

  @SpeakeasyMetadata({ data: "json, name=resourceOwner" })
  resourceOwner: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: number;

  @SpeakeasyMetadata({ data: "json, name=virtualRouterName" })
  virtualRouterName: string;
}
