import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartSuiteRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=suiteRunArn" })
  suiteRunArn?: string;

  @Metadata({ data: "json, name=suiteRunId" })
  suiteRunId?: string;
}
