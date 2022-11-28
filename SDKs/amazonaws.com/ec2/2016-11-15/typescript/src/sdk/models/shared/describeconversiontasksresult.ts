import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConversionTask } from "./conversiontask";



export class DescribeConversionTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConversionTask })
  conversionTasks?: ConversionTask[];
}
