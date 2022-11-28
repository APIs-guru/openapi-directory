import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ami } from "./ami";
import { Container } from "./container";



// OutputResources
/** 
 * The resources produced by this image.
**/
export class OutputResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amis", elemType: Ami })
  amis?: Ami[];

  @SpeakeasyMetadata({ data: "json, name=containers", elemType: Container })
  containers?: Container[];
}
