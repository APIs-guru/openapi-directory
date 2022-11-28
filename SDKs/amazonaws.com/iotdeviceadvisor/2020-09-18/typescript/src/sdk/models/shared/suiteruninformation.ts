import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuiteRunStatusEnum } from "./suiterunstatusenum";



// SuiteRunInformation
/** 
 * Information about the suite run.
**/
export class SuiteRunInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=endAt" })
  endAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: number;

  @SpeakeasyMetadata({ data: "json, name=passed" })
  passed?: number;

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SuiteRunStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionId" })
  suiteDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionName" })
  suiteDefinitionName?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteDefinitionVersion" })
  suiteDefinitionVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteRunId" })
  suiteRunId?: string;
}
