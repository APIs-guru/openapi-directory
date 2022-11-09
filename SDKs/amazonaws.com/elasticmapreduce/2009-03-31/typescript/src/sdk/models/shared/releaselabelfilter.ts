import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReleaseLabelFilter
/** 
 * The release label filters by application or version prefix.
**/
export class ReleaseLabelFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Application" })
  application?: string;

  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;
}
