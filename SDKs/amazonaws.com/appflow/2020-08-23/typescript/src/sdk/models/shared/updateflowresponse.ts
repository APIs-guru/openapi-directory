import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowStatusEnum } from "./flowstatusenum";



export class UpdateFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flowStatus" })
  flowStatus?: FlowStatusEnum;
}
