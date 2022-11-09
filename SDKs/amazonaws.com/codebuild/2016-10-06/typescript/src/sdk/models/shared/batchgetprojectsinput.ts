import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchGetProjectsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names: string[];
}
