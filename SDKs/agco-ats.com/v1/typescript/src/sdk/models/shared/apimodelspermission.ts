import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApiModelsPermissionDataRequiredEnum {
    Yes = "Yes",
    No = "No",
    Optional = "Optional"
}


export class ApiModelsPermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataDescription, form, name=DataDescription;" })
  dataDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=DataRequired, form, name=DataRequired;" })
  dataRequired: ApiModelsPermissionDataRequiredEnum;

  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name: string;
}
