import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceMetadata
/** 
 * An object representing metadata for a resource.
**/
export class ResourceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
