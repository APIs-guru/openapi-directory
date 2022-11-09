import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { FlowStatusEnum } from "./flowstatusenum";
import { ExecutionDetails } from "./executiondetails";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { TriggerTypeEnum } from "./triggertypeenum";


// FlowDefinition
/** 
 *  The properties of the flow, such as its source, destination, trigger type, and so on. 
**/
export class FlowDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destinationConnectorType" })
  destinationConnectorType?: ConnectorTypeEnum;

  @Metadata({ data: "json, name=flowArn" })
  flowArn?: string;

  @Metadata({ data: "json, name=flowName" })
  flowName?: string;

  @Metadata({ data: "json, name=flowStatus" })
  flowStatus?: FlowStatusEnum;

  @Metadata({ data: "json, name=lastRunExecutionDetails" })
  lastRunExecutionDetails?: ExecutionDetails;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=lastUpdatedBy" })
  lastUpdatedBy?: string;

  @Metadata({ data: "json, name=sourceConnectorType" })
  sourceConnectorType?: ConnectorTypeEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=triggerType" })
  triggerType?: TriggerTypeEnum;
}
