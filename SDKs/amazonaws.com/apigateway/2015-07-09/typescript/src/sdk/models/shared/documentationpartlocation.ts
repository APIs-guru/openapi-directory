import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentationPartTypeEnum } from "./documentationparttypeenum";


// DocumentationPartLocation
/** 
 * Specifies the target API entity to which the documentation applies.
**/
export class DocumentationPartLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @Metadata({ data: "json, name=type" })
  type: DocumentationPartTypeEnum;
}
