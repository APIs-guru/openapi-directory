import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VolumeFrom
/** 
 * Details on a data volume from another container in the same task definition.
**/
export class VolumeFrom extends SpeakeasyBase {
  @Metadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=sourceContainer" })
  sourceContainer?: string;
}
