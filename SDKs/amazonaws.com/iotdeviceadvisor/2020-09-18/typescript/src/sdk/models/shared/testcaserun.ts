import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



// TestCaseRun
/** 
 * Provides test case run.
**/
export class TestCaseRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=failure" })
  failure?: string;

  @SpeakeasyMetadata({ data: "json, name=logUrl" })
  logUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=testCaseDefinitionId" })
  testCaseDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=testCaseDefinitionName" })
  testCaseDefinitionName?: string;

  @SpeakeasyMetadata({ data: "json, name=testCaseRunId" })
  testCaseRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings?: string;
}
