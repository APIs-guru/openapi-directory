import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionEngineTypeEnum } from "./executionenginetypeenum";


// ExecutionEngineConfig
/** 
 * Specifies the execution engine (cluster) to run the notebook and perform the notebook execution, for example, an EMR cluster.
**/
export class ExecutionEngineConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=MasterInstanceSecurityGroupId" })
  masterInstanceSecurityGroupId?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ExecutionEngineTypeEnum;
}
