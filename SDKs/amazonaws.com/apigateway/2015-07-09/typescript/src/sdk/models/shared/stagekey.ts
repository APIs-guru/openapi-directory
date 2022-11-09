import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StageKey
/** 
 * A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>.
**/
export class StageKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=restApiId" })
  restApiId?: string;

  @Metadata({ data: "json, name=stageName" })
  stageName?: string;
}
