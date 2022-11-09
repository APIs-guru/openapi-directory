import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiModelsPasswordResetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ParameterName, form, name=ParameterName;" })
  parameterName: string;

  @Metadata({ data: "json, name=Url, form, name=Url;" })
  url: string;

  @Metadata({ data: "json, name=Username, form, name=Username;" })
  username: string;
}
