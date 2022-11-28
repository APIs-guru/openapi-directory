import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetProjectsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names: string[];
}
