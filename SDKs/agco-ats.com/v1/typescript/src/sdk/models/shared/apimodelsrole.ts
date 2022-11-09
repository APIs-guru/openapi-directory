import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiModelsRole
/** 
 * Defines an API Role
**/
export class ApiModelsRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name: string;
}
