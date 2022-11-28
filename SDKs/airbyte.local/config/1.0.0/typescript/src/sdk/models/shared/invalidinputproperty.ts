import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvalidInputProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invalidValue" })
  invalidValue?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyPath" })
  propertyPath: string;
}
