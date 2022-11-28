import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagDescription
/** 
 * Describes a tag for an Auto Scaling group.
**/
export class TagDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  propagateAtLaunch?: boolean;

  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata()
  resourceType?: string;

  @SpeakeasyMetadata()
  value?: string;
}
