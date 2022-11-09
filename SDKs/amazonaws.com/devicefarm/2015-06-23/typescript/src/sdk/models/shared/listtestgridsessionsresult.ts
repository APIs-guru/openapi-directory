import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TestGridSession } from "./testgridsession";


export class ListTestGridSessionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=testGridSessions", elemType: shared.TestGridSession })
  testGridSessions?: TestGridSession[];
}
