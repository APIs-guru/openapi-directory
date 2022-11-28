import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionEngineTypeEnum } from "./executionenginetypeenum";



// ExecutionEngineConfig
/** 
 * Specifies the execution engine (cluster) to run the notebook and perform the notebook execution, for example, an EMR cluster.
**/
export class ExecutionEngineConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=MasterInstanceSecurityGroupId" })
  masterInstanceSecurityGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ExecutionEngineTypeEnum;
}
