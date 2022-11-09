import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowStatusEnum } from "./flowstatusenum";


export class UpdateFlowResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=flowStatus" })
  flowStatus?: FlowStatusEnum;
}
