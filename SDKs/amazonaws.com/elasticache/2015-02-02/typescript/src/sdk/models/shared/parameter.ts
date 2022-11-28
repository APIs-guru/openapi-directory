import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeTypeEnum } from "./changetypeenum";



// Parameter
/** 
 * Describes an individual setting that controls some aspect of ElastiCache behavior.
**/
export class Parameter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedValues?: string;

  @SpeakeasyMetadata()
  changeType?: ChangeTypeEnum;

  @SpeakeasyMetadata()
  dataType?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  isModifiable?: boolean;

  @SpeakeasyMetadata()
  minimumEngineVersion?: string;

  @SpeakeasyMetadata()
  parameterName?: string;

  @SpeakeasyMetadata()
  parameterValue?: string;

  @SpeakeasyMetadata()
  source?: string;
}
