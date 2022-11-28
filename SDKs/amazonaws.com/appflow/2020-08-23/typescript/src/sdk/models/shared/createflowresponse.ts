import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowStatusEnum } from "./flowstatusenum";



export class CreateFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flowArn" })
  flowArn?: string;

  @SpeakeasyMetadata({ data: "json, name=flowStatus" })
  flowStatus?: FlowStatusEnum;
}
