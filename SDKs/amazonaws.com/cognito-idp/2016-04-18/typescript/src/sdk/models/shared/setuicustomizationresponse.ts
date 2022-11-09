import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UiCustomizationType } from "./uicustomizationtype";


export class SetUiCustomizationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UICustomization" })
  uiCustomization: UiCustomizationType;
}
