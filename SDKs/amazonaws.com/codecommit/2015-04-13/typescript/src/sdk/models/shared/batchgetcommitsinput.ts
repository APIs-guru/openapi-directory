import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchGetCommitsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitIds" })
  commitIds: string[];

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
