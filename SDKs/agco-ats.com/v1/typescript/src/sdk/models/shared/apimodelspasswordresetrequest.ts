import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiModelsPasswordResetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ParameterName, form, name=ParameterName;" })
  parameterName: string;

  @SpeakeasyMetadata({ data: "json, name=Url, form, name=Url;" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=Username, form, name=Username;" })
  username: string;
}
