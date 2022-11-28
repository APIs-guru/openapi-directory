import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisStatusEnum } from "./analysisstatusenum";



export class DescribeDetectorModelAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AnalysisStatusEnum;
}
