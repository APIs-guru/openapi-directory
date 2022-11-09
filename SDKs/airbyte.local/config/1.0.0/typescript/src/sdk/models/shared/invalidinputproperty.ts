import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InvalidInputProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=invalidValue" })
  invalidValue?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=propertyPath" })
  propertyPath: string;
}
