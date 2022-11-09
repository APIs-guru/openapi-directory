import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";


// TestCaseRun
/** 
 * Provides test case run.
**/
export class TestCaseRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=failure" })
  failure?: string;

  @Metadata({ data: "json, name=logUrl" })
  logUrl?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: StatusEnum;

  @Metadata({ data: "json, name=testCaseDefinitionId" })
  testCaseDefinitionId?: string;

  @Metadata({ data: "json, name=testCaseDefinitionName" })
  testCaseDefinitionName?: string;

  @Metadata({ data: "json, name=testCaseRunId" })
  testCaseRunId?: string;

  @Metadata({ data: "json, name=warnings" })
  warnings?: string;
}
