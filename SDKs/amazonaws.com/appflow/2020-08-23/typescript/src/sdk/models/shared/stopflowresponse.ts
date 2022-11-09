import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowStatusEnum } from "./flowstatusenum";


export class StopFlowResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=flowArn" })
  flowArn?: string;

  @Metadata({ data: "json, name=flowStatus" })
  flowStatus?: FlowStatusEnum;
}
