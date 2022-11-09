import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalysisStatusEnum } from "./analysisstatusenum";


export class DescribeDetectorModelAnalysisResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: AnalysisStatusEnum;
}
