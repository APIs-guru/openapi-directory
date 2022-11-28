import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestGridSession } from "./testgridsession";



export class GetTestGridSessionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=testGridSession" })
  testGridSession?: TestGridSession;
}
