import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApiModelsPermissionDataRequiredEnum {
    Yes = "Yes"
,    No = "No"
,    Optional = "Optional"
}


export class ApiModelsPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataDescription, form, name=DataDescription;" })
  dataDescription?: string;

  @Metadata({ data: "json, name=DataRequired, form, name=DataRequired;" })
  dataRequired: ApiModelsPermissionDataRequiredEnum;

  @Metadata({ data: "json, name=Description, form, name=Description;" })
  description?: string;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name: string;
}
