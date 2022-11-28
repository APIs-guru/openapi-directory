import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputePlatformEnum } from "./computeplatformenum";
import { Tag } from "./tag";



// CreateApplicationInput
/** 
 * Represents the input of a <code>CreateApplication</code> operation.
**/
export class CreateApplicationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
