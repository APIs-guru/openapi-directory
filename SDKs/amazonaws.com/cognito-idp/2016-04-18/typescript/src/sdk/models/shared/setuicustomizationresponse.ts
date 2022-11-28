import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UiCustomizationType } from "./uicustomizationtype";



export class SetUiCustomizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UICustomization" })
  uiCustomization: UiCustomizationType;
}
