import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetCommitsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitIds" })
  commitIds: string[];

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
