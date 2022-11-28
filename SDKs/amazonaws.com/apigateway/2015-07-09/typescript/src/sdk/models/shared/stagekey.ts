import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StageKey
/** 
 * A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>.
**/
export class StageKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=restApiId" })
  restApiId?: string;

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName?: string;
}
