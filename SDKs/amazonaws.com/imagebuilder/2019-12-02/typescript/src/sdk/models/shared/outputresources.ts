import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Ami } from "./ami";
import { Container } from "./container";


// OutputResources
/** 
 * The resources produced by this image.
**/
export class OutputResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=amis", elemType: shared.Ami })
  amis?: Ami[];

  @Metadata({ data: "json, name=containers", elemType: shared.Container })
  containers?: Container[];
}
