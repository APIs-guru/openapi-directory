import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SuiteRunStatusEnum } from "./suiterunstatusenum";


// SuiteRunInformation
/** 
 * Information about the suite run.
**/
export class SuiteRunInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=endAt" })
  endAt?: Date;

  @Metadata({ data: "json, name=failed" })
  failed?: number;

  @Metadata({ data: "json, name=passed" })
  passed?: number;

  @Metadata({ data: "json, name=startedAt" })
  startedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: SuiteRunStatusEnum;

  @Metadata({ data: "json, name=suiteDefinitionId" })
  suiteDefinitionId?: string;

  @Metadata({ data: "json, name=suiteDefinitionName" })
  suiteDefinitionName?: string;

  @Metadata({ data: "json, name=suiteDefinitionVersion" })
  suiteDefinitionVersion?: string;

  @Metadata({ data: "json, name=suiteRunId" })
  suiteRunId?: string;
}
