import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiModelsRole
/** 
 * Defines an API Role
**/
export class ApiModelsRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name: string;
}
