import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResolvedComponentVersion
/** 
 * Contains information about a component version that is compatible to run on a Greengrass core device.
**/
export class ResolvedComponentVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=componentName" })
  componentName?: string;

  @Metadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @Metadata({ data: "json, name=recipe" })
  recipe?: string;
}
