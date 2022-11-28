import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowStatusEnum } from "./flowstatusenum";



export class StartFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=flowArn" })
  flowArn?: string;

  @SpeakeasyMetadata({ data: "json, name=flowStatus" })
  flowStatus?: FlowStatusEnum;
}
