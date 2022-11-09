import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestGridSession } from "./testgridsession";


export class GetTestGridSessionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=testGridSession" })
  testGridSession?: TestGridSession;
}
