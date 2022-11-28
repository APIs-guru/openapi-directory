import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResolvedComponentVersion
/** 
 * Contains information about a component version that is compatible to run on a Greengrass core device.
**/
export class ResolvedComponentVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=componentName" })
  componentName?: string;

  @SpeakeasyMetadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=recipe" })
  recipe?: string;
}
