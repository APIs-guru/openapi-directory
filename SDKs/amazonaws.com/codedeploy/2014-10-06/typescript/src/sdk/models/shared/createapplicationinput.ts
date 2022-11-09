import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComputePlatformEnum } from "./computeplatformenum";
import { Tag } from "./tag";


// CreateApplicationInput
/** 
 * Represents the input of a <code>CreateApplication</code> operation.
**/
export class CreateApplicationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
