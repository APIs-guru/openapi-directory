import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentationPartTypeEnum } from "./documentationparttypeenum";



// DocumentationPartLocation
/** 
 * Specifies the target API entity to which the documentation applies.
**/
export class DocumentationPartLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: DocumentationPartTypeEnum;
}
