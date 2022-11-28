import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VolumeFrom
/** 
 * Details on a data volume from another container in the same task definition.
**/
export class VolumeFrom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sourceContainer" })
  sourceContainer?: string;
}
