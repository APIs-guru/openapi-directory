import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GlobalResourcesSharedModelsGlobalImageCategory
/** 
 * An image category from the Global Image library.
**/
export class GlobalResourcesSharedModelsGlobalImageCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name: string;
}
