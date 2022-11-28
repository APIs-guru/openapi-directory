import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartSuiteRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=suiteRunArn" })
  suiteRunArn?: string;

  @SpeakeasyMetadata({ data: "json, name=suiteRunId" })
  suiteRunId?: string;
}
