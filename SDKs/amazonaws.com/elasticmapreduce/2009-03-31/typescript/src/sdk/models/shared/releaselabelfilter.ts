import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReleaseLabelFilter
/** 
 * The release label filters by application or version prefix.
**/
export class ReleaseLabelFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Application" })
  application?: string;

  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;
}
