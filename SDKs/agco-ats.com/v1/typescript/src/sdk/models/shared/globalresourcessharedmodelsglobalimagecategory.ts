import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlobalResourcesSharedModelsGlobalImageCategory
/** 
 * An image category from the Global Image library.
**/
export class GlobalResourcesSharedModelsGlobalImageCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name: string;
}
