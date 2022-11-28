import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComponentParameter } from "./componentparameter";



// ComponentConfiguration
/** 
 *  Configuration details of the component.
**/
export class ComponentConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentArn" })
  componentArn: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: ComponentParameter })
  parameters?: ComponentParameter[];
}
