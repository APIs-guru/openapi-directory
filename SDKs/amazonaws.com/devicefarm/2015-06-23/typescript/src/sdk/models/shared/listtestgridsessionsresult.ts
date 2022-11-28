import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestGridSession } from "./testgridsession";



export class ListTestGridSessionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=testGridSessions", elemType: TestGridSession })
  testGridSessions?: TestGridSession[];
}
