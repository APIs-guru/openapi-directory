import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { FlowStatusEnum } from "./flowstatusenum";
import { ExecutionDetails } from "./executiondetails";
import { TriggerTypeEnum } from "./triggertypeenum";



// FlowDefinition
/** 
 *  The properties of the flow, such as its source, destination, trigger type, and so on. 
**/
export class FlowDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationConnectorType" })
  destinationConnectorType?: ConnectorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=flowArn" })
  flowArn?: string;

  @SpeakeasyMetadata({ data: "json, name=flowName" })
  flowName?: string;

  @SpeakeasyMetadata({ data: "json, name=flowStatus" })
  flowStatus?: FlowStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=lastRunExecutionDetails" })
  lastRunExecutionDetails?: ExecutionDetails;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedBy" })
  lastUpdatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceConnectorType" })
  sourceConnectorType?: ConnectorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=triggerType" })
  triggerType?: TriggerTypeEnum;
}
