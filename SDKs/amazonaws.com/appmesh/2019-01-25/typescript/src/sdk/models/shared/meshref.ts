import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MeshRef
/** 
 * An object that represents a service mesh returned by a list operation.
**/
export class MeshRef extends SpeakeasyBase {
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
}
