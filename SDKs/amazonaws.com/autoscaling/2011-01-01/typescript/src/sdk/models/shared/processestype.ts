import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessType } from "./processtype";



export class ProcessesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ProcessType })
  processes?: ProcessType[];
}
